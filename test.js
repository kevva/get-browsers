import test from 'ava';
import m from './';

test('fetch 10 items', async t => t.is((await m()).length, 10));
