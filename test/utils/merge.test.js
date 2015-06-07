/* global describe, it, beforeEach */

'use strict';

import { assert } from 'chai';
import merge from '../../src/utils/merge.js';

describe('merge()', function () {
    let defaults;
    let spec;

    beforeEach('create mocks', () => {
        defaults = {
            a: 'a',
            b: 'b',
            c: 'c'
        };

        spec = {
            a: 'spec',
            c: 'spec'
        };
    });

    it('has to be a function', () => {
        assert.isFunction(merge);
    });

    it('has to return an object', () => {
        assert.isObject(merge(spec, defaults));
    });

    it('return an object with the right values', function () {
        let options = merge(spec, defaults);

        assert.deepEqual(options.a, 'spec');
        assert.deepEqual(options.b, 'b');
        assert.deepEqual(options.c, 'spec');
    });
});
