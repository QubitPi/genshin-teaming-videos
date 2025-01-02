原神配队展示应用
================

[![原神](https://img.shields.io/badge/原神-【烬火】胡桃-FF5A35?style=for-the-badge&logo=mihoyo&logoColor=white&labelColor=4EA4DD)](https://enka.network/u/MyFavoriteCharacters)

![Node Version][node version badge]
[![GitHub workflow status badge][GitHub workflow status badge]][GitHub workflow status URL]
[![Apache License][Apache License Badge]][Apache License, Version 2.0]

缘起
----

在使用 [enka.network](https://enka.network/u/MyFavoriteCharacters/) 很长的一段时间里，我对它的角色展示功能一直很满意，
但在配队展示方面却不尽然。和很多玩家一样，我玩原神最大的乐趣在于培养自己的团队搭建能力 - 根据每个喜欢角色的特点，
搭配出高伤害的配队。而 enka.network 无法满足我在这方面的展示需求，所以我编写了这个项目。

应用地址 - [genshin.qubitpi.org](https://genshin.qubitpi.org/) 项目处于初期 PoC 阶段，我会抽空逐步实现新功能、新内容、
新体验，敬请期待。

开发文档
--------

> [!IMPORTANT]
>
> 开发要求 Node 18 或以上版本

### 本地启动

执行如下命令：

```console
git@github.com:QubitPi/genshin-teaming-videos.git
cd genshin-teaming-videos
yarn
yarn start
```

然后访问 [localhost:3000](http://localhost:3000/) 即可

开源许可
--------

The use and distribution terms for [genshin-teaming-video]() are covered by the [Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0

[GitHub workflow status badge]: https://img.shields.io/github/actions/workflow/status/QubitPi/genshin-teaming-videos/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD
[GitHub workflow status URL]: https://github.com/QubitPi/genshin-teaming-videos/actions/workflows/ci-cd.yaml

[node version badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge
