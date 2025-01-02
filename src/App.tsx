import React from 'react';
import './App.css';


function App() {

  const BARBARA = "/img/barbara-ak47.png"
  const CITLALI = "/img/citlali.png"
  const XIANG_LING = "/img/xiang-ling.PNG"
  const HU_TAO = "/img/hutao.png"

  return (
      <div className="container">
        <div className="slide">
          <div className="item" style={{backgroundImage: "url(/img/background.PNG)"}}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: "url(/img/background.PNG)"}}>
            <div className="content">
              <video
                  src={`https://www.googleapis.com/drive/v3/files/1QCqyI7VPmkA1cjZPPDDg636cPGdJoLyq?alt=media&key=AIzaSyDyfx-znEdHqX1PhBgfOVXkBnjioffkgTs`}
                  controls autoPlay muted></video>
            </div>
          </div>
          <div className="item" style={{backgroundImage: `url(${HU_TAO})`}}></div>
          <div className="item" style={{backgroundImage: `url(${XIANG_LING})`}}></div>
          <div className="item" style={{backgroundImage: `url(${CITLALI})`}}></div>
          <div className="item" style={{backgroundImage: `url(${BARBARA})`}}></div>

        </div>

        {/*<div className="button">*/}
        {/*  <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>*/}
        {/*  <button className="next"><i className="fa-solid fa-arrow-right"></i></button>*/}
        {/*</div>*/}

      </div>
  );
}

export default App;
