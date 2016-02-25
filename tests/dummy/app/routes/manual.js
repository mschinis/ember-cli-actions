import Ember from 'ember';
import ActionsMixin from 'ember-cli-actions/mixins/manual';

export default Ember.Route.extend(ActionsMixin, {
  beforeModel() {
    this.importActions('dummy/actions/manual', 'manualButtonClicked');
  }
});
