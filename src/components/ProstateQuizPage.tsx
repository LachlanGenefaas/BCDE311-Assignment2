import { useState } from "react";
import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";

interface ProstateQuizPageProps {
  headerImage: string;
  footerImage: string;
}

const questions = [
  {
    question: "Who can get prostate cancer?",
    answers: [
      "Only cisgender men",
      "Anyone with a prostate",
      "Only people over 65",
    ],
    correctAnswer: 1,
    explanation:
      "Anyone with a prostate can get prostate cancer, including transgender women and male-assigned non-binary or intersex people.",
  },
  {
    question: "Which statement about early prostate cancer is true?",
    answers: [
      "It always causes noticeable symptoms",
      "It often causes a fever",
      "It may not cause symptoms",
    ],
    correctAnswer: 2,
    explanation:
      "Prostate cancer often has no symptoms in its early stages. If you have health concerns, talk with your doctor.",
  },
  {
    question: "What does a PSA blood test measure?",
    answers: [
      "The level of prostate-specific antigen in the blood",
      "The size of the prostate",
      "The amount of testosterone in the blood",
    ],
    correctAnswer: 0,
    explanation:
      "A PSA test measures prostate-specific antigen. A raised result can have several causes, so discuss your result with a health professional.",
  },
];

export default function ProstateQuizPage({
  headerImage,
  footerImage,
}: ProstateQuizPageProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const quizComplete = questionIndex === questions.length;
  const currentQuestion = questions[questionIndex];

  function submitAnswer() {
    if (selectedAnswer === null || answered) {
      return;
    }

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
    setAnswered(true);
  }

  function goToNextQuestion() {
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
  }

  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>Prostate Quiz</h1>
        <div className="info-page-introduction">
          <p>Test your knowledge about prostate health and prostate cancer.</p>
        </div>
        <section className="prostate-quiz" aria-label="Prostate health quiz">
          {quizComplete ? (
            <div className="quiz-results" aria-live="polite">
              <h2>Quiz complete</h2>
              <p>
                You scored <strong>{score} out of {questions.length}</strong>.
              </p>
              <button
                className="quiz-button"
                type="button"
                onClick={restartQuiz}
              >
                Try again
              </button>
            </div>
          ) : (
            <>
              <p className="quiz-progress">
                Question {questionIndex + 1} of {questions.length}
              </p>
              <h2 className="quiz-question" id="quiz-question">
                {currentQuestion.question}
              </h2>
              <fieldset
                className="quiz-answers"
                aria-labelledby="quiz-question"
                disabled={answered}
              >
                <legend className="quiz-visually-hidden">
                  Choose one answer
                </legend>
                {currentQuestion.answers.map((answer, answerIndex) => (
                  <label className="quiz-answer" key={answer}>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={answerIndex}
                      checked={selectedAnswer === answerIndex}
                      onChange={() => setSelectedAnswer(answerIndex)}
                    />
                    <span>{answer}</span>
                  </label>
                ))}
              </fieldset>

              {answered && (
                <p className="quiz-feedback" aria-live="polite">
                  <strong>
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? "Correct."
                      : "Not quite."}
                  </strong>{" "}
                  {currentQuestion.explanation}
                </p>
              )}

              {answered ? (
                <button
                  className="quiz-button"
                  type="button"
                  onClick={goToNextQuestion}
                >
                  {questionIndex === questions.length - 1
                    ? "See your score"
                    : "Next question"}
                </button>
              ) : (
                <button
                  className="quiz-button"
                  type="button"
                  onClick={submitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Check answer
                </button>
              )}
            </>
          )}
        </section>
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}
