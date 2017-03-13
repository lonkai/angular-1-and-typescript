///<reference path="../../scripts/jquery.d.ts"/>
///<reference path="../../scripts/angular.d.ts"/>
///<reference path="./app/mainCtrl.ts"/>
///<reference path="./app/mainService.ts"/>
///<reference path="./app/mainDirective.ts"/>

let myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", MainFeature.MainCtrl);
myApp.factory("MainService", () => new MainFeature.MainService());
myApp.directive("mainDirective", () => new MainFeature.MainDirective());
