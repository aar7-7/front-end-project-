import '../style/card.css'
export default function Card(props){
  console.log(props);
  return (
    <div className="card">
      <img src={props.img.src} alt={props.img.alt} className="card-img" />
      <div className="card-content">
        <div className="location">
          <img
            src="../src/assets/marker.png"
            alt="marker"
            className="location-icon"
          />
          <span>{props.title}</span>
          <a
            href={props.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="location-name">{props.country}</h2>
        <div className="date">{props.date}</div>
        <p className="description">{props.text}</p>
      </div>
    </div>
  );
}