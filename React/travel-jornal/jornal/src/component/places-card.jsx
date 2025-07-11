import '../style/card.css'
export default function Card(props){
  console.log(props);
    return (
      <>
        <div className="card"> 
          <div className="location-poster">
            <img
              src={props.img.src}
              alt={props.img.alt}
              className="location-img"
            />
          </div>
          <div className="location-detail">
            <div className="location">
              <img
                src="../src/assets/marker.png"
                alt="marker image"
                className="marker"
              />
              <span>{props.title}</span>
              <a href={props.googleMapsLink}>View on GoogleMaps</a>
            </div>
            <h2 className="location-name">{props.country}</h2>
            <div className="travel-date">{props.date}</div>
            <div className="travel-description">
              {props.text}
            </div>
          </div>
        </div>
      </>
    );
}