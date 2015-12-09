/**
 * @fileoverview Module that renders the details of a single product and provides links to update and delete
 */
goog.provide('app.detail.module');
goog.require('app.common.module');
goog.require('app.detail.controller')

goog.require('lib.angular');
goog.require('lib.textangular.base');

app.detail.module = angular.module('app.detail.module', ['textAngular', app.common.module.name])
    .controller('DetailStateController',app.detail.controller.StateController );