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

## Structor & [Customize](./customize.md)

```md
[![Customize](./customize.md)](./customize.md)
```

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

[customize-gh-url]: https://github.com/2snail/libs/blob/master/customize.md
[customize-url]: ./customize.md