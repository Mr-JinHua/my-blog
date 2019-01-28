# myblog

> 靳腾华用于博客书写。

## Build Setup
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e
```javascript
	document.getElementById('mdshow').innerHTML = this.md;
```
# run all tests
npm test

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```javascript
function add(num) {
	var count = num;
	var _b = function(num0){
		count += num0;
		return _b;
	}
	_b.valueOf = function(){
		return count;
	}
	return _b;
}
var jin = add(1)(2)(3);
console.log(jin);  // f 6
```