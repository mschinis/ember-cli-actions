/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-actions',
  included: function(app){
    app.import('vendor/system-import-ember-polyfill.js');
  }
};
