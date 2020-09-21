import Rx from '../src/rx';

export default function (rx: typeof Rx) {
	describe('rxjs', () => {
		test('scan', (cb: Function) => {
			rx.range(1, 5)
				.pipe(
					rx.operators.map(n => n * n),
					rx.operators.filter(x => x % 5 === 0),
					rx.operators.scan((acc, value) => acc + value, 0)
				).subscribe(result => {
					expect(result).toBe(25);
					cb();
				});

		});
	});
};