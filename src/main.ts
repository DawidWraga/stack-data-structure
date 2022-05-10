export default class Stack<T> {
	items: { [key: number]: T };
	length: number;

	constructor(iterable: T[] = []) {
		this.items = {};
		this.length = 0;
		iterable.forEach(this.push);
	}

	push = (item: T) => {
		this.length++;
		this.items[this.length] = item;
	};

	pop = () => {
		const item = this.items[this.length];
		delete this.items[this.length];
		this.length--;
		return item;
	};

	peek = () => {
		return this.items[this.length];
	};
}
