import Ember from 'ember';

export default Ember.Mixin.create({
  importActions(path, actions = 'all'){
    let actionPath = '';

    if(path){
      actionPath = path;
    }else{
      const config = this.container.lookupFactory('config:environment');
      actionPath = config.podModulePrefix?
        `${config.podModulePrefix}/${this.routeName}/actions` :
        `${config.modulePrefix}/actions/${this.routeName}`;
    }

    const importedActions = System.import(actionPath);
    //support 1.13 and 2.x
    const actionsVariablePath = this.get('_actions') ? '_actions' : 'actions';

    importedActions.then(res=>{
        const bound = {};
        for(let i in res){
            if(res.hasOwnProperty(i) && typeof res[i] === 'function'){
                if(actions === 'all' || actions.indexOf(res[i].name) !== -1){
                  res[i].bind(this);
                  bound[i] = res[i].bind(this);
                }
            }
        }
        // Set the actions hash as an object inside the route
        // Need to pass the actions hash in the model.
        Ember.merge(this.get(actionsVariablePath), bound);
    });
  }
});
