/**
 * @fileoverview define a ui-router state with the assist of the ui-router.stateHelper syntax. See
 * https://github.com/marklagendijk/ui-router.stateHelper
 */
goog.provide('app.root.state');

goog.require('app.list.state');

app.root.state.Root = {
    name:'root',
    url:'/',
    templateUrl:'javascripts/app/states/root/app.root.state.UIView.html',
    children:[
        app.list.state.List
    ]
};