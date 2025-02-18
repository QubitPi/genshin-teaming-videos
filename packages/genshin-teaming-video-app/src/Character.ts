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

import HU_TAO_IMG from "./img/hutao.png";
import KLEE_IMG from "./img/klee.png";
import EMILIE_IMG from "./img/emilie.png";
import BARBARA_IMG from "./img/barbara.png";
import XIAO_GONG_IMG from "./img/xiaogong.png";
import XIANG_LING_IMG from "./img/xiangling.png";
import CITLALI_IMG from "./img/citlali.png";
import WAN_YE_IMG from "./img/wanye.png";
import ARLECCHINO_IMG from "./img/arlecchino.png";
import FISCHL_IMG from "./img/fischl.png";
import KE_QING_IMG from "./img/keqing.png";
import YAOYAO_IMG from "./img/yaoyao.png";

export interface Character {
  nameZh: string;
  configurationURL: string;
  characterImage: string;
}

export const HU_TAO: Character = {
  nameZh: "胡桃",
  configurationURL: "https://hutao.qubitpi.org",
  characterImage: HU_TAO_IMG,
};

export const ARLECCHINO: Character = {
  nameZh: "阿蕾奇诺",
  configurationURL: "https://arlecchino.qubitpi.org",
  characterImage: ARLECCHINO_IMG,
};

export const BARBARA: Character = {
  nameZh: "芭芭拉",
  configurationURL: "https://barbara.qubitpi.org",
  characterImage: BARBARA_IMG,
};

export const KLEE: Character = {
  nameZh: "可莉",
  configurationURL: "https://klee.qubitpi.org",
  characterImage: KLEE_IMG,
};

export const EMILIE: Character = {
  nameZh: "艾梅莉埃",
  configurationURL: "https://emilie.qubitpi.org",
  characterImage: EMILIE_IMG,
};

export const XIAO_GONG: Character = {
  nameZh: "宵宫",
  configurationURL: "https://xiaogong.qubitpi.org",
  characterImage: XIAO_GONG_IMG,
};

export const XIANG_LING: Character = {
  nameZh: "香菱",
  configurationURL: "https://xiangling.qubitpi.org",
  characterImage: XIANG_LING_IMG,
};

export const CITLALI: Character = {
  nameZh: "希特勒奶奶",
  configurationURL: "https://citlali.qubitpi.org",
  characterImage: CITLALI_IMG,
};

export const WAN_YE: Character = {
  nameZh: "万叶",
  configurationURL: "https://wanye.qubitpi.org",
  characterImage: WAN_YE_IMG,
};

export const FISCHL: Character = {
  nameZh: "菲谢尔",
  configurationURL: "https://fishl.qubitpi.org",
  characterImage: FISCHL_IMG,
};

export const KE_QING: Character = {
  nameZh: "刻晴",
  configurationURL: "https://keqing.qubitpi.org",
  characterImage: KE_QING_IMG,
};

export const YAOYAO: Character = {
  nameZh: "瑶瑶",
  configurationURL: "https://yaoyao.qubitpi.org",
  characterImage: YAOYAO_IMG,
};
