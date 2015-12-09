/**
 * @fileoverview Module that creates a new product
 */
goog.provide('app.create.module');
goog.require('app.common.module');
goog.require('app.create.controller');

goog.require('lib.angular');
goog.require('lib.textangular.base');

app.create.module = angular.module('app.create.module', ['textAngular', app.common.module.name])
    .controller('CreateStateController',app.create.controller.StateController );