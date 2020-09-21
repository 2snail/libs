import * as libs from '@2snail/libs';

import testFp from '../../tests/fp';
import testRamda from '../../tests/ramda';
import testRxjs from '../../tests/rxjs';

testFp(libs.fp);
testRamda(libs.R);
testRxjs(libs.rx)