import "../App.css";

function Aboutsection({ articles }) {
  if (!articles.length) return <p>Loading content...</p>;

  return (
    <div className="about-container">
      {articles.map((item) => {
        const attributes = item?.attributes || item || {};
        const about = attributes.about || "No project details provided";

        return (
          <div className="about-wrapper" key={item.id || Math.random()}>
            {/* Top quote */}
            <div className="about-quote-top">‘‘</div>

            {/* About text */}
            <div className="about-text">{about}</div>

            {/* Bottom quote */}
            <div className="about-quote-bottom">”</div>
          </div>
        );
      })}
    </div>
  );
}

export default Aboutsection;
