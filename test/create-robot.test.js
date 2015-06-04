/* global describe, it, beforeEach */

'use strict';

import { assert } from 'chai';
import createRobot from '../src/create-robot';

describe('createRobot()', () => {
    var robot;

    beforeEach('create a robot', () => {
        robot = createRobot({
            x: 0,
            y: 1,
            f: 0
        });
    });

    it('has to be a function', () => {
        assert.isFunction(createRobot);
    });

    it('has to return an object', () => {
        assert.isObject(robot);
    });

    describe('.getX()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.getX);
        });

        it('has to return a number number', () => {
            assert.isNumber(robot.getX());
        });

        it('has to return the position on the x-axis', () => {
            assert.strictEqual(robot.getX(), 0);
        });
    });

    describe('.getY()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.getY);
        });

        it('has to return a number', () => {
            assert.isNumber(robot.getY());
        });

        it('return the position on the y-axis', () => {
            assert.strictEqual(robot.getY(), 1);
        });
    });

    describe('.getF()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.getF);
        });

        it('has to return a String', () => {
            assert.isNumber(robot.getF());
        });

        it('return the current direction', () => {
            assert.strictEqual(robot.getF(), 0);
        });
    });

    describe('.setX()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.getF);
        });

        it('has to set the value given as an argument', () => {
            robot.setX(3);
            assert.strictEqual(robot.getX(), 3);
        });
    });

    describe('.setY()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.setY);
        });

        it('has to set the value given as an argument', () => {
            robot.setY(4);
            assert.strictEqual(robot.getY(), 4);
        });
    });

    describe('.setF()', () => {
        it('has to be a function', () => {
            assert.isFunction(robot.setF);
        });

        it('has to set  a valid value', () => {
            robot.setF(3);
            assert.strictEqual(robot.getF(), 3);
        });
    });
});
