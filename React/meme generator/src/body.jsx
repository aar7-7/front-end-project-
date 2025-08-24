import React from "react";

export default function Body() {
  const [meme, setMeme] = React.useState(() => ({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  }));

  const handleChange = React.useCallback((event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }, []);

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
        <button className="meme-button">Get a new meme image 🖼️</button>
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
