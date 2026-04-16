import { useEffect, useState } from "react";

export default function Header() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="site-header">
      <div className="header-watermark">WEB TECHNOLOGIES</div>
      <div className="header-inner">
        <div className="header-left">
          <div className="header-badge">
            <span className="badge-dot" style={{ opacity: pulse ? 1 : 0.4 }} />
            Exam Ready
          </div>
          <div className="header-course-code">ICT233</div>
        </div>
        <div className="header-center">
          <h1 className="header-title">
            Web Technologies<br />
            <span className="header-title-accent">&amp; Design</span>
          </h1>
          <p className="header-subtitle">Complete Exam Guide · AAMUSTED · Level 200</p>
        </div>
        <div className="header-right">
          <div className="header-meta">
            <div className="meta-item">
              <span className="meta-label">Lecturer</span>
              <span className="meta-value">Maxwell Dorgbefu Jnr.</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Credits</span>
              <span className="meta-value cyan">3 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
