export default function Body(){
    return (
      <main className="body">
        <form className="meme-form">
          <div className="input-row">
            <div className="form-group">
              <label htmlFor="top-text">Top text</label>
              <input
                type="text"
                placeholder="Top text"
                className="top-text"
                id="top-text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bottom-text">Bottom text</label>
              <input
                type="text"
                placeholder="Bottom text"
                className="bottom-text"
                id="bottom-text"
              />
            </div>
          </div>

          <button className="meme-button">Get a new meme image 🖼️</button>
        </form>
        <div className="meme">
          <img src="" alt="" className="meme-image" />
          <h2 className="top-text"></h2>
          <h2 className="bottom-text"></h2>
        </div>
      </main>
    );
}