import troll from "./assets/troll-img.png";
export default function Header() {
  return (
    <header className="header">
      <img src={troll} alt="troll image" />
      <h1>Meme Generator</h1>
    </header>
  );
}
