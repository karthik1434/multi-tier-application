import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function EXPERIENCE({ articles }) {
  if (!articles?.length) return <p>Loading content...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      {articles.map((item) => {
        const attributes = item || {};
        const job = attributes.job;
        const HOBBIES = attributes.HOBBIES;

        // Helper to render either plain text or Strapi blocks
        const renderContent = (content) => {
          if (!content) {
            return <p>No details provided</p>;
          }
          if (typeof content === "string") {
            return (
              <p
                style={{
                  margin: "2px 0",
                  whiteSpace: "pre-line", // keep line breaks
                }}
              >
                {content}
              </p>
            );
          }
          if (Array.isArray(content)) {
            return (
              <BlocksRenderer
                content={content}
                blocks={{
                  paragraph: ({ children, ...props }) => (
                    <p
                      {...props}
                      style={{
                        margin: "2px 0",
                      }}
                    >
                      {children}
                    </p>
                  ),
                  text: ({ text, bold, italic }) => {
                    let style = {};
                    if (bold) style.fontWeight = "bold";
                    if (italic) style.fontStyle = "italic";
                    return <span style={style}>{text}</span>;
                  },
                }}
              />
            );
          }
          return <p>Invalid content format</p>;
        };

        return (
          <div
            key={item.id || Math.random()}
            style={{
              position: "relative",
              marginBottom: "1.5rem",
            }}
          >
            {/* Heading */}
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
                marginBottom: "0px",
              }}
            >
              Experience
            </p>

            {/* Job / Experience */}
            <div style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              {renderContent(job)}
            </div>

            {/* Hobbies */}
            <div style={{ fontSize: "1rem", lineHeight: "1.6", marginTop: "10px" }}>
              <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                textAlign: "center",
                marginBottom: "0px",
              }}
            >
              Interest
            </p>
            <p className="interests-text">{renderContent(HOBBIES)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EXPERIENCE;
