import Ember from 'ember';
import ActionMixin from '../../../mixins/action';
import { module, test } from 'qunit';

module('Unit | Mixin | action');

// Replace this with your real tests.
test('it works', function(assert) {
  let ActionObject = Ember.Object.extend(ActionMixin);
  let subject = ActionObject.create();
  assert.ok(subject);
});
