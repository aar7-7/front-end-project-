import Header from './header.jsx'
import Card from './component/places-card.jsx'
import Data from "./data/travel-data.js";
function App() {
  const travelDataElement = Data.map((data) => {
    return <Card {...data} />;
  });

  return (
    <>
      <Header />,{travelDataElement}
    </>
  );
}

export default App
