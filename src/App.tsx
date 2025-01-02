/**
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useState} from 'react';
import './App.css';
import {videos as data} from "./videos"


function App() {

  const teams: {
    youtubeVideoId: string,
    character1: string,
    character2: string,
    character3: string,
    character4: string
  }[] = data
  const [displayedTeamIdx, setDisplayedTeamIdx] = useState(0)

  return (
      <div className="container">
        <div className="slide">
          <div className="item" style={{backgroundImage: "url(/img/background.PNG)"}}>
            <div className="content">
              <iframe
                  src={`https://www.youtube.com/embed/${teams[displayedTeamIdx].youtubeVideoId}`}
                  title={"gaming video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
            </div>
          </div>
          <div className="item" style={{backgroundImage: `url(${teams[displayedTeamIdx].character1})`}}></div>
          <div className="item" style={{backgroundImage: `url(${teams[displayedTeamIdx].character2})`}}></div>
          <div className="item" style={{backgroundImage: `url(${teams[displayedTeamIdx].character3})`}}></div>
          <div className="item" style={{backgroundImage: `url(${teams[displayedTeamIdx].character4})`}}></div>

        </div>

        <div className="button">
          {
              displayedTeamIdx > 0 &&
              <button className="prev" onClick={() => setDisplayedTeamIdx(displayedTeamIdx - 1)}><i
                  className="fa-solid fa-arrow-left"></i></button>
          }
          {
              displayedTeamIdx < teams.length - 1 &&
              <button className="next" onClick={() => setDisplayedTeamIdx(displayedTeamIdx + 1)}><i
                  className="fa-solid fa-arrow-right"></i></button>
          }
        </div>
      </div>
  );
}

export default App;
