# 2snail-libs

> 引入第三方libs的入口,原样或加工后重新导出,再在其他项目中使用,而非每个项目都直接使用第三方库.

[![Version][version-shield]][npm-url]
[![Downloads][downloads-shield]][npm-url]
[![Min][min-shield]][size-url]
[![MinZip][minzip-shield]][size-url]

[![Test][test-shield]][test-url]
[![CodeCov][codecov-shield]][codecov-url]
[![Issues][issues-shield]][issues-url]

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Contributors][contributors-shield]][contributors-url]
[![License][license-shield]][license-url]

## 常用库

### Ready:

- [x] fp-ts
- [x] ramda
- [x] rxjs

### Todo:

- [ ] loadash
- [ ] ixjs
- [ ] debug
- [ ] jest
- [ ] react
- [ ] umi
- [ ] dumi
- [ ] father

## Installation

use npm:
```sh
npm i -S @snail/libs
```

or yarn:
```sh
yarn add @snail/libs
```

## Useage

import all:
```ts
import * as libs from '@2snail/libs';
// libs: { fp, R, rx, ...};
```

import multi:
```ts
import { fp, R, rx } from '@2snail/libs';
// fp: fp-ts
// R: ramda
// rx: rxjs
// rx.operators.map: operators
```

import one:
```ts
// fp-ts:
import fp from '@2snail/libs/fp'
```

## Structor & Customize

for example to add the lib rxjs, rx as internal name:

### 1. install (or add) lib:
```sh
npm i rxjs -S
-- or:
yarn add rxjs

```

### 2. create folder rx in /src, and index.ts:

/src/rx/index.ts

```ts
import * as rxjs from 'rxjs';
import * as operators from 'rxjs/operators';

// do something here:
// when update rxjs failed or to change the rxjs api ...

export default {
	...rxjs,
	operators,
};
```

### 3. create test file rx.test.ts in /tests

/tests/rx.ts

```ts
import rxjs from '../src/rx';

export default function (rx: typeof rxjs) {
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
```

### 4. create test file in folder /src/rx call the test

/src/rx/index.test.ts

```ts
import rx from './';

import test from '../../tests/rx';

test(rx);
```

### 5. update /src/index.ts

```diff
import fp_ts from './fp';
import Ramda from './R';
+ import rxjs from './rx';

export const fp = fp_ts;
export const R = Ramda;
+ export const rx = rxjs;
```

### 6. update /src/index.test.ts

```diff
import * as libs from './index';

import testFp from '../tests/fp';
import testR from '../tests/R';
+ import testRx from '../tests/rx';

testFp(libs.fp);
testR(libs.R);
+ testRx(libs.rx)
```

### 7. run test

```sh
jest
```

### 8. example

#### 8.1. install
```sh
npm i @2snail/libs -S
-- or:
yarn add @2snail/libs
```

#### 8.2. add test
/example/src/rx.test.ts
```ts
import rx from '@2snail/libs/rx';

import test from '../../tests/rx';

test(rx);
```

/example/src/index.test.ts
```diff
import * as libs from '@2snail/libs';

import testFp from '../../tests/fp';
import testR from '../../tests/R';
+ import testRx from '../../tests/rx';

testFp(libs.fp);
testR(libs.R);
+ testRx(libs.rx)
```

#### 8.3. run test
```sh
jest
```

### 9. Success


## License

(MIT)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://github.com/2snail/libs -->
[npm-url]: https://www.npmjs.com/package/@2snail/libs
[version-shield]: https://img.shields.io/npm/v/@2snail/libs.svg
[downloads-shield]: https://img.shields.io/npm/dm/@2snail/libs.svg
[min-shield]: https://flat.badgen.net/bundlephobia/min/@2snail/libs
[minzip-shield]: https://flat.badgen.net/bundlephobia/minzip/@2snail/libs
[size-url]: https://bundlephobia.com/result?p=@2snail/libs
[test-shield]: https://github.com/2snail/libs/workflows/Test/badge.svg
[test-url]: https://github.com/2snail/libs/actions
[codecov-shield]: https://codecov.io/gh/2snail/libs/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/2snail/libs
[contributors-url]: https://github.com/2snail/libs/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/2snail/libs.svg
[issues-url]: https://github.com/2snail/libs/issues
[stars-shield]: https://img.shields.io/github/stars/2snail/libs.svg
[stars-url]: https://github.com/2snail/libs/stargazers
[forks-shield]: https://img.shields.io/github/forks/2snail/libs.svg
[forks-url]: https://github.com/2snail/libs/network/members
[contributors-shield]: https://img.shields.io/github/contributors/2snail/libs.svg
[license-shield]: https://img.shields.io/github/license/2snail/libs.svg
[license-url]: https://github.com/2snail/libs/blob/master/LICENSE
