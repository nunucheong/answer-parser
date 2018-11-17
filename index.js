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

const assignQuestionType = (questionID) => {
  const matchingQuestion = survey.surveyQuestions.filter((question) => {
    return question.questionID === questionID
  })
  return matchingQuestion[0].questionType
}

const answersWithQuestionType = responses.reduce((resPrev, respondent) => {
  const answersWithQuestionType = respondent.answers.map((answer, index) => {
      const questionType = assignQuestionType(answer.questionID)
      const answerWithQuestionType = Object.assign(answer, {
        'surveyID': survey.surveyID,
        'respondentID': respondent.respondentID,
        'questionType': questionType
      })
      return answerWithQuestionType
  })
  return resPrev = resPrev.concat(answersWithQuestionType)
}, [])

const json2csvParser = new Json2csvParser({fields});
const csv = json2csvParser.parse(answersWithQuestionType)
console.log(csv)
