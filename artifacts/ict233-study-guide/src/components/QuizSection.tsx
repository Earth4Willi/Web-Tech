import { useState, useCallback } from "react";
import { quizQuestions } from "@/data/quizQuestions";

type AnswerState = { selected: number; revealed: boolean };

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ShuffledQuestion {
  id: number;
  unit: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function pickQuestions(count: number): ShuffledQuestion[] {
  const shuffled = shuffleArray(quizQuestions).slice(0, count);
  return shuffled.map((q) => {
    const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correct }));
    const shuffledOptions = shuffleArray(indexed);
    const newCorrect = shuffledOptions.findIndex((o) => o.isCorrect);
    return {
      id: q.id,
      unit: q.unit,
      question: q.question,
      options: shuffledOptions.map((o) => o.opt),
      correctIndex: newCorrect,
      explanation: q.explanation,
    };
  });
}

const QUIZ_COUNT = 15;

export default function QuizSection() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});
  const [finished, setFinished] = useState(false);

  const startQuiz = useCallback(() => {
    setQuestions(pickQuestions(QUIZ_COUNT));
    setCurrentIndex(0);
    setAnswers({});
    setFinished(false);
    setStarted(true);
  }, []);

  const handleSelect = (questionIdx: number, optionIdx: number) => {
    if (answers[questionIdx]?.revealed) return;
    setAnswers((prev) => ({
      ...prev,
      [questionIdx]: { selected: optionIdx, revealed: true },
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const score = Object.entries(answers).filter(
    ([idx, ans]) => ans.selected === questions[parseInt(idx)]?.correctIndex
  ).length;

  const totalAnswered = Object.keys(answers).length;

  const getPerformance = (s: number, total: number) => {
    const pct = (s / total) * 100;
    if (pct >= 75) return { label: "Strong", color: "green", icon: "🏆", msg: "Outstanding performance! You are well-prepared for the exam." };
    if (pct >= 50) return { label: "Average", color: "yellow", icon: "📚", msg: "Good progress! Review the units where you struggled and try again." };
    return { label: "Needs Improvement", color: "red", icon: "💪", msg: "Keep studying! Go back through the units and take the quiz again." };
  };

  if (!started) {
    return (
      <div className="quiz-section">
        <div className="section-hero">
          <div className="section-hero-icon">🧪</div>
          <h2 className="section-hero-title">Advanced Quiz System</h2>
          <p className="section-hero-sub">Test your knowledge with {quizQuestions.length}+ questions. Each session pulls {QUIZ_COUNT} random questions from the pool.</p>
        </div>
        <div className="quiz-start-card">
          <div className="quiz-start-stats">
            <div className="qs-stat">
              <div className="qs-num cyan">{quizQuestions.length}+</div>
              <div className="qs-label">Question Pool</div>
            </div>
            <div className="qs-stat">
              <div className="qs-num yellow">{QUIZ_COUNT}</div>
              <div className="qs-label">Per Session</div>
            </div>
            <div className="qs-stat">
              <div className="qs-num green">8</div>
              <div className="qs-label">Units Covered</div>
            </div>
            <div className="qs-stat">
              <div className="qs-num purple">4</div>
              <div className="qs-label">Options Each</div>
            </div>
          </div>
          <div className="quiz-features">
            <div className="qf-item">🔀 Questions and answer options randomized each session</div>
            <div className="qf-item">✓ Instant feedback with explanations after each answer</div>
            <div className="qf-item">📊 Real-time score tracking and performance rating</div>
            <div className="qf-item">🔁 Retry for a completely new set of questions</div>
          </div>
          <button className="quiz-start-btn" onClick={startQuiz}>
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const perf = getPerformance(score, totalAnswered || 1);
    return (
      <div className="quiz-section">
        <div className="quiz-results">
          <div className={`result-icon ${perf.color}`}>{perf.icon}</div>
          <h2 className="result-title">Quiz Complete!</h2>
          <div className={`result-score ${perf.color}`}>
            {score} / {questions.length}
          </div>
          <div className={`result-badge ${perf.color}`}>{perf.label}</div>
          <p className="result-msg">{perf.msg}</p>
          <div className="result-breakdown">
            <div className="rb-item green">Correct: {score}</div>
            <div className="rb-item red">Wrong: {questions.length - score}</div>
            <div className="rb-item cyan">Total: {questions.length}</div>
          </div>
          <button className="quiz-retry-btn" onClick={startQuiz}>
            🔁 Retry Quiz (New Questions)
          </button>
        </div>

        <div className="results-review">
          <h3 className="rr-title">Question Review</h3>
          {questions.map((q, qi) => {
            const ans = answers[qi];
            const isCorrect = ans?.selected === q.correctIndex;
            return (
              <div key={qi} className={`rr-item ${isCorrect ? "correct" : "wrong"}`}>
                <div className="rr-q-num">{qi + 1}</div>
                <div className="rr-content">
                  <div className="rr-question">{q.question}</div>
                  <div className={`rr-your-ans ${isCorrect ? "green" : "red"}`}>
                    Your answer: {ans ? q.options[ans.selected] : "Not answered"}
                    {isCorrect ? " ✓" : " ✗"}
                  </div>
                  {!isCorrect && (
                    <div className="rr-correct-ans green">
                      Correct: {q.options[q.correctIndex]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentAns = answers[currentIndex];
  const isAnswered = currentAns?.revealed;
  const progressPct = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-section">
      {/* Progress */}
      <div className="quiz-progress-bar-wrap">
        <div className="quiz-progress-bar" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="quiz-status-row">
        <span className="quiz-q-counter">Question {currentIndex + 1} of {questions.length}</span>
        <span className="quiz-score-live">Score: <strong>{score}</strong></span>
        <span className="quiz-unit-badge">Unit {currentQ.unit}</span>
      </div>

      {/* Question Card */}
      <div className="quiz-card">
        <div className="quiz-q-text">{currentQ.question}</div>

        <div className="quiz-options">
          {currentQ.options.map((option, oi) => {
            let cls = "quiz-option";
            if (isAnswered) {
              if (oi === currentQ.correctIndex) cls += " correct";
              else if (oi === currentAns?.selected) cls += " wrong";
              else cls += " dimmed";
            } else {
              cls += " selectable";
            }
            return (
              <button
                key={oi}
                className={cls}
                onClick={() => handleSelect(currentIndex, oi)}
                disabled={isAnswered}
              >
                <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                <span className="option-text">{option}</span>
                {isAnswered && oi === currentQ.correctIndex && (
                  <span className="option-check">✓</span>
                )}
                {isAnswered && oi === currentAns?.selected && oi !== currentQ.correctIndex && (
                  <span className="option-x">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`quiz-explanation ${currentAns.selected === currentQ.correctIndex ? "correct-exp" : "wrong-exp"}`}>
            <strong>{currentAns.selected === currentQ.correctIndex ? "✓ Correct!" : "✗ Incorrect!"}</strong>
            {" "}{currentQ.explanation}
          </div>
        )}

        {isAnswered && (
          <button className="quiz-next-btn" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? "Next Question →" : "Finish Quiz"}
          </button>
        )}
      </div>
    </div>
  );
}
