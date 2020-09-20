import * as libs from './index';

import testFp from '../tests/fp';
import testRamda from '../tests/ramda';
import testRxjs from '../tests/rxjs';

testFp(libs.fp);
testRamda(libs.R);
testRxjs(libs.rx)