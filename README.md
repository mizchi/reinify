# Reinify

browserify plugin for reiny template.

[mizchi/reiny](https://github.com/mizchi/reiny "mizchi/reiny")

```
$ npm install --save-dev reiny reinify browserify
```

## Example

```
// main.js
global.React = require('react');
var foo = require('./foo')
console.log(React.renderToStaticMarkup(foo()));
```

```
// foo.reiny
.foo()
  .hoge()
```


```
$ npm install --save-dev reiny reinify browserify
$ browserify -t reinify --extension=".reiny" main.js | node
<div class="foo"><div class="hoge"></div></div>
```
