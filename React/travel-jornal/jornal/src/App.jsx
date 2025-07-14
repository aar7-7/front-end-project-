import Header from './header.jsx'
import Card from './component/places-card.jsx'
import Data from "./data/travel-data.js";
function App() {
  const travelDataElement = Data.map((data) => {
    return (
      <Card
        img={{
          src: data.img.src,
          alt: data.img.alt,
        }}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        date={data.dates}
        text={data.text}
      />
    );
  });

  return (
    <>
      <Header />,{travelDataElement}
    </>
  );
}

export default App
