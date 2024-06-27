import React from "react";

const styles = {
  container: {
    maxWidth: "120rem",
    padding: "0 3.2rem",
    margin: "0 auto",
    width: "800px",
  }
};
const HomeModule = () => {
  return (
    <div style={styles.container}>
      <meta property="og:title" content="The Rock" />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
    </div>
  );
};

export default HomeModule;
