import React from "react";
import { API_BASE_URL } from "../config";

function ArticlesList({ articles }) {
  if (!articles.length) return <p>Loading content...</p>;

  return (
    <>
      {articles.map((item) => {
        // Support both top-level and attributes style data
        const attributes = item?.attributes || item || {};
        
        // Projects
        const projects = attributes.projects || "No project details provided";
        const about = attributes.about || "No project details provided";

        // Resume
        const resumeFile = attributes.karthikResume;
        const resumeUrl = resumeFile?.data?.attributes?.url
          ? API_BASE_URL + resumeFile.data.attributes.url
          : "";

        return (
          <div key={item.id || Math.random()} style={{ marginBottom: "20px" }}>
            <h2>Projects:</h2>
            <p>{projects}</p>

            <h2>about:</h2>
            <p>{about}</p>

            <h2>Resume:</h2>
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#3B82F6",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  display: "inline-block",
                }}
              >
                View / Download Resume
              </a>
            ) : (
              <p>No resume content available</p>
            )}
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticlesList;
