# gatsby study

## about

gatsby 공부용 레포입니다.

## 초기 설정

- 프로젝트 구조

  - gatsby-browser.js, gatsby-node.js, gatsby-ssr.js
    - 각각 브라우저, 노드, 서버사이드 렌더링 환경에서 사용하고자 하는 API 를 정의함
  - src
    - pages : 이 폴더에 있는 컴포넌트들은 각각의 URL을 갖는 페이지로 변환됨
      - index.js : 브라우저에서 해당 주소로 들어가자 마자 보이는 페이지
      - 404.js : 존재하지 않는 URL로 들어갔을 때 표시되는 페이지
    - components : 공통으로 사용되는 리액트 컴포넌트를 분리해 둔 곳
    - images는 사용하고자 하는 이미지가 위치한 곳

- Typescript 적용

  - yarn add -D typescript
  - yarn add gatsby-plugin-typescript
  - gatsby-config.js 수정

  ```js
  module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, ...`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-typescript`, // 추가!
        `gatsby-plugin-react-helmet`,
        ...
    ],
    ...
  }
  ```

  - tsconfig.json 생성 및 다음 두 항목 주석 해제
    - yarn tsc --init
    ```json
    {
      "compilerOptions": {
        // ...
        "allowJs": true,
        "jsx": "preserve"
        // ...
      }
    }
    ```

- Prettier 설정

  - 취향대로 설정..

  ```json
  {
    "arrowParens": "always",
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 80,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "all",
    "useTabs": false
  }
  ```

## Markdown 파일로 페이지 생성하기

- gatsby-node.js도 typescript로 작성해보자
  - yarn add -D ts-node
  ```js
  require('ts-node').register();
  const { createPages } = require('./src/lib/createPages');
  ```
  - CreatePagesArgs 통해 페이지 추가
  - yarn add gatsby-transformer-remark
  ```js
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: `${__dirname}/posts`,
        },
    },
    `gatsby-transformer-remark`,
  ```

## GraphQL UI 사용

- http://localhost:8000/\_\_\_graphql
