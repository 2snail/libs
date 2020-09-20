import R from '../src/ramda';

export default function (r: typeof R) {
	describe('ramda', () => {
		test('prop', () => {
			const user = {
				name: 'zhangsan',
				age: 14,
			};

			const name = r.prop('name')(user);
			expect(name).toBe('zhangsan');

		});
	});
};