var MainFeature;
(function (MainFeature) {
    var MainService = (function () {
        function MainService() {
        }
        MainService.prototype.GetMessage = function () {
            return "Hello world from Service!";
        };
        return MainService;
    }());
    MainFeature.MainService = MainService;
})(MainFeature || (MainFeature = {}));
//# sourceMappingURL=mainService.js.map