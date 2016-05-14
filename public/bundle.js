(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * 异布任务的封装
 */
// function* gen(){
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result);
// }

// var g = gen();
// var result = g.next();

// result.value.then(function(data){
//   return data.json();
// }).then(function(data){
//   g.next(data);
// });
//

/**
 * Thunk 函数  JavaScript 是传值调用
 */

// const thunk = require('thunkify')
// const fs = require('fs')
// const co =require('co')
// const readFile = thunk(fs.readFile)

// var gen = function* () {
// 	var r1 = yield readFile('./1.txt')
// 	console.log(r1.toString());
// 	var r2 = yield readFile('./2.txt')
// 	console.log(r2.toString());
// }

// function run(fn) {
// 	var gen = fn()
// 	function next (err, data) {
// 		var result = gen.next(data)
// 		if(result.done) return ;
// 		result.value(next)
// 	}

// 	next()
// }

// run(gen)

// co(gen)
//
//

/**
 * class
 */

// class Person {
// 	constructor(name, age, sex) {
// 		this.name = name
// 		this.age = age
// 		this.sex = sex
// 		console.log('is run')
// 	}
// 	say(...type) {
// 		for(let item of type){
// 			console.log(item,this[item]);
// 		}
// 		console.log(type);
// 	}
// }
// class Old extends Person {
// 	constructor(name, age, sex, hobby) {
// 		super(name, age, sex)
// 		this.hobby = hobby
// 		this.name = 'xhz'
// 	}
// 	toString() {
// 		console.log(this.name + super.sex);
// 	}
// }
// let a = new Old('job', 22, 'man', 'like to play basketball whit firends!');

// a.say('name', 'age', 'sex', 'hobby')

// a.toString()
// window.a = a

// class Foo {
// 	constructor(...arg) {
// 		this.arg = arg
// 	}
// 	* [Symbol.iterator]() {
// 		for(let arg of this.arg) {
// 			yield arg
// 		}
// 	}
// }

// for(let item of new Foo('cty', 'xhz', 'xxx')) {
// 	render(item);
// }
//

/**
 * module
 */
// import { a } from './1'
// a()

// let abs = [ 1,2,3,4,5,6,7,8 ]

// let [w, ...c] = abs

// console.log(w, c);

/**
 * node
 */

// const fs = require('fs')
// const xlsx = require('node-xlsx')
// fs.readFile('/Users/ctyloading/downloads/1.xlsx', (err, data) => {
// 	if(err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log(data.toString());
// })

// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync('/Users/ctyloading/downloads/1.xlsx'))

// console.log(JSON.stringify(workSheetsFromBuffer));

// fs.writeFileSync('./test12.json', JSON.stringify(workSheetsFromBuffer), {

// }, (...arg) => {
// 	console.log(arg);
// 	console.log(workSheetsFromBuffer.toString());
// });
//

/**
 * default arguments
 */
