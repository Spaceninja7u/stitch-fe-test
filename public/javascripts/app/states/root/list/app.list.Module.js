/**
 * @fileoverview Defines module for listing and selecting products
 */
goog.provide('app.list.module');
goog.require('app.common.module');
goog.require('app.list.controller')

goog.require('lib.angular');
/**
 * The product list state module
 * @type {!angular.Module}
 */
app.list.module = angular.module('app.list.state.module', [app.common.module.name])
    .controller('ListStateController', app.list.controller.StateController);