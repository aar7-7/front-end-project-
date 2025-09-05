import React from "react";

export default function Body() {
  const [meme, setMeme] = React.useState(() => ({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  }));
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    console.log("r");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleChange = React.useCallback((event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }, []);

  function getRandomMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main className="body">
      <form
        className="meme-form"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Meme Generator Form"
      >
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="top-text">Top text</label>
            <input
              type="text"
              id="top-text"
              name="topText"
              placeholder="Top text"
              className="top-text"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              type="text"
              id="bottom-text"
              name="bottomText"
              placeholder="Bottom text"
              className="bottom-text"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
        </div>
        <button
          type="button"
          className="meme-button"
          onClick={getRandomMemeImage}
        >
          Get a new meme image 🖼️
        </button>
      </form>

      <div className="meme" aria-live="polite">
        <img
          src={meme.randomImage}
          alt={`Meme with top text: "${meme.topText}" and bottom text: "${meme.bottomText}"`}
          className="meme-image"
        />
        <p className="top-txt">{meme.topText}</p>
        <p className="bottom-txt">{meme.bottomText}</p>
      </div>
    </main>
  );
}
