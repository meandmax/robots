'use strict';

import merge from './utils/merge';

const defaults = {
    width: 1,
    height: 1
};

export default function (spec) {
    const state = merge(spec, defaults);

    return Object.freeze({
        getWidth: () => {
            return state.width;
        },

        getHeight: () => {
            return state.height;
        },

        setWidth: (value) => {
            state.width = value;
        },

        setHeight: (value) => {
            state.height = value;
        },

        isMoveable: (x, y) => {
            return x < state.width && y < state.height;
        }
    });
}
