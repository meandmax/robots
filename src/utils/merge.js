'use strict';

/**
 * merge default properties with properties of other object
 *
 * @param  {object} spec      user options object
 * @param  {object} defaults  default options object
 * @return {object} obj       overwritten object
 */
export default function (spec, defaults) {
    return Object.keys(defaults).reduce(function (obj, key) {
        obj[key] = spec && spec.hasOwnProperty(key) ? spec[key] : defaults[key];
        return obj;
    }, {});
}
