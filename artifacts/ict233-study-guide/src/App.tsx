import { useState, useEffect } from "react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import UnitSection from "@/components/UnitSection";
import FinalReview from "@/components/FinalReview";
import KeyQuestions from "@/components/KeyQuestions";
import QuizSection from "@/components/QuizSection";
import Watermark from "@/components/Watermark";
import { studyContent } from "@/data/studyContent";

export type TabId = "overview" | `unit-${number}` | "final-review" | "key-questions" | "quizzes";

function App() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app-shell ${isLoaded ? "loaded" : ""}`}>
      <Header />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} units={studyContent.length} />

      <main className="main-content">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="section-fade">
            <div className="overview-hero">
              <div className="overview-icon">⚡</div>
              <h2 className="overview-title">ICT233: Web Technologies & Design</h2>
              <p className="overview-subtitle">Complete Exam Preparation Guide · 2025/2026</p>
              <div className="overview-stats">
                <div className="stat-pill">
                  <span className="stat-num">8</span>
                  <span className="stat-label">Units</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">350+</span>
                  <span className="stat-label">Quiz Questions</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">4</span>
                  <span className="stat-label">Themes</span>
                </div>
              </div>
            </div>

            <div className="course-overview-grid">
              <div className="course-theme-card">
                <div className="theme-num cyan">I</div>
                <h3>Overview of Web Technologies</h3>
                <p>Fundamentals of web technologies, WWW, web programming, browsers, servers, domain names, and the web design process.</p>
              </div>
              <div className="course-theme-card">
                <div className="theme-num yellow">II</div>
                <h3>HTML — HyperText Markup Language</h3>
                <p>Creating web pages with HTML, document structure, formatting, lists, links, multimedia, tables, forms, and HTML5 features.</p>
              </div>
              <div className="course-theme-card">
                <div className="theme-num green">III</div>
                <h3>CSS — Cascading Style Sheets</h3>
                <p>CSS fundamentals, selectors, the box model, units, positioning, layout design with Flexbox and Grid.</p>
              </div>
              <div className="course-theme-card">
                <div className="theme-num purple">IV</div>
                <h3>JavaScript in Web Development</h3>
                <p>Variables, data types, arrays, objects, functions, control flow, DOM manipulation, events, and asynchronous JavaScript.</p>
              </div>
            </div>

            <div className="assessment-info">
              <h3 className="assessment-title">Assessment Breakdown</h3>
              <div className="assessment-grid">
                <div className="assess-item">
                  <div className="assess-score cyan">15%</div>
                  <div className="assess-label">Pop Quiz & Mid-Semester Quiz</div>
                </div>
                <div className="assess-item">
                  <div className="assess-score yellow">20%</div>
                  <div className="assess-label">Lab Sessions & Project</div>
                </div>
                <div className="assess-item">
                  <div className="assess-score green">5%</div>
                  <div className="assess-label">Attendance & Participation</div>
                </div>
                <div className="assess-item">
                  <div className="assess-score red">60%</div>
                  <div className="assess-label">End of Semester Examination</div>
                </div>
              </div>
            </div>

            <div className="grading-table-wrap">
              <h3 className="assessment-title">Grading Policy</h3>
              <table className="grade-table">
                <thead>
                  <tr>
                    <th>Score (%)</th>
                    <th>Grade</th>
                    <th>Grade Point</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["80 – 100", "A", "4.0", "Excellent"],
                    ["75 – 79", "B+", "3.5", "Very Good"],
                    ["70 – 74", "B", "3.0", "Good"],
                    ["65 – 69", "C+", "2.5", "Average"],
                    ["60 – 64", "C", "2.0", "Average"],
                    ["55 – 59", "D+", "1.5", "Below Average"],
                    ["50 – 54", "D", "1.0", "Below Average"],
                    ["0 – 49", "E", "0", "Fail"],
                  ].map(([score, grade, point, status]) => (
                    <tr key={grade}>
                      <td>{score}</td>
                      <td className="grade-letter">{grade}</td>
                      <td>{point}</td>
                      <td>{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Unit Sections */}
        {studyContent.map((unit) =>
          activeTab === `unit-${unit.id}` ? (
            <div key={unit.id} className="section-fade">
              <UnitSection unit={unit} />
            </div>
          ) : null
        )}

        {/* Final Review */}
        {activeTab === "final-review" && (
          <div className="section-fade">
            <FinalReview />
          </div>
        )}

        {/* Key Questions */}
        {activeTab === "key-questions" && (
          <div className="section-fade">
            <KeyQuestions />
          </div>
        )}

        {/* Quizzes */}
        {activeTab === "quizzes" && (
          <div className="section-fade">
            <QuizSection />
          </div>
        )}
      </main>

      <Watermark />
    </div>
  );
}

export default App;
