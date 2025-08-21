import React, { useEffect, useState } from "react";
import { fetchArticles, mytools } from "./services/api";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Aboutsection from "./components/about";
import SkillsAndExperience from "./components/SkillsAndExperience";
import { ResumeDownload, ProjectSourceCode } from "./components/buttens";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((res) => setArticles(res.data.data || []))
      .catch((err) => console.error("Articles fetch error:", err));

    mytools()
      .then((res) => setTools(res.data.data || []))
      .catch((err) => console.error("Tools fetch error:", err));
  }, []);

  return (
    <div className="App">
      <Header />
      <ProfileSection />
      <Aboutsection articles={articles} />
      <SkillsAndExperience tools={tools} articles={articles} />
      <ResumeDownload />
      <ProjectSourceCode />
    </div>
  );
}

export default App;
