/**
 * @fileoverview
 */
goog.provide('app.detail.controller');

/**
 *
 * @param {angular.$scope} $scope
 * @param {angular.$stateParams} $stateParams
 * @param {angular.$state} $state
 * @param {app.common.data.CatalogService} Catalog
 * @constructor
 * @ngInject
 */
app.detail.controller.StateController = function($scope, $stateParams, $state, Catalog) {
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

    Catalog.getProduct($stateParams.id).then(function(product) {
        $scope.model = product;
    });

};

app.detail.controller.StateController.prototype.save = function() {
  this.ij_.catalog.updateBasic(this.ij_.scope.model).then(function(data) {
    self.ij_.scope.messages = [{type:'success', text:'Product updated'}];
  });
};