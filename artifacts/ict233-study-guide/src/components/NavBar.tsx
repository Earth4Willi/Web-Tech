import type { TabId } from "@/App";

interface NavBarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  units: number;
}

const NAV_TABS = (units: number) => [
  { id: "overview" as TabId, label: "Overview" },
  ...Array.from({ length: units }, (_, i) => ({
    id: `unit-${i + 1}` as TabId,
    label: `Unit ${i + 1}`,
  })),
  { id: "final-review" as TabId, label: "Final Review" },
  { id: "key-questions" as TabId, label: "Key Questions" },
  { id: "quizzes" as TabId, label: "Quizzes" },
];

export default function NavBar({ activeTab, setActiveTab, units }: NavBarProps) {
  const tabs = NAV_TABS(units);

  return (
    <nav className="sticky-nav">
      <div className="nav-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
