import * as fp from './index';

describe('fp', () => {
	test('fp', () => {
		expect(fp).toHaveProperty('option');
		expect(fp).toHaveProperty('optionT');
		expect(fp).toHaveProperty('either');
		expect(fp).toHaveProperty('eitherT');
	})
});
