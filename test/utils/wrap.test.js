/* global describe, it, beforeEach */

'use strict';

import { assert } from 'chai';
import wrap from '../../src/utils/wrap.js';

describe('wrap()', function () {
    let wrapFunc;

    beforeEach('create wrap function', () => {
        wrapFunc = wrap(4);
    });

    it('has to be a function', () => {
        assert.isFunction(wrap);
    });

    it('has to return an object', () => {
        assert.isFunction(wrap(4));
    });

    it('returns the input in range 0..n-1', () => {
        assert.deepEqual(wrapFunc(0), 0);
        assert.deepEqual(wrapFunc(1), 1);
        assert.deepEqual(wrapFunc(2), 2);
        assert.deepEqual(wrapFunc(3), 3);
    });

    it('is able to rotate right once', () => {
        assert.deepEqual(wrapFunc(4), 0);
        assert.deepEqual(wrapFunc(5), 1);
        assert.deepEqual(wrapFunc(6), 2);
        assert.deepEqual(wrapFunc(7), 3);
    });

    it('is able to rotate right multiple times', function () {
        assert.deepEqual(wrapFunc(9), 1);
        assert.deepEqual(wrapFunc(15), 3);
        assert.deepEqual(wrapFunc(20), 0);
    });

    it('is able to rotate left once', function () {
        assert.deepEqual(wrapFunc(-1), 3);
        assert.deepEqual(wrapFunc(-2), 2);
        assert.deepEqual(wrapFunc(-3), 1);
        assert.deepEqual(wrapFunc(-4), 0);
    });

    it('is able to rotate left multiple times', function () {
        assert.deepEqual(wrapFunc(-7), 1);
        assert.deepEqual(wrapFunc(-16), 0);
    });
});
