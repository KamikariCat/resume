// IMPORTS
// Libs
import {curry, concat, pipe, head, toUpper, tail} from 'ramda';

// === === ===
/**
 * Capitalize string
 * @type {string}
 * @return {string}
 */
export const capitalize = curry(str => concat(pipe(head, toUpper)(str), tail(str)));
