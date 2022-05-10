import Stack from '../src/main';

describe('My Stack', () => {
	it('initializes empty by default', () => {
		const stack = new Stack();
		expect(stack.items).toEqual({});
		expect(stack.length).toBe(0);
	});

	it('peek method returns top item', () => {
		const stack = new Stack(['a', 'b', 'c']);
		expect(stack.peek()).toEqual('c');
	});

	it('push method adds new items to top', () => {
		const stack = new Stack(['a', 'b', 'c']);
		stack.push('d');

		expect(stack.items).toEqual({
			1: 'a',
			2: 'b',
			3: 'c',
			4: 'd',
		});
		expect(stack.length).toBe(4);
	});

	it('pop method removes item from top', () => {
		const stack = new Stack(['a', 'b', 'c']);
		const deleted = stack.pop();

		expect(stack.items).toEqual({
			1: 'a',
			2: 'b',
		});
		expect(deleted).toBe('c');
		expect(stack.length).toBe(2);
	});

	it('initializes using array argument', () => {
		const stack = new Stack(['a', 'b', 'c']);
		expect(stack.items).toEqual({
			1: 'a',
			2: 'b',
			3: 'c',
		});
		expect(stack.length).toBe(3);
	});

	it('initializes using mixed type array argument', () => {
		const stack = new Stack(['a', 1, true]);
		expect(stack.items).toEqual({
			1: 'a',
			2: 1,
			3: true,
		});
		expect(stack.length).toBe(3);
	});

	it('peek, pop and push return undefined for empty stack', () => {
		const stack = new Stack();
		expect(stack.peek()).toBe(undefined);
		expect(stack.pop()).toBe(undefined);
		expect(stack.push('a')).toBe(undefined);
	});
});
