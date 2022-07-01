import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const preview = questionNumber === '1' ? 1 : parseInt(questionNumber) - 1
  const next = parseInt(questionNumber) + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${preview}`}>Précédent</Link>
      {questionNumber === '10' ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${next}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
