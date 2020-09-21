# Customize

for example to add the lib rxjs, rx as internal name:

## 1. install (or add) lib:
```sh
npm i rxjs -S
-- or:
yarn add rxjs

```

## 2. create folder rx in /src, and index.ts:

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

## 3. create test file rx.test.ts in /tests

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

## 4. create test file in folder /src/rx call the test

/src/rx/index.test.ts

```ts
import rx from './';

import test from '../../tests/rx';

test(rx);
```

## 5. update /src/index.ts

```diff
import fp_ts from './fp';
import Ramda from './R';
+ import rxjs from './rx';

export const fp = fp_ts;
export const R = Ramda;
+ export const rx = rxjs;
```

## 6. update /src/index.test.ts

```diff
import * as libs from './index';

import testFp from '../tests/fp';
import testR from '../tests/R';
+ import testRx from '../tests/rx';

testFp(libs.fp);
testR(libs.R);
+ testRx(libs.rx)
```

## 7. run test

```sh
jest
```

## 8. example

### 8.1. install
```sh
npm i @2snail/libs -S
-- or:
yarn add @2snail/libs
```

### 8.2. add test
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

### 8.3. run test
```sh
jest
```

## 9. add sub package

/rx/package.json

```json
{
	"name": "@2snail/libs/rx",
	"typings": "../lib/rx/index.d.ts",
	"main": "../lib/rx/index.js"
}
```

## 10. Success