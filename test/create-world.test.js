/* global describe, it, beforeEach */

'use strict';

import { assert } from 'chai';
import createWorld from '../src/create-world';

describe('createWorld()', () => {
    var world;

    beforeEach('create a World', () => {
        world = createWorld({
            width: 5,
            height: 5
        });
    });

    it('has to be a function', () => {
        assert.isFunction(createWorld);
    });

    it('has to return an object', () => {
        assert.isObject(world);
    });

    describe('.getWidth()', () => {
        it('has to be a function', () => {
            assert.isFunction(world.getWidth);
        });

        it('has to return a number number', () => {
            assert.isNumber(world.getWidth());
        });

        it('has to return the position on the x-axis', () => {
            assert.strictEqual(world.getWidth(), 5);
        });
    });

    describe('.getHeight()', () => {
        it('has to be a function', () => {
            assert.isFunction(world.getHeight);
        });

        it('has to return a number', () => {
            assert.isNumber(world.getHeight());
        });

        it('return the position on the y-axis', () => {
            assert.strictEqual(world.getHeight(), 5);
        });
    });

    describe('.setWidth()', () => {
        it('has to be a function', () => {
            assert.isFunction(world.setWidth);
        });

        it('has to return a undefined', () => {
            assert.isUndefined(world.setWidth(3));
        });

        it('return the changed width', () => {
            world.setWidth(3);
            assert.strictEqual(world.getWidth(), 3);
        });
    });

    describe('.setHeight()', () => {
        it('has to be a function', () => {
            assert.isFunction(world.setHeight);
        });

        it('has to return a undefined', () => {
            assert.isUndefined(world.setHeight(3));
        });

        it('return the changed width', () => {
            world.setHeight(3);
            assert.strictEqual(world.getHeight(), 3);
        });
    });

    describe('.isMoveable()', () => {
        it('has to be a function', () => {
            assert.isFunction(world.isMoveable);
        });

        it('has to return a boolean', () => {
            assert.isBoolean(world.isMoveable(1, 1));
        });

        it('has to return a boolean', () => {
            assert.strictEqual(world.isMoveable(1, 1), true);
        });

        it('has to be false', () => {
            assert.strictEqual(world.isMoveable(5, 5), false);
        });
    });
});
