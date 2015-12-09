/**
 * @fileoverview define a ui-router state with the assist of the ui-router.stateHelper syntax. See
 * https://github.com/marklagendijk/ui-router.stateHelper
 *
 */
goog.provide('app.create.state');

app.create.state.Create = {
    name:'create', //resolves to root.list.create
    url:'new/', //resolves to /list/new/
    views: {
        'main@root.list':{
            templateUrl:'javascripts/app/states/root/list/detail/app.detail.Main.UIView.html',
            controller:'DetailStateController as ctrl'
        }
    }
};