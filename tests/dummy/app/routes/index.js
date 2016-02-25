import Ember from 'ember';
import ActionsMixin from 'ember-cli-actions/mixins/action';

export default Ember.Route.extend(ActionsMixin, {
  beforeModel() {
    console.log('beforeModel');
  },
  actions: {
    test() {
      console.log('test');
    }
  }
});
