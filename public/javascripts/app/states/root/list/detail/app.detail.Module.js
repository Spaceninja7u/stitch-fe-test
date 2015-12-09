/**
 * @fileoverview Module that renders the details of a single product and provides links to update and delete
 */
goog.provide('app.detail.module');
goog.require('app.common.module');
goog.require('app.detail.controller')

goog.require('lib.angular');

app.detail.module = angular.module('app.detail.module', [app.common.module.name])
    .controller('DetailStateController',app.detail.controller.StateController );