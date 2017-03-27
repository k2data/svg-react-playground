const cssnano = require('cssnano')
const atImport = require('postcss-import')
const atEach = require('postcss-each')
const atVariables = require('postcss-at-rules-variables')
const atIf = require('postcss-conditionals')
const atFor = require('postcss-for')
const customProperties = require('postcss-custom-properties')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')

module.exports = {
  plugins: [
    atVariables({ /* atRules: ['media'] */ }),
    atEach(),
    atImport({
      plugins: [
        require('postcss-at-rules-variables')({ /* options */ }),
        require('postcss-import')
      ]
    }),
    atFor(),
    atIf(),
    customProperties(),
    nested(),
    mixins(),
    cssnano({
      autoprefixer : {
        add      : true,
        remove   : true,
        browsers : ['last 2 versions']
      },
      discardComments : {
        removeAll : true
      },
      discardUnused : false,
      mergeIdents   : false,
      reduceIdents  : false,
      safe          : true,
      sourcemap     : true
    })
  ]
}
