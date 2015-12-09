/**
 * @fileoverview define a ui-router state with the assist of the ui-router.stateHelper syntax. See
 * https://github.com/marklagendijk/ui-router.stateHelper
 *
 */
goog.provide('app.detail.state');

app.detail.state.Detail = {
    name:'detail', //resolves to root.list.detail
    url:'product/:id', //resolves to /list/product/<product.id>
    views: {
        'main@root.list':{
            templateUrl:'javascripts/app/states/root/list/detail/app.detail.Main.UIView.html',
            controller:'DetailStateController as ctrl'
        }
    }
};