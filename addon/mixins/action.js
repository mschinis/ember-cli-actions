import Ember from 'ember';

export default Ember.Mixin.create({
    beforeModel(){
        this._super();
        const config = this.container.lookupFactory('config:environment');
        const actionPath = config.podModulePrefix?
          `${config.podModulePrefix}/${this.routeName}/actions` :
          `${config.modulePrefix}/actions/${this.routeName}`;

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
