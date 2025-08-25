function SKILS({ tools }) {
  if (!tools?.length) return <p>Loading tools...</p>;

  return (
    <div className="skills-container">
      {tools.map((item, index) => {
        const attributes = item?.attributes || item || {};
        const devops = attributes.DevOps || "No skill provided";
        const operatingSystems = attributes.OperatingSystems || "No skill provided";
        const scriptingLanguages = attributes.ScriptingLanguages || "No skill provided";
        const monitoring = attributes.Monitoring || "No skill provided";
        const versionControl = attributes.VersionControl || "No skill provided";

        return (
          <div key={index} className="skills-section">
            <p className="skills-title">Skills</p>

            <div className="skills-grid">
              <span className="skills-label">DevOps:</span>
              <span className="skills-value">{devops}</span>

              <span className="skills-label">OS:</span>
              <span className="skills-value">{operatingSystems}</span>

              <span className="skills-label">Languages:</span>
              <span className="skills-value">{scriptingLanguages}</span>

              <span className="skills-label">Monitoring:</span>
              <span className="skills-value">{monitoring}</span>

              <span className="skills-label">Version Control:</span>
              <span className="skills-value">{versionControl}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SKILS;
