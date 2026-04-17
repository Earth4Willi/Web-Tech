import { useState, useRef } from "react";
import { quizQuestions } from "@/data/quizQuestions";

const UNIT_LABELS: Record<number, string> = {
  1: "Overview of Web Technologies",
  2: "Browsers, Servers & Web Design Process",
  3: "HTML Fundamentals",
  4: "HTML Formatting, Lists, Links & Multimedia",
  5: "HTML Tables & Forms",
  6: "CSS Fundamentals",
  7: "CSS Units, Positioning & Layout",
  8: "JavaScript in Web Development",
};

const UNIT_COLORS: Record<number, string> = {
  1: "cyan",
  2: "yellow",
  3: "green",
  4: "purple",
  5: "red",
  6: "cyan",
  7: "yellow",
  8: "green",
};

type AnswerMap = Record<number, number>; // questionId -> selectedOptionIndex

function getUnitQuestions(unit: number | "all") {
  if (unit === "all") return quizQuestions;
  return quizQuestions.filter((q) => q.unit === unit);
}

export default function QuizSection() {
  const [activeUnit, setActiveUnit] = useState<number | "all">(1);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const unitRefs = useRef<Record<string | number, HTMLDivElement | null>>({});

  const handleTabClick = (unit: number | "all") => {
    setActiveUnit(unit);
    if (unit !== "all") {
      setTimeout(() => {
        unitRefs.current[unit]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (answers[questionId] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const resetUnit = () => {
    const qs = getUnitQuestions(activeUnit);
    setAnswers((prev) => {
      const next = { ...prev };
      qs.forEach((q) => delete next[q.id]);
      return next;
    });
  };

  const resetAll = () => setAnswers({});

  const unitsToShow = activeUnit === "all"
    ? [1, 2, 3, 4, 5, 6, 7, 8]
    : [activeUnit as number];

  // stats for current view
  const viewQuestions = getUnitQuestions(activeUnit);
  const answeredInView = viewQuestions.filter((q) => answers[q.id] !== undefined);
  const correctInView = answeredInView.filter((q) => answers[q.id] === q.correct);

  const allUnits = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="quiz-section">
      {/* Header */}
      <div className="section-hero">
        <div className="section-hero-icon">🧪</div>
        <h2 className="section-hero-title">Quiz Bank by Unit</h2>
        <p className="section-hero-sub">
          All <strong>{quizQuestions.length}</strong> questions organised by unit. Answer on this page — instant feedback after every question.
        </p>
      </div>

      {/* Live Score Bar */}
      <div className="qb-score-bar">
        <div className="qb-score-stat">
          <span className="qb-score-num cyan">{correctInView.length}</span>
          <span className="qb-score-lbl">Correct</span>
        </div>
        <div className="qb-score-stat">
          <span className="qb-score-num yellow">{answeredInView.length}</span>
          <span className="qb-score-lbl">Answered</span>
        </div>
        <div className="qb-score-stat">
          <span className="qb-score-num purple">{viewQuestions.length}</span>
          <span className="qb-score-lbl">Total</span>
        </div>
        {answeredInView.length > 0 && (
          <div className="qb-score-stat">
            <span className={`qb-score-num ${Math.round((correctInView.length / answeredInView.length) * 100) >= 75 ? "green" : Math.round((correctInView.length / answeredInView.length) * 100) >= 50 ? "yellow" : "red"}`}>
              {Math.round((correctInView.length / answeredInView.length) * 100)}%
            </span>
            <span className="qb-score-lbl">Accuracy</span>
          </div>
        )}
        <div className="qb-reset-btns">
          <button className="qb-reset-btn" onClick={resetUnit}>Reset View</button>
          <button className="qb-reset-btn danger" onClick={resetAll}>Reset All</button>
        </div>
      </div>

      {/* Unit Tabs */}
      <div className="qb-tabs">
        <button
          className={`qb-tab ${activeUnit === "all" ? "active all" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All Units
        </button>
        {allUnits.map((u) => {
          const uq = quizQuestions.filter((q) => q.unit === u);
          const answered = uq.filter((q) => answers[q.id] !== undefined);
          const correct = answered.filter((q) => answers[q.id] === q.correct);
          return (
            <button
              key={u}
              className={`qb-tab ${activeUnit === u ? `active ${UNIT_COLORS[u]}` : ""}`}
              onClick={() => handleTabClick(u)}
            >
              <span className="qb-tab-label">Unit {u}</span>
              {answered.length > 0 && (
                <span className={`qb-tab-score ${correct.length === answered.length ? "green" : "yellow"}`}>
                  {correct.length}/{answered.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Question Sections */}
      <div className="qb-content">
        {unitsToShow.map((unitNum) => {
          const unitQs = quizQuestions.filter((q) => q.unit === unitNum);
          const unitAnswered = unitQs.filter((q) => answers[q.id] !== undefined);
          const unitCorrect = unitAnswered.filter((q) => answers[q.id] === q.correct);
          const color = UNIT_COLORS[unitNum];

          return (
            <div
              key={unitNum}
              className="qb-unit-section"
              ref={(el) => { unitRefs.current[unitNum] = el; }}
            >
              {/* Unit Header */}
              <div className={`qb-unit-header ${color}`}>
                <div className="qb-unit-title-row">
                  <span className={`qb-unit-badge ${color}`}>Unit {unitNum}</span>
                  <span className="qb-unit-name">{UNIT_LABELS[unitNum]}</span>
                </div>
                <div className="qb-unit-stats">
                  <span className="qb-unit-stat">
                    <span className={`qb-unit-stat-num ${color}`}>{unitCorrect.length}</span>
                    <span className="qb-unit-stat-lbl">/ {unitAnswered.length} correct</span>
                  </span>
                  <span className="qb-unit-stat">
                    <span className="qb-unit-stat-num">{unitQs.length}</span>
                    <span className="qb-unit-stat-lbl">questions</span>
                  </span>
                  {unitAnswered.length > 0 && (
                    <span className={`qb-unit-pct ${unitAnswered.length > 0 && Math.round((unitCorrect.length / unitAnswered.length) * 100) >= 75 ? "green" : "yellow"}`}>
                      {Math.round((unitCorrect.length / (unitAnswered.length || 1)) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              {/* Questions */}
              <div className="qb-questions-list">
                {unitQs.map((q, qi) => {
                  const selectedIdx = answers[q.id];
                  const isAnswered = selectedIdx !== undefined;
                  const isCorrect = selectedIdx === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`qb-question-card ${isAnswered ? (isCorrect ? "answered-correct" : "answered-wrong") : ""}`}
                    >
                      <div className="qb-q-header">
                        <span className={`qb-q-num ${color}`}>Q{qi + 1}</span>
                        {isAnswered && (
                          <span className={`qb-q-result ${isCorrect ? "correct" : "wrong"}`}>
                            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                          </span>
                        )}
                      </div>
                      <div className="qb-q-text">{q.question}</div>

                      <div className="qb-options">
                        {q.options.map((opt, oi) => {
                          let cls = "qb-option";
                          if (isAnswered) {
                            if (oi === q.correct) cls += " correct";
                            else if (oi === selectedIdx) cls += " wrong";
                            else cls += " dimmed";
                          } else {
                            cls += " selectable";
                          }
                          return (
                            <button
                              key={oi}
                              className={cls}
                              onClick={() => handleSelect(q.id, oi)}
                              disabled={isAnswered}
                            >
                              <span className="qb-opt-letter">{String.fromCharCode(65 + oi)}</span>
                              <span className="qb-opt-text">{opt}</span>
                              {isAnswered && oi === q.correct && <span className="qb-opt-icon">✓</span>}
                              {isAnswered && oi === selectedIdx && oi !== q.correct && <span className="qb-opt-icon wrong">✗</span>}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div className={`qb-explanation ${isCorrect ? "correct-exp" : "wrong-exp"}`}>
                          <span className="qb-exp-label">{isCorrect ? "✓ Correct!" : "✗ Incorrect!"}</span>
                          {" "}{q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