var c = function c() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$a = _ref.a;
  var a = _ref$a === undefined ? 1 : _ref$a;
  var _ref$b = _ref.b;
  var b = _ref$b === undefined ? 2 : _ref$b;
  var _c = _ref.c;

  console.log(a, b, _c);
};
c();
c(1);
c(1, 2);
c(1, 2, 3);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiDlvILluIPku7vliqHnmoTlsIHoo4VcbiAqL1xuLy8gZnVuY3Rpb24qIGdlbigpe1xuLy8gICB2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2l0aHViJztcbi8vICAgdmFyIHJlc3VsdCA9IHlpZWxkIGZldGNoKHVybCk7XG4vLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4vLyB9XG5cbi8vIHZhciBnID0gZ2VuKCk7XG4vLyB2YXIgcmVzdWx0ID0gZy5uZXh0KCk7XG5cbi8vIHJlc3VsdC52YWx1ZS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuLy8gICByZXR1cm4gZGF0YS5qc29uKCk7XG4vLyB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuLy8gICBnLm5leHQoZGF0YSk7XG4vLyB9KTtcbi8vXG5cbi8qKlxuICogVGh1bmsg5Ye95pWwICBKYXZhU2NyaXB0IOaYr+S8oOWAvOiwg+eUqFxuICovXG5cbi8vIGNvbnN0IHRodW5rID0gcmVxdWlyZSgndGh1bmtpZnknKVxuLy8gY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG4vLyBjb25zdCBjbyA9cmVxdWlyZSgnY28nKVxuLy8gY29uc3QgcmVhZEZpbGUgPSB0aHVuayhmcy5yZWFkRmlsZSlcblxuLy8gdmFyIGdlbiA9IGZ1bmN0aW9uKiAoKSB7XG4vLyBcdHZhciByMSA9IHlpZWxkIHJlYWRGaWxlKCcuLzEudHh0Jylcbi8vIFx0Y29uc29sZS5sb2cocjEudG9TdHJpbmcoKSk7XG4vLyBcdHZhciByMiA9IHlpZWxkIHJlYWRGaWxlKCcuLzIudHh0Jylcbi8vIFx0Y29uc29sZS5sb2cocjIudG9TdHJpbmcoKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJ1bihmbikge1xuLy8gXHR2YXIgZ2VuID0gZm4oKVxuLy8gXHRmdW5jdGlvbiBuZXh0IChlcnIsIGRhdGEpIHtcbi8vIFx0XHR2YXIgcmVzdWx0ID0gZ2VuLm5leHQoZGF0YSlcbi8vIFx0XHRpZihyZXN1bHQuZG9uZSkgcmV0dXJuIDtcbi8vIFx0XHRyZXN1bHQudmFsdWUobmV4dClcbi8vIFx0fVxuXG4vLyBcdG5leHQoKVxuLy8gfVxuXG4vLyBydW4oZ2VuKVxuXG4vLyBjbyhnZW4pXG4vL1xuLy9cblxuLyoqXG4gKiBjbGFzc1xuICovXG5cbi8vIGNsYXNzIFBlcnNvbiB7XG4vLyBcdGNvbnN0cnVjdG9yKG5hbWUsIGFnZSwgc2V4KSB7XG4vLyBcdFx0dGhpcy5uYW1lID0gbmFtZVxuLy8gXHRcdHRoaXMuYWdlID0gYWdlXG4vLyBcdFx0dGhpcy5zZXggPSBzZXhcbi8vIFx0XHRjb25zb2xlLmxvZygnaXMgcnVuJylcbi8vIFx0fVxuLy8gXHRzYXkoLi4udHlwZSkge1xuLy8gXHRcdGZvcihsZXQgaXRlbSBvZiB0eXBlKXtcbi8vIFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0sdGhpc1tpdGVtXSk7XG4vLyBcdFx0fVxuLy8gXHRcdGNvbnNvbGUubG9nKHR5cGUpO1xuLy8gXHR9XG4vLyB9XG4vLyBjbGFzcyBPbGQgZXh0ZW5kcyBQZXJzb24ge1xuLy8gXHRjb25zdHJ1Y3RvcihuYW1lLCBhZ2UsIHNleCwgaG9iYnkpIHtcbi8vIFx0XHRzdXBlcihuYW1lLCBhZ2UsIHNleClcbi8vIFx0XHR0aGlzLmhvYmJ5ID0gaG9iYnlcbi8vIFx0XHR0aGlzLm5hbWUgPSAneGh6J1xuLy8gXHR9XG4vLyBcdHRvU3RyaW5nKCkge1xuLy8gXHRcdGNvbnNvbGUubG9nKHRoaXMubmFtZSArIHN1cGVyLnNleCk7XG4vLyBcdH1cbi8vIH1cbi8vIGxldCBhID0gbmV3IE9sZCgnam9iJywgMjIsICdtYW4nLCAnbGlrZSB0byBwbGF5IGJhc2tldGJhbGwgd2hpdCBmaXJlbmRzIScpO1xuXG4vLyBhLnNheSgnbmFtZScsICdhZ2UnLCAnc2V4JywgJ2hvYmJ5JylcblxuLy8gYS50b1N0cmluZygpXG4vLyB3aW5kb3cuYSA9IGFcblxuLy8gY2xhc3MgRm9vIHtcbi8vIFx0Y29uc3RydWN0b3IoLi4uYXJnKSB7XG4vLyBcdFx0dGhpcy5hcmcgPSBhcmdcbi8vIFx0fVxuLy8gXHQqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuLy8gXHRcdGZvcihsZXQgYXJnIG9mIHRoaXMuYXJnKSB7XG4vLyBcdFx0XHR5aWVsZCBhcmdcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIH1cblxuLy8gZm9yKGxldCBpdGVtIG9mIG5ldyBGb28oJ2N0eScsICd4aHonLCAneHh4JykpIHtcbi8vIFx0cmVuZGVyKGl0ZW0pO1xuLy8gfVxuLy9cblxuLyoqXG4gKiBtb2R1bGVcbiAqL1xuLy8gaW1wb3J0IHsgYSB9IGZyb20gJy4vMSdcbi8vIGEoKVxuXG4vLyBsZXQgYWJzID0gWyAxLDIsMyw0LDUsNiw3LDggXVxuXG4vLyBsZXQgW3csIC4uLmNdID0gYWJzXG5cbi8vIGNvbnNvbGUubG9nKHcsIGMpO1xuXG4vKipcbiAqIG5vZGVcbiAqL1xuXG4vLyBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbi8vIGNvbnN0IHhsc3ggPSByZXF1aXJlKCdub2RlLXhsc3gnKVxuLy8gZnMucmVhZEZpbGUoJy9Vc2Vycy9jdHlsb2FkaW5nL2Rvd25sb2Fkcy8xLnhsc3gnLCAoZXJyLCBkYXRhKSA9PiB7XG4vLyBcdGlmKGVycikge1xuLy8gXHRcdGNvbnNvbGUubG9nKGVycik7XG4vLyBcdFx0cmV0dXJuO1xuLy8gXHR9XG4vLyBcdGNvbnNvbGUubG9nKGRhdGEudG9TdHJpbmcoKSk7XG4vLyB9KVxuXG4vLyBjb25zdCB3b3JrU2hlZXRzRnJvbUJ1ZmZlciA9IHhsc3gucGFyc2UoZnMucmVhZEZpbGVTeW5jKCcvVXNlcnMvY3R5bG9hZGluZy9kb3dubG9hZHMvMS54bHN4JykpXG5cbi8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHdvcmtTaGVldHNGcm9tQnVmZmVyKSk7XG5cbi8vIGZzLndyaXRlRmlsZVN5bmMoJy4vdGVzdDEyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh3b3JrU2hlZXRzRnJvbUJ1ZmZlciksIHtcblxuLy8gfSwgKC4uLmFyZykgPT4ge1xuLy8gXHRjb25zb2xlLmxvZyhhcmcpO1xuLy8gXHRjb25zb2xlLmxvZyh3b3JrU2hlZXRzRnJvbUJ1ZmZlci50b1N0cmluZygpKTtcbi8vIH0pO1xuLy9cblxuLyoqXG4gKiBkZWZhdWx0IGFyZ3VtZW50c1xuICovXG52YXIgYyA9IGZ1bmN0aW9uIGMoKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgdmFyIF9yZWYkYSA9IF9yZWYuYTtcbiAgdmFyIGEgPSBfcmVmJGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGE7XG4gIHZhciBfcmVmJGIgPSBfcmVmLmI7XG4gIHZhciBiID0gX3JlZiRiID09PSB1bmRlZmluZWQgPyAyIDogX3JlZiRiO1xuICB2YXIgX2MgPSBfcmVmLmM7XG5cbiAgY29uc29sZS5sb2coYSwgYiwgX2MpO1xufTtcbmMoKTtcbmMoMSk7XG5jKDEsIDIpO1xuYygxLCAyLCAzKTsiXX0=
