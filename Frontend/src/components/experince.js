import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function EXPERIENCE({ articles }) {
  if (!articles?.length) return <p>Loading content...</p>;

  return (
    <div style={{ textAlign: "left" }}>
      {articles.map((item) => {
        const attributes = item || {};
        const job = attributes.job;

        return (
          <div
            key={item.id || Math.random()}
            style={{
              margin: "0 auto",
              padding: "0 20px",
              maxWidth: "850px",
              fontFamily: "'Cormorant Garamond', serif", // Centaur-like font
              position: "relative",
            }}
          >
            {/* Centered Heading */}
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.4rem",
                marginBottom: "6px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              Experience
            </p>

            {/* Experience Text */}
            <div
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              {Array.isArray(job) && job.length > 0 ? (
                <BlocksRenderer
                  content={job}
                  blocks={{
                    paragraph: ({ children, ...props }) => (
                      <p
                        {...props}
                        style={{
                          margin: "4px 0",
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
              ) : (
                <p>No experience details provided</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EXPERIENCE;
