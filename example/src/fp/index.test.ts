import { fp } from '@2snail/libs';

describe('fp', () => {
	test('fp', () => {
		expect(fp).toHaveProperty('option');
		expect(fp).toHaveProperty('optionT');
		expect(fp).toHaveProperty('either');
		expect(fp).toHaveProperty('eitherT');
	});

	test('fp.option', () => {
		const someA = fp.option.some('a');
		expect(fp.option.isSome(someA)).toBeTruthy();
		expect(someA).toEqual(fp.option.some('a'));
		expect(fp.option.none).toEqual(fp.option.none);
	});
});
