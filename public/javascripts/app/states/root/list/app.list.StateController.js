/**
 * @fileoverview Defines controller for state root.list
 */
goog.provide('app.list.controller');

/**
 *
 * Defines controller for state root.list. Generally I try to define my classes in a manner that is additive to
 * the namespace provided by goog.provide, because its not unusual to import namespace dependencies that are decendants
 * of what I am declaring (e.g. using <code>goog.require('a.thing.that.is.blue');</code> in a file that defines
 * <code>goog.provide('a.thing');</code> which would undo the definition '...that.is.blue').

 * @param {angular.$scope} $scope
 * @param {app.common.data.CatalogService} Catalog
 * @constructor
 * @ngInject
 */
app.list.controller.StateController = function($scope, Catalog) {
    /**
     * Injected services.
     * @private
     */
    this.ij_ = {
        scope:$scope,
        catalog:Catalog
    };

     Catalog.getProducts().then(function(data) {
        $scope.products = data.products;
    });
};

