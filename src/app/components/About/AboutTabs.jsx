import Tab from "../../components/About/Tab";

function AboutTabs({ activeTab, setActiveTab }) {
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex space-x-4 gap-8">
      <Tab
        label="Наша місія"
        isActive={activeTab === "mission"}
        onClick={() => handleTabChange("mission")}
      />
      <Tab
        label="Наші принципи"
        isActive={activeTab === "principles"}
        onClick={() => handleTabChange("principles")}
      />
      <Tab
        label="Наші цінності"
        isActive={activeTab === "values"}
        onClick={() => handleTabChange("values")}
      />
    </div>
  );
}

export default AboutTabs;
