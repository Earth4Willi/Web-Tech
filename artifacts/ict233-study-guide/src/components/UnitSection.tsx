import type { UnitContent } from "@/data/studyContent";

const HIGHLIGHT_COLORS: Record<string, string> = {
  info: "cyan",
  warning: "red",
  tip: "yellow",
  success: "green",
  extra: "purple",
};

const HIGHLIGHT_ICONS: Record<string, string> = {
  info: "ℹ",
  warning: "⚠",
  tip: "💡",
  success: "✓",
  extra: "★",
};

interface UnitSectionProps {
  unit: UnitContent;
}

export default function UnitSection({ unit }: UnitSectionProps) {
  return (
    <div className="unit-section">
      {/* Unit Header */}
      <div className="unit-header">
        <div className="unit-number-badge">UNIT {unit.id}</div>
        <h2 className="unit-title">{unit.title}</h2>
        <p className="unit-description">{unit.description}</p>
        <span className="unit-weeks-badge">{unit.weeksCovered}</span>
      </div>

      {/* Definitions */}
      <div className="content-card">
        <h3 className="card-title cyan">
          <span className="card-title-icon">📖</span> Key Definitions
        </h3>
        <div className="definitions-grid">
          {unit.definitions.map((def) => (
            <div key={def.term} className="definition-item">
              <div className="def-term">{def.term}</div>
              <div className="def-body">{def.definition}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Concepts */}
      <div className="content-card">
        <h3 className="card-title yellow">
          <span className="card-title-icon">🧠</span> Key Concepts
        </h3>
        <div className="concepts-grid">
          {unit.keyConcepts.map((concept) => (
            <div key={concept.title} className="concept-block">
              <h4 className="concept-title">{concept.title}</h4>
              <ul className="concept-list">
                {concept.points.map((point, i) => (
                  <li key={i} className="concept-point">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Boxes */}
      <div className="highlights-grid">
        {unit.highlights.map((box, i) => {
          const color = HIGHLIGHT_COLORS[box.type];
          const icon = HIGHLIGHT_ICONS[box.type];
          return (
            <div key={i} className={`highlight-box ${color}`}>
              <div className="highlight-header">
                <span className="highlight-icon">{icon}</span>
                <span className="highlight-title">{box.title}</span>
              </div>
              <p className="highlight-content">{box.content}</p>
            </div>
          );
        })}
      </div>

      {/* Tables */}
      {unit.tables.map((table, ti) => (
        <div key={ti} className="content-card">
          {table.caption && (
            <h3 className="card-title purple">
              <span className="card-title-icon">📊</span> {table.caption}
            </h3>
          )}
          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  {table.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Exam Questions */}
      <div className="content-card exam-questions-card">
        <h3 className="card-title green">
          <span className="card-title-icon">🎯</span> Top Exam Questions
        </h3>
        <ol className="exam-q-list">
          {unit.examQuestions.map((q, i) => (
            <li key={i} className="exam-q-item">{q}</li>
          ))}
        </ol>
      </div>

      {/* Common Mistakes */}
      <div className="content-card mistakes-card">
        <h3 className="card-title red">
          <span className="card-title-icon">⚠</span> Common Mistakes to Avoid
        </h3>
        <ul className="mistakes-list">
          {unit.commonMistakes.map((mistake, i) => (
            <li key={i} className="mistake-item">{mistake}</li>
          ))}
        </ul>
      </div>

      {/* Quick Revision */}
      <div className="content-card revision-card">
        <h3 className="card-title cyan">
          <span className="card-title-icon">⚡</span> Quick Revision Summary
        </h3>
        <div className="revision-grid">
          {unit.quickRevision.map((item, i) => (
            <div key={i} className="revision-item">
              <span className="revision-bullet">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
