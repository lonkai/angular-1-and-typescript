var MainFeature;
(function (MainFeature) {
    var MainCtrl = (function () {
        function MainCtrl($scope, MainService) {
            this.message = "124";
            this.$scope = $scope;
            this.$scope.MainService = MainService;
            this.$scope.message = "1242567";
            this.$scope.item = "";
            this.$scope.itemArray = [
                { purchase: "Bread", done: false, price: 15.9 },
                { purchase: "Butter", done: false, price: 60 },
                { purchase: "Potatoes", done: true, price: 22.6 },
                { purchase: "Cheese", done: false, price: 310 },
            ];
        }
        MainCtrl.prototype.SetMessage = function () {
            this.message = this.$scope.MainService.GetMessage();
        };
        MainCtrl.prototype.addItem = function () {
            this.$scope.itemArray.push(this.$scope.item);
            this.$scope.item = "";
        };
        ;
        MainCtrl.prototype.deleteItem = function (index) {
            this.$scope.itemArray.splice(index, 1);
        };
        ;
        return MainCtrl;
    }());
    MainCtrl.$inject = ["$scope", "MainService"];
    MainFeature.MainCtrl = MainCtrl;
})(MainFeature || (MainFeature = {}));
//# sourceMappingURL=mainCtrl.js.map