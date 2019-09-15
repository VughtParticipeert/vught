// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/global.css'
const moment = require('vue-moment');
require('roboto-fontface')


export default function (Vue, {router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(moment)
}
