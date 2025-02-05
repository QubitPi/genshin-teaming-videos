<div align="center">
    <a href="https://github.com/QubitPi/genshin-teaming-videos/actions/workflows/ci-cd.yaml"><img src="https://img.shields.io/github/actions/workflow/status/QubitPi/genshin-teaming-videos/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD" alt="CI/CD"/></a>
    <a href="https://paion-data.sentry.io/issues/?project=4508675053977600"><img src="https://img.shields.io/badge/Application%20Monitoring-362D59.svg?style=for-the-badge&logo=sentry&logoColor=white" alt="sentry.io"/></a>
    <img src="https://img.shields.io/badge/NODE-22-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge" alt="Node 22"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/webpack-8DD6F9?logo=webpack&logoColor=white&style=for-the-badge" alt="webpack"/>
    <a href="https://yarnpkg.com/"><img src="https://img.shields.io/badge/Yarn%202-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn 2"/></a>
    <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/></a>
    <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="Prettier"/></a>
    <a href="https://jest.qubitpi.org/"><img src="https://img.shields.io/badge/Jest%20Unit%20Tests-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest"/></a>
    <a href="https://cypress.qubitpi.org"><img src="https://img.shields.io/badge/Cypress%20E2E-69D3A7?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress"/></a>
    <a href="https://developer.chrome.com/docs/lighthouse/overview"><img src="https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Lighthouse"/></a>
    <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white" alt="Apache License"/></a>
    <br/>
    <a href="https://app.argos-ci.com/qubitpi/genshin-teaming-videos/reference"><img src="https://argos-ci.com/badge-large.svg" alt="Argos Visual Testing"/></a>
</div>

<!-- TOC -->

- [原神配队展示应用](#原神配队展示应用)
  - [缘起](#缘起)
  - [Development](#development)
    - [Getting Source Code](#getting-source-code)
    - [Scripts](#scripts)
    - [Automatically Formatting Codebase](#automatically-formatting-codebase)
  - [Application Monitoring](#application-monitoring)
    - [视频加载](#视频加载)
  - [License](#license)
  <!-- TOC -->

# 原神配队展示应用

## 缘起

在使用 [Enka.Network](https://enka.network/u/MyFavoriteCharacters/) 很长的一段时间里，我对它的角色展示功能一直很满意，
但在配队展示方面却不尽然。和很多玩家一样，我玩原神最大的乐趣在于培养自己的团队搭建能力 - 根据每个喜欢角色的特点，
搭配出高伤害的配队，而 Enka.Network 无法满足我在这方面的展示需求，所以我编写了这个项目用来展示我的原神配队。

应用地址 - [genshin.qubitpi.org](https://genshin.qubitpi.org/)

应用处于初期 PoC 阶段，我会抽空逐步实现新功能、新内容、 新体验，敬请期待。

## Development

Genshin Teaming Video has the following packages:

- [`genshin-teaming-videos-app`](packages/genshin-teaming-videos-app): holding business logics of the app
- [`genshin-teaming-videos-redux`](packages/genshin-teaming-videos-redux): managing all app states. Genshin Teaming Video
  uses [Redux state management][Redux]
  [![Redux Badge](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat-square)][Redux]
  instead of ~~[React state management][useState]~~ for a much more maintainable decoupling of React components

### Getting Source Code

```console
git clone git@github.com:QubitPi/genshin-teaming-videos.git
cd genshin-teaming-videos
```

Install dependencies by

> [!NOTE]
>
> Node 22 and Yarn 2 must be installed in local environment.

```console
yarn
```

### Scripts

- `yarn start`: Runs the app in development mode. Open http://localhost:3000 to view it in the browser. The page automatically reloads
  if we make changes to the code. we will see the build errors and lint warnings in the console.
- `yarn test`: Runs the unit tests
- `yarn cypress:open` & `yarn e2e`: Opens Cypress End-to-End test console and runs the End-to-End tests, respectively
- `yarn build`: Builds the app for production to the build folder. It correctly bundles React in production mode and
  optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### Automatically Formatting Codebase

When CI/CD complains about "Code style check" as the following:

![](./docs/cicd-code-style-check-error-example.png)

Simply run the following command at project root which will auto formatting the codebase using Prettier:

```console
yarn prettier --ignore-path .gitignore . --write
```

> [!TIP]
>
> It's always a good practice to auto-formatting code whenever convenient <img src="https://github.com/QubitPi/QubitPi/blob/master/img/%E5%BF%83%E6%B5%B7.png?raw=true" width="60px" />

## Application Monitoring

sentry.io has been integrated into the [genshin.qubitpi.org](https://genshin.qubitpi.org/). Specifically:

- [sourcemap](https://docs.sentry.io/platforms/javascript/legacy-sdk/sourcemaps/) is uploaded to sentry during build time
- error trace are sent to sentry during run time

While error trace will always be sent in production mode (`process.env.NODE_ENV === "production"`), an
[.env.sentry-build-plugin](https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/webpack/) is, however,
required for `yarn build` to be able to generate and upload the sourcemap.

> [!NOTE]
>
> If the `.env.sentry-build-plugin` is not present, `yarn build` will still run successfully. It's just not possible
> then to locate the exact location of error in code on sentry issue console because sourcemap hasn't been uploaded

### 视频加载

我将视频同时上传到了 YouTube 和 B站。如果访问者是大陆用户，则加载 B站 版本，国外访问则加载 YouTube 版本

> [!CAUTION]
>
> - 两个版本视频内容完全一样
> - 本地开发是无法加载 B站 视频的，因为 CORS 限制。YouTube 则没有这个问题。所以本地开发模式会默认加载 YouTube 版本

## License

The use and distribution terms for [genshin-teaming-videos]() are covered by the [Apache License, Version 2.0](./LICENSE).

[Redux]: https://react-redux.qubitpi.org/
[useState]: https://react.qubitpi.org/reference/react/useState
