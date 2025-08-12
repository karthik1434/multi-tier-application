function Aboutsection({ articles }) {
  if (!articles.length) return <p>Loading content...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      {articles.map((item) => {
        const attributes = item?.attributes || item || {};
        const about =
          attributes.about || "No project details provided";

        return (
          <div
            key={item.id || Math.random()}
            style={{
              margin: "0 auto",
              padding: "0 20px",
              maxWidth: "850px",
              fontFamily: "Centaur, Centaur, serif",
              position: "relative",
            }}
          >
            {/* Top quote */}
            <div
              style={{
                fontSize: "3rem",
                color: "brown",
                position: "absolute",
                top: "-30px",
                left: "0",
              }}
            >
              ‘‘
            </div>

            {/* About text */}
            <div
              style={{
                margin: "40px auto 10px auto", // reduced bottom margin
                maxWidth: "860px",
                textAlign: "justify",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              {about}
            </div>

            {/* Bottom quote - moved up */}
            <div
              style={{
                fontSize: "3rem",
                color: "brown",
                position: "absolute",
                bottom: "0", // moved up closer to text
                right: "0",
                transform: "translateY(60%)", // fine tune vertical position
              }}
            >
              ”
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Aboutsection;

