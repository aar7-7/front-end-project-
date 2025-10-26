import clientDatabiz from'../assets/client-databiz.svg'
import clientAudiophile from'../assets/client-audiophile.svg'
import clientMeet from'../assets/client-meet.svg'
import clientMaker from'../assets/client-maker.svg'
import mainImg from'../assets/image-hero-desktop.png'
import React from 'react'
export default function Body(){
    return (
      <div className="body-content">
        <div className="left-side">
          <p id="title">
            make <br />
            remote work
          </p>
          <p>
            Get your team in sync, no matter your location. <br />
            Streamline processes, create team rituals, and <br />
            watch productivity soar.
          </p>
          <button id="learn-more-btn">Learn more</button>
          <div className="icons">
            <img src={clientDatabiz} alt="" />
            <img src={clientAudiophile} alt="" />
            <img src={clientMeet}alt="" />
            <img src={clientMaker}alt="" />
          </div>
        </div>
        <div className="right-side">
          <img
            src={mainImg}
            alt=""
            id="main-img"
          />
        </div>
      </div>
    );

} 