import Ember from 'ember';
import ManualMixin from '../../../mixins/manual';
import { module, test } from 'qunit';

module('Unit | Mixin | manual');

// Replace this with your real tests.
test('it works', function(assert) {
  let ManualObject = Ember.Object.extend(ManualMixin);
  let subject = ManualObject.create();
  assert.ok(subject);
});
