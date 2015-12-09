/**
 * @fileoverview define a ui-router state with the assist of the ui-router.stateHelper syntax. See
 * https://github.com/marklagendijk/ui-router.stateHelper
 *
 */
goog.provide('app.list.state');

/*
Refactored Detail to be a child state of List so we don't reload the sidebar content
 */
goog.require('app.detail.state');
goog.require('app.create.state');
app.list.state.List = {
    name:'list', //resolves to root.list
    url:'list/', //resolves to /list/
    views: {
        'sidebar@root':{
            templateUrl:'javascripts/app/states/root/list/app.list.Sidebar.UIView.html',
            controller:'ListStateController as ctrl'
        }
    },
    children:[
        app.detail.state.Detail,
        app.create.state.Create
    ]
};