/**
 * @fileoverview
 */
goog.provide('app.create.controller');

/**
 *
 * @param {angular.$scope} $scope
 * @param {angular.$stateParams} $stateParams
 * @param {angular.$state} $state
 * @param {app.common.data.CatalogService} Catalog
 * @constructor
 * @ngInject
 */
app.create.controller.StateController = function($scope, $stateParams, $state, Catalog) {
    /**
     * Injected services.
     * @private
     */
    this.ij_ = {
        scope:$scope,
        catalog:Catalog,
        stateParams:$stateParams,
        state:$state
    };

    $scope.model = {};


};

app.create.controller.StateController.prototype.create = function() {

};