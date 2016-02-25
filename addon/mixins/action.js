import Ember from 'ember';

const regex = /[\w-]+@(\w+):(\w+):/g;

export default Ember.Mixin.create({
    init(){
        this._super();
        const constructorName = this.constructor.toString();
        const [ , route, name ] = regex.exec(constructorName);
        if (route !== "route") {
            throw new Error("The ActionsMixin is currently only applicable to routes");
        }

        const config = this.container.lookupFactory('config:environment');
        const actionPath = config.podModulePrefix?
          `${config.podModulePrefix}/${name}/actions` :
          `${config.modulePrefix}/actions/${name}`;

        const actions = System.import(actionPath);
        //support 1.13 and 2.x
        const actionsVariablePath = this.get('_actions') ? '_actions' : 'actions';

        actions.then(res=>{
            const bound = {};
            for(let i in res){
                if(res.hasOwnProperty(i) && typeof res[i] === 'function'){
                    res[i].bind(this);
                    bound[i] = res[i].bind(this);
                }
            }
            // Set the actions hash as an object inside the route
            // Need to pass the actions hash in the model.
            Ember.merge(this.get(actionsVariablePath), bound);
        });
    }
});
