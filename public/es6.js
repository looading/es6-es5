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