/**
 * @fileoverview the app module named in the ng-app attribute on index.html's <body> tag. All it does is load the root
 * state, so while the root state could also be the module named in ng-app I find it useful to have a place where I can later
 * add other modules (for debug info, etc) and remove them again without going many levels deep into the module/state
 * structure.
 */

goog.provide('shopify.tardisworld');

goog.require('app.states.module');
goog.require('lib.angular');

shopify.tardisworld.app = angular.module('shopify.tardisworld.app', [app.states.module.name]);