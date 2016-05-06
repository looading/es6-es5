function* gene() {
	yield 1;
	yield 2;
	return 0;
}

const g = gene();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
