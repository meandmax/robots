/* global describe, it, beforeEach */

'use strict';

import { assert } from 'chai';
import createGame from '../src/create-game';

describe('createGame()', () => {
    let game;

    beforeEach('create instance', () => {
        game = createGame();
    });

    it('has to be a function', () => {
        assert.isFunction(createGame);
    });

    it('has to return an object', () => {
        assert.isObject(createGame());
    });

    describe('.place()', () => {
        it('has to be a function', () => {
            assert.isFunction(game.place);
        });

        it('set robot on valid table top position', () => {
            game.place(3, 4, 'NORTH');

            assert.strictEqual(game.report().x, 3);
            assert.strictEqual(game.report().y, 4);
            assert.strictEqual(game.report().f, 'NORTH');
        });

        it('set robot on a not valid table top position', () => {
            game.place(6, 6, 'e');

            assert.strictEqual(game.report().x, undefined);
            assert.strictEqual(game.report().y, undefined);
            assert.strictEqual(game.report().f, undefined);
        });
    });

    describe('.left()', () => {
        it('has to be a function', () => {
            assert.isFunction(game.left);
        });

        it('has to set a valid value', () => {
            game.place(0, 0, 'NORTH');
            game.left();

            assert.strictEqual(game.report().f, 'WEST');

            game.place(0, 0, 'SOUTH');
            game.left();

            assert.strictEqual(game.report().f, 'EAST');
        });
    });

    describe('.right()', () => {
        it('has to be a function', () => {
            assert.isFunction(game.right);
        });

        it('has to set a valid value', () => {
            game.place(0, 0, 'WEST');
            game.right();

            assert.strictEqual(game.report().f, 'NORTH');

            game.place(0, 0, 'EAST');
            game.right();

            assert.strictEqual(game.report().f, 'SOUTH');
        });
    });

    describe('.move()', () => {
        it('has to be a function', () => {
            assert.isFunction(game.move);
        });

        it('has to be at 0, 0, NORTH', () => {
            game.place(0, 0, 'NORTH');
            game.move();

            assert.strictEqual(game.report().x, 0);
            assert.strictEqual(game.report().y, 1);
            assert.strictEqual(game.report().f, 'NORTH');
        });

        it('has to be at 0, 0, WEST', () => {
            game.place(0, 0, 'NORTH');
            game.left();

            assert.strictEqual(game.report().x, 0);
            assert.strictEqual(game.report().y, 0);
            assert.strictEqual(game.report().f, 'WEST');
        });

        it('has to be at 3, 3, NORTH', () => {
            game.place(1, 2, 'EAST');
            game.move();
            game.move();
            game.left();
            game.move();

            assert.strictEqual(game.report().x, 3);
            assert.strictEqual(game.report().y, 3);
            assert.strictEqual(game.report().f, 'NORTH');
        });
    });

    describe('.report()', () => {
        it('has to be a function', () => {
            assert.isFunction(game.report);
        });

        it('has to return an object', () => {
            assert.isObject(game.report());
        });

        it('has to return a specific default object', () => {
            assert.strictEqual(game.report().x, undefined);
            assert.strictEqual(game.report().y, undefined);
            assert.strictEqual(game.report().f, undefined);
        });

        it('has to return', () =>  {
            game.place(3, 4, 'NORTH');

            assert.strictEqual(game.report().x, 3);
            assert.strictEqual(game.report().y, 4);
            assert.strictEqual(game.report().f, 'NORTH');
        });
    });
});
