import test from 'ava';
import fn from './';

test('fetch 10 items', async t => t.is((await fn()).length, 10));
