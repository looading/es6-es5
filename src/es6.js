
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
// let c = ({a=1,b=2,c} = {}) => {
// 	console.log(a, b, c);
// }
// c()
// c({a:1})
// c({a:1,b:2})
// c({a:1,b:2,c:3})

let arr = [
	['name', 'ctyloading'],
	['age', 123]
]
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}