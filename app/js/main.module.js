var myApp = angular.module("myApp", []);
myApp.controller("MainCtrl", MainFeature.MainCtrl);
myApp.factory("MainService", function () { return new MainFeature.MainService(); });
myApp.directive("mainDirective", function () { return new MainFeature.MainDirective(); });
//# sourceMappingURL=main.module.js.map