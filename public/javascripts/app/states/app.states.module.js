/**
 * @fileoverview Module assembles all the state modules and state definition objects, unitializes ui-router in the
 * module's config callback.
 */
goog.provide('app.states.module');

goog.require('app.root.state');
goog.require('app.list.state');

goog.require('app.root.module');
goog.require('app.list.module');
goog.require('app.detail.module');
goog.require('app.create.module');

goog.require('lib.angular.ui.router.stateHelper');


app.states.routesConfig_ = function(stateHelperProvider, $urlRouterProvider) {
    stateHelperProvider.state(app.root.state.Root);
    $urlRouterProvider.otherwise( '/list/'  ); //root.list
};
app.states.routesConfig_.$inject = ['stateHelperProvider', '$urlRouterProvider'];

app.states.module = angular.module('app.states.module', ['ui.router',
                                                         'ui.router.stateHelper',
                                                         app.root.module.name,
                                                         app.list.module.name,
                                                         app.detail.module.name,
                                                         app.create.module.name])
    .config(app.states.routesConfig_);

