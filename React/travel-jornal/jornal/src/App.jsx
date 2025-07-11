import Header from './header.jsx'
import Card from './component/places-card.jsx'
function App() {


  return (
    <>
      <Header />
      ,
      <Card
        img={{
          src: "https://scrimba.com/links/travel-journal-japan-image-url",
          alt: "Japan",
        }}
        title="mount Fuji"
        country="Japan"
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3605556,138.7277778,12z/data=!3m1!4b1!4m5!3m4!1s0x6018c2f7d9e0c7a3:0x2f5b6d8c9e8f8f8!8m2!3d35.3605556!4d138.7277778"
        date="12 Jan 2020 - 29 Jan 2020"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      
    </>
  );
}

export default App
