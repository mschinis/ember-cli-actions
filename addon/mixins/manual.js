import Ember from 'ember';

export default Ember.Mixin.create({
  importActions(path){
    let actionPath = '';

    if(path){
      actionPath = path;
    }else{
      const config = this.container.lookupFactory('config:environment');
      actionPath = config.podModulePrefix?
        `${config.podModulePrefix}/${this.routeName}/actions` :
        `${applicationConfig.modulePrefix}/actions/${this.routeName}`;
    }

    const actions = System.import(actionPath);
    actions.then(res=>{
        let binded = {};
        for(let i in res){
            if(res.hasOwnProperty(i) && typeof res[i] === 'function'){
                res[i].bind(this)
                binded[i] = res[i].bind(this);
            }
        }
        // Set the actions hash as an object inside the route
        // Need to pass the actions hash in the model.
        this.set('actions',binded);
    });
  }
});
