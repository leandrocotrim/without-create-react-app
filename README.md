# Create react project without `create-react-app`

# Run
`npm start`

# Steps

In terminal
```
mkdir [your_project_folder]
cd [your_project_folder]

npm init -y
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
npm i react react-dom
npm i html-webpack-plugin html-loader --save-dev
npm i webpack-dev-server --save-dev
```

Add in package.json
```json
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
},
```

Create file `.babelrc`
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Create file `src/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
   <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
  <div id="container"></div>
</body>
</html>
```

Create folder `src/components/start` and create component file `src/components/start/start.js`
```javascript
import React, { useState } from 'react';

function Start() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Count: {count}</p>
            <p><button onClick={() => setCount(count + 1)}>Count++</button></p>
            <p><button onClick={() => setCount(count - 1)}>Count--</button></p>
        </>
    );
}

export default Start;
```

Create file `index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Start from './components/start/start';

ReactDOM.render(<Start />, document.getElementById('root'));
```

Create file `webpack.config.js`
```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```

# Run
```
npm start
```

# Reference
https://www.valentinog.com/blog/babel/