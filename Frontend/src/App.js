import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/karthik-articles')
      .then(res => {
        setArticles(res.data.data || []);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>This is my portfolio website </h1>
      {articles.length === 0 ? (
        <p>Loading content...</p>
      ) : (
        articles.map(item => {
          const { id, karthikResume, projects } = item;

          return (
            <div key={id}>
              <h2>Projects:</h2>
              <p>{projects ?? 'No project details provided'}</p>
              <h2>Resume:</h2>
              <p>{karthikResume ?? 'No resume content available'}</p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
