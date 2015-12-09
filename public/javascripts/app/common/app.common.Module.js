/**
 * @fileoverview
 */
goog.provide('app.common.module');
goog.require('app.common.data.CatalogService');
goog.require('lib.angular');

app.common.module = angular.module('app.common.module', [])
    .service('Catalog', app.common.data.CatalogService);