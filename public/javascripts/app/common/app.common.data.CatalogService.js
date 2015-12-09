/**
 * @fileoverview Persists catalog data for the whole session, combines functionality for CRUD over $http
 */
goog.provide('app.common.data.CatalogService');
goog.provide('app.common.data.apiendpoints');

app.common.data.apiendpoints.list = 'shopify/get?path=/admin/products.json';


app.common.data.apiendpoints.update = 'shopify/update?path=/admin/products/{productId}.json';

app.common.data.apiendpoints.create = '/admin/products.json';

/**
 *
 * @param {angular.$http} $http
 * @param {angular.$q} $q
 * @constructor
 * @ngInject
 */
app.common.data.CatalogService = function($http, $q) {
    /**
     * Injected services.
     * @private
     */
    this.ij_ = {
        http:$http,
        q:$q
    };

    this.products_ =  $q.defer();

    this.loadProducts_();



};
app.common.data.CatalogService.prototype.getProducts = function() {
    return this.products_.promise;
};

/**
 *
 * @private
 */
app.common.data.CatalogService.prototype.loadProducts_ = function() {
    this.ij_.http.get(app.common.data.apiendpoints.list)
                                .success( angular.bind(this, this.onLoadProductsSuccess) )
                                .error( angular.bind(this, this.onLoadProductFail));
};
app.common.data.CatalogService.prototype.onLoadProductsSuccess = function(result) {
     this.products_.resolve(result);
    //return result.data;
};
app.common.data.CatalogService.prototype.onLoadProductFail = function(error) {
    this.products_.reject(error);
    //return error;
};


app.common.data.CatalogService.prototype.getProduct = function(productId) {
    //var currentProduct = this.ij_.q.defer();
    return this.products_.promise.then(function(data) {
        var currentProduct = null;
        for(var i = 0, len = data.products.length; i < len; i++ ) {
            if(data.products[i].id == productId) {
                currentProduct = data.products[i];
                break;
            }
        }
        return currentProduct;
    });

};

app.common.data.CatalogService.prototype.updateBasic = function(productData) {
    return this.ij_.http({ method:'POST',
                    url:app.common.data.apiendpoints.update.split('{productId}').join(productData.id),
                    data:productData});//{title:productData.title, vendor:productData.vendor, body_html:productData.body_html}})

};

app.common.data.CatalogService.prototype.create = function(productData) {

};
