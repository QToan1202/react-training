/**
 * @description clear all underscore in string then convert it to lower case
 * @param {String} content
 * @returns String
 */
export const clearUnderscore = (content: string) => content.replace('_', ' ').toLowerCase()