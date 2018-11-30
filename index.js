const getResponses = require('./answers')
const getSurvey = require('./survey')
const Json2csvParser = require('json2csv').Parser

const fields = [
    "surveyID",
    "respondentID",
    "questionID",
    "questionType",
    "editedAt",
    "input"
]

const survey = getSurvey
const surveyQuestions = survey.surveyQuestions
const responses = getResponses()

const qid2MAColumnName = (questionID, choiceIndex) => {
  return `${questionID}_${choiceIndex}`
}

const parseMC = (question) => {
  let parsedMC = {}
  const questionID = question.questionID
  if (question.selector === 'SAVR') {
    parsedMC = parseSingleColumn(question)
  } else {
    parsedMC = parseTwoColumns(question, question.choiceOrder)
  }
  if (question.configuration.otherAsChoice) {
    const columnName = `${questionID}_TEXT`
    parsedMC[columnName] = ""
  }
  if (question.configuration.noneOfAboveAsChoice) {
    const columnName = `${questionID}_NONE`
    parsedMC[columnName] = ""
  }
  return parsedMC
}

const parseMatrix = (question, choices, answers) => {
  if (question.selector === 'SAVR') {
    return parseTwoColumns(question, question.choiceOrder)
  } else {
    return parseThreeColumns(question, question.choiceOrder, question.answerOrder)
  }
}

const parseSingleColumn = (question) => {
  let parseObj = {}
  const questionID = question.questionID
  parseObj[questionID] = ""
  return parseObj
}

const parseTwoColumns = (question, choices) => {
  let parseObj = {}
  const questionID = question.questionID
  choices.forEach(choice => {
    const columnName = qid2MAColumnName(questionID, choice)
    parseObj[columnName] = ""
  })
  return parseObj
}

const parseThreeColumns = (question, choices, answers) => {
  let parseObj = {}
  const questionID = question.questionID
  choices.forEach(choice => {
    answers.forEach(answer => {
      const columnName = `${questionID}_${choice}_${answer}`
      parseObj[columnName] = ""
    })
  })
  return parseObj
}

const columnTemplate = survey.surveyQuestions.reduce((previous, question) => {
  switch (question.questionType) {
    case 'MC':
      return Object.assign(previous, parseMC(question))
      break;
    case 'TE':
      return Object.assign(previous, parseSingleColumn(question))
      break;
    case 'Slider':
      return Object.assign(previous, parseSingleColumn(question))
      break;
    case 'Ranking':
      return Object.assign(previous, parseTwoColumns(question, question.choiceOrder))
      break;
    case 'Matrix':
      return Object.assign(previous, parseMatrix(question))
      break;
    case 'Dropdown':
      return Object.assign(previous, parseMC(question))
      break;
  }
}, {})

const isDropdown = (qid) => {
  const filteredQuestions = surveyQuestions.filter(q => q.questionID === qid)
  return filteredQuestions[0].questionType === 'Dropdown'
}

const isSA = (qid) => {
  const filteredQuestions = surveyQuestions.filter(q => q.questionID === qid)
  return filteredQuestions[0].selector === 'SAVR'
}

const isSingleDropdown = (qid) => {
  return isDropdown(qid) && isSA(qid)
}

const getChoiceLabel = (qid, choiceIndex) => {
  const filteredQuestions = surveyQuestions.filter(q => q.questionID === qid)
  const displayLabel = filteredQuestions[0].choices[choiceIndex]
  if(isSingleDropdown(qid)) {
    return choiceIndex
  }
  if (displayLabel) {
    return displayLabel['display']
  }
  return ''
}

const getAnswerLabel = (qid, answerIndex) => {
  const filteredQuestions = surveyQuestions.filter(q => q.questionID === qid)
  const displayAnswer = filteredQuestions[0].answers[answerIndex]
  return displayAnswer['display']
}


const assignLabelSingleAnswer = (respondent, qid) => {
  const respondentID = respondent.respondentID
  const answers = respondent.answers
  const matchedAnswer = answers.filter(answer => {
    return answer.questionID === qid
  })
  if (matchedAnswer.length === 0) {
    return ''
  }
  const input = matchedAnswer[0].input
  let label = '';
  if ('value' in input) {
    label = input.value
  } else if ('selected' in input) {
    label = getChoiceLabel(qid, input.selected)
  }
  return label
}

const assignLabelMultipleAnswer = (respondent, qid, choice) => {
  const respondentID = respondent.respondentID
  const answers = respondent.answers
  const matchedAnswer = answers.filter(answer => {
    return answer.questionID === qid
  })
  if (matchedAnswer.length === 0) {
    return ''
  }
  const input = matchedAnswer[0].input
  let label = '';
  if ('selected' in input) {
    const selected = input.selected
    if (choice === 'TEXT') {
      const oac = selected.includes('oac')? input.other : ''
      return oac
    }
    if (choice === 'NONE') {
      const noa = selected.includes('noa')? 'None of Above' : ''
      return noa
    }
    if (isDropdown(qid)) {
      const checkLabel = getChoiceLabel(qid, choice)
      label = selected.includes(checkLabel)? checkLabel
                : ''
    } else {
      label = selected.includes(choice)?
                getChoiceLabel(qid, choice)
                : ''
    }
  } else if ('order' in input) {
    const order = input.order
    const choiceByRanking = order[parseInt(choice)-1]
    label = getChoiceLabel(qid, choiceByRanking)
  } else if ('input' in input) {
    const matrixInput = input.input
    for (key in matrixInput) {
      if (matrixInput[key].includes(choice)) {
        label = getAnswerLabel(qid, key)
      }
    }
  }
  return label
}

const assignLabelMatrix = (respondent, qid, choice, ans) => {
  let label = ''
  const respondentID = respondent.respondentID
  const answers = respondent.answers
  const matchedAnswer = answers.filter(answer => {
    return answer.questionID === qid
  })
  if (matchedAnswer.length === 0) return ''
  const matrixInput = matchedAnswer[0].input.input
  if (matrixInput[ans].includes(choice)) {
    label = getAnswerLabel(qid, ans)
  }
  return label
}

const assignLabelToColumn = (key, respondent) => {
  let label = '';
  const [qid, choice, ans] = key.split('_')
  label = (choice && ans)? assignLabelMatrix (respondent, qid, choice, ans) :
            (choice)? assignLabelMultipleAnswer (respondent, qid, choice) :
              assignLabelSingleAnswer(respondent, qid)
  return label
}

const parsedResponses = responses.map(respondent => {
  const parsedAnswers = {};
  for (key in columnTemplate) {
    parsedAnswers[key] = assignLabelToColumn(key, respondent)
  }
  return Object.assign({}, columnTemplate, parsedAnswers)
})

console.log(parsedResponses)
