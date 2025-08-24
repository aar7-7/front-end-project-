import catMemeImage from "./assets/cat-meme.jpeg";
import React from "react";
export default function Body() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function getMeme(formData) {
    let upperTxt = formData.get("top-text");
    let bottemTxt = formData.get("bottom-text");
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: upperTxt,
      bottomText: bottemTxt,
    }));
  }
  return (
    <main className="body">
      <form className="meme-form" action={getMeme}>
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="top-text">Top text</label>
            <input
              type="text"
              name="top-text"
              placeholder="Top text"
              className="top-text"
              id="top-text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              type="text"
              name="bottom-text"
              placeholder="Bottom text"
              className="bottom-text"
              id="bottom-text"
            />
          </div>
        </div>

        <button className="meme-button">Get a new meme image 🖼️</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <div className="top-txt">{meme.topText}</div>
        <div className="bottom-txt">{meme.bottomText}</div>
      </div>
    </main>
  );
}
