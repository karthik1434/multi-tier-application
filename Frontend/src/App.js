import React, { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ArticlesList from "./components/ArticlesList";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then((res) => setArticles(res.data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <ProfileSection />
      <ArticlesList articles={articles} />
    </div>
  );
}

export default App;
