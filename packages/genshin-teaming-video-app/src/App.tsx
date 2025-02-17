/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
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

import React, { useEffect, useState } from "react";
import "./App.css";
import { videos as data } from "./videos";

import background from "./img/background.png";
import { type Character } from "./Character";

const UNDEFINED = "";

export default function App(): JSX.Element {
  const teams: Array<{
    youtubeVideoId: string;
    bilibiliVideoId: string;
    character1: { character: Character; position: string };
    character2: { character: Character; position: string };
    character3: { character: Character; position: string };
    character4: { character: Character; position: string };
  }> = data;
  const [displayedTeamIdx, setDisplayedTeamIdx] = useState(0);

  const [country, setCountry] = useState<string>(UNDEFINED);

  useEffect(() => {
    const fetchUserCountry = async (): Promise<void> => {
      // It is safe to expose this token '66396cc3f3c8d8' publicly because the token is being protected by a whitelist
      // ( https://ipinfo.io/account/token )
      /* eslint-disable */
      void fetch("https://ipinfo.io/json?token=66396cc3f3c8d8")
        .then((response: any) => response.json())
        .then((data: any) => {
          setCountry(data["country"]);
        });
      /* eslint-enable */
    };

    if (country === UNDEFINED) {
      void fetchUserCountry();
    }
  });

  return (
    <div className="container">
      <div className="slide">
        <div className="video" style={{ backgroundImage: `url(${background})` }}>
          <div className="content">
            {country === "CN" ? (
              <iframe
                width="100%"
                title={"原神配队视频"}
                src={`//player.bilibili.com/player.html?bvid=${teams[displayedTeamIdx].bilibiliVideoId}`}
                scrolling="no"
                frameBorder="no"
                allowFullScreen
              ></iframe>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${teams[displayedTeamIdx].youtubeVideoId}`}
                title={"Genshin Teaming Video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        <div
          className={"character character1"}
          style={{ backgroundImage: `url(${teams[displayedTeamIdx].character1.character.characterImage})` }}
        >
          <article className="card__article">
            <div className="card__data">
              <span className="card__description">{teams[displayedTeamIdx].character1.position}</span>
              <h2 className="card__title">{teams[displayedTeamIdx].character1.character.nameZh}</h2>
              <a href={teams[displayedTeamIdx].character1.character.configurationURL} className="card__button">
                配置
              </a>
            </div>
          </article>
        </div>
        <div
          className={"character character2"}
          style={{ backgroundImage: `url(${teams[displayedTeamIdx].character2.character.characterImage})` }}
        >
          <article className="card__article">
            <div className="card__data">
              <span className="card__description">{teams[displayedTeamIdx].character2.position}</span>
              <h2 className="card__title">{teams[displayedTeamIdx].character2.character.nameZh}</h2>
              <a href={teams[displayedTeamIdx].character2.character.configurationURL} className="card__button">
                配置
              </a>
            </div>
          </article>
        </div>
        <div
          className={"character character3"}
          style={{ backgroundImage: `url(${teams[displayedTeamIdx].character3.character.characterImage})` }}
        >
          <article className="card__article">
            <div className="card__data">
              <span className="card__description">{teams[displayedTeamIdx].character3.position}</span>
              <h2 className="card__title">{teams[displayedTeamIdx].character3.character.nameZh}</h2>
              <a href={teams[displayedTeamIdx].character3.character.configurationURL} className="card__button">
                配置
              </a>
            </div>
          </article>
        </div>
        <div
          className={"character character4"}
          style={{ backgroundImage: `url(${teams[displayedTeamIdx].character4.character.characterImage})` }}
        >
          <article className="card__article">
            <div className="card__data">
              <span className="card__description">{teams[displayedTeamIdx].character4.position}</span>
              <h2 className="card__title">{teams[displayedTeamIdx].character4.character.nameZh}</h2>
              <a href={teams[displayedTeamIdx].character4.character.configurationURL} className="card__button">
                配置
              </a>
            </div>
          </article>
        </div>
      </div>

      <div className="button">
        {displayedTeamIdx > 0 && (
          <button
            className="prev"
            onClick={() => {
              setDisplayedTeamIdx(displayedTeamIdx - 1);
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}
        {displayedTeamIdx < teams.length - 1 && (
          <button
            className="next"
            onClick={() => {
              setDisplayedTeamIdx(displayedTeamIdx + 1);
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
}
