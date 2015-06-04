'use strict';

import merge from './utils/merge';
import wrap from './utils/wrap';

const limiter = wrap(4);

const defaults = {
    x: undefined,
    y: undefined,
    f: undefined
};

export default function (spec) {
    const state = merge(spec, defaults);

    return Object.freeze({
        getX: () => {
            return state.x;
        },

        getY: () => {
            return state.y;
        },

        getF: () => {
            return state.f;
        },

        setX: (value) => {
            state.x = value;
        },

        setY: (value) => {
            state.y = value;
        },

        setF: (value) => {
            state.f = limiter(value);
        }
    });
}
