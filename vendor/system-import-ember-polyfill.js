// Set the System.import for dynamic path imports if it doesn't exist.
window.System = window.System || {};
window.System['import'] = function(moduleName) {
    return Ember.RSVP.Promise.resolve(window.require(moduleName));
}
