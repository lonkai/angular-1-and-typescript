var MainFeature;
(function (MainFeature) {
    var MainDirective = (function () {
        function MainDirective() {
            return MainFeature.MainDirective.CreateDirective();
        }
        MainDirective.CreateDirective = function () {
            return {
                restrict: "E",
                template: "<div>Hello world from directive!</div>"
            };
        };
        return MainDirective;
    }());
    MainFeature.MainDirective = MainDirective;
})(MainFeature || (MainFeature = {}));
//# sourceMappingURL=mainDirective.js.map