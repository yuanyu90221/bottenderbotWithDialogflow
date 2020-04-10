This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Sending Feedback

Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

## Learn More

To learn Bottender, check out the [Bottender documentation](https://bottender.js.org/docs/en/getting-started).

For more examples, see [Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).

## Reference Document

[使用dialogflow with bottender實做簡易客服bot](https://medium.com/@EtrexKuo/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-dialogflow-%E4%BE%86%E5%84%AA%E5%8C%96-line-bot-%E7%94%A8%E6%88%B6%E9%AB%94%E9%A9%97-27929fbbe73d)

## introduction

這個專案透過Dialogflow的Intent來解析

使用者在bot內的輸入

並且使用Dialogflow 的Train Entity

推導出可能類似的句子

然後透過分類找到Intent對應的handlerName

然後執行回覆

[hackmd](https://hackmd.io/W6aspVYJQN2dAK5TDE5CKA?view)
