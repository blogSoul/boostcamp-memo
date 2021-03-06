## π Day 0 - BoostCamp

### π Transpiling

Compiling is the general term for taking source code written in one language and transforming into another.

Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.

Transpilers λλ μμ€ λ μμ€ μ»΄νμΌλ¬λ ν νλ‘κ·Έλλ° μΈμ΄λ‘ μμ±λ μμ€ μ½λλ₯Ό μ½κ³  λ€λ₯Έ μΈμ΄λ‘ λλ±ν μ½λλ₯Ό μμ±νλ λκ΅¬μλλ€. 

JavaScriptλ‘ λ³ννλ μΈμ΄λ μ’μ’ compile-to-JS μΈμ΄λΌκ³  νλ©° JavaScript λ₯Ό λμ μΌλ‘ νλ€κ³  ν©λλ€ .

```
npm install jquery --save-prod
npm install jquery --save-dev
```
μ
```
npm i jquery
npm i jquery -D
```
μ κ°μ΅λλ€.

### π ν

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

### π Resolve

μ΄ μ΅μμ λͺ¨λμ ν΄μνλ λ°©μμ λ³κ²½ ν  μ μμ΅λλ€. 

webpackμ μλ§μ κΈ°λ³Έκ°μ μ κ³΅νμ§λ§, μμΈνκ² ν΄μ λ°©μμ λ³κ²½ν  μ μμ΅λλ€.

μ°Έκ³  μ¬μ΄νΈ : https://webpack.kr/configuration/resolve/

### π Remark
