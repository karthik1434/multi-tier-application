function SKILS({ tools }) {
  if (!tools?.length) return <p>Loading tools...</p>; // safe check with ?.

  return (
    <div
      style={{
        textAlign: "left",
        padding: "30px",
        maxWidth: "850px", // limit content width
        margin: "0 auto", // center container
      }}
    >
      {tools.map((item, index) => {
        const attributes = item?.attributes || item || {};
        const devops = attributes.DevOps || "No skill provided";
        const operatingSystems = attributes.OperatingSystems || "No skill provided";
        const scriptingLanguages = attributes.ScriptingLanguages || "No skill provided";
        const monitoring = attributes.Monitoring || "No skill provided";
        const versionControl = attributes.VersionControl || "No skill provided";

        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            {/* Centered heading */}
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Skills
            </p>

            {/* Skill rows */}
            <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", rowGap: "10px" }}>
              <span style={{ fontWeight: "bold", textAlign: "right", paddingRight: "10px" }}>
                DevOps:
              </span>
              <span>{devops}</span>

              <span style={{ fontWeight: "bold", textAlign: "right", paddingRight: "10px" }}>
                Operating Systems:
              </span>
              <span>{operatingSystems}</span>

              <span style={{ fontWeight: "bold", textAlign: "right", paddingRight: "10px" }}>
                Scripting & Languages:
              </span>
              <span>{scriptingLanguages}</span>

              <span style={{ fontWeight: "bold", textAlign: "right", paddingRight: "10px" }}>
                Monitoring:
              </span>
              <span>{monitoring}</span>

              <span style={{ fontWeight: "bold", textAlign: "right", paddingRight: "10px" }}>
                Version Control:
              </span>
              <span>{versionControl}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SKILS;
