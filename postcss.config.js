// module.exports = {
//   plugins: [
//     require('autoprefixer')()
//   ]
// }

module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 60,
      propList: ['*']
    }
  }
}
