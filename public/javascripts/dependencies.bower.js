/*
 These lines are hand-crafted. all paths are relative to google closure's base.js.
 */
goog.addDependency('../../../jquery/dist/jquery.min.js', ['lib.jquery'], [], false);
goog.addDependency('../../../moment/moment.2.10.6/moment.js', ['lib.moment'], [], false);
goog.addDependency('../../../angular/angular.min.js', ['lib.angular'], ['lib.jquery'], false);
goog.addDependency('../../../angular-animate/angular-animate.js', ['lib.angular.animate'], ['lib.angular'], false);

goog.addDependency('../../../textAngular/dist/textAngular-rangy.min.js', ['lib.textangular.rangy'], ['lib.angular'], false);
goog.addDependency('../../../textAngular/dist/textAngular-sanitize.min.js', ['lib.textangular.sanitize'], ['lib.textangular.rangy'], false);
goog.addDependency('../../../textAngular/dist/textAngular.min.js', ['lib.textangular.base'], ['lib.textangular.sanitize'], false);

goog.addDependency('../../../angular-ui-router/release/angular-ui-router.min.js', ['lib.angular.ui.router'], ['lib.angular'], false);
goog.addDependency('../../../angular-ui-router.statehelper/statehelper.js', ['lib.angular.ui.router.stateHelper'], ['lib.angular.ui.router'], false);
