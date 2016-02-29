# Ember-cli-actions

Tired of embedding all actions in your `route.js` file? Ember-cli-actions is an
ember addon that allows you to write your actions in an `actions.js` file.

The provided `ActionMixin` then automatically imports all actions in your `action.js` file
binds them to the route, and passes them down to the model to be used.

**Developed at [Trouva](https://www.trouva.com)**

## Installation

```sh
ember install ember-cli-actions
```

## Usage

You can generate an action file for a route or a pod. The example will use the
pod structure.

```sh
ember generate actions <podname> --pod
```

This will generate, a file that looks like this. You can export as many actions
as you want from this file.
`/podname/actions.js`
```js
export function exampleButtonClicked(){

}
```

Now you'll need to change your route so the actions will be added to it.
`/podname/route.js`
```js
import Ember from 'ember';
import ActionsMixin from 'ember-cli-actions/mixins/action';

export default Ember.Route.extend(ActionsMixin, {
  //... your usual routy stuff goes here.
});
```

You can now use the action, you exported from your actions file in your template.
`/podname/template.hbs`
```hbs
<a {{action 'exampleButtonClicked'}} href>Hello</a>
{{outlet}}
```
