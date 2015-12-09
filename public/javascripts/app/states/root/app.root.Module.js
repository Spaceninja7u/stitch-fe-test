/**
 * @fileoverview module to provide view/controller for abstract root state
 */
goog.provide('app.root.module');

goog.require('app.root.controller');

goog.require('lib.angular');
/**
 * The root state module
 * @type {!angular.Module}
 */
app.root.module = angular.module('app.root.module', [])
    .controller('RootStateController', app.root.controller.StateController);