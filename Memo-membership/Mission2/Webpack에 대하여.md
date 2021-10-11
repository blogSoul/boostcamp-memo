## 📕 Day 0 - BoostCamp

### 📘 Transpiling

Compiling is the general term for taking source code written in one language and transforming into another.

Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.

Transpilers 또는 소스 대 소스 컴파일러는 한 프로그래밍 언어로 작성된 소스 코드를 읽고 다른 언어로 동등한 코드를 생성하는 도구입니다. 

JavaScript로 변환하는 언어는 종종 compile-to-JS 언어라고 하며 JavaScript 를 대상 으로 한다고 합니다 .

```
npm install jquery --save-prod
npm install jquery --save-dev
```
은
```
npm i jquery
npm i jquery -D
```
와 같습니다.

### 📘 팁

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ['./public/javascripts/index.js', './public/stylesheets/style.css' ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'views/index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: 'style.css'
            }
        )
    ]
};
```

### 📘 Resolve

이 옵션은 모듈을 해석하는 방식을 변경 할 수 있습니다. 

webpack은 알맞은 기본값을 제공하지만, 상세하게 해석 방식을 변경할 수 있습니다.

참고 사이트 : https://webpack.kr/configuration/resolve/

### 🎞 Remark
