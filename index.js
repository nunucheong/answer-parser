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

console.log(columnTemplate)

const parsedResponses = responses.map(respondent => {
  const responsentID = respondent.respondentID
  const answers = respondent.answers;

})
