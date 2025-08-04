import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/karthik-articles')
      .then(res => setArticles(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Articles from Strapi</h1>
      {articles.length > 0 ? (
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.karthikResume}</h2>
            <p>{article.projects}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}

export default App;
