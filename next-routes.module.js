/**
 * @typedef { import("next-routes").Registry } Registry}
 */
const nextRoutes = require('next-routes');

/**
 * @type {Registry}
 */
module.exports = nextRoutes()
.add('a')
.add('b')
.add('sign-in')