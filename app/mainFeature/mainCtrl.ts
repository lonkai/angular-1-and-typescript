///<reference path="../bootstrapper/bootstrapper.ts"/>

namespace MainFeature {

    interface MainCtrlScope extends ng.IScope {
      message: string;
      item: string;
      itemArray: any[];
    }

    export class MainCtrl {

        public $scope: MainCtrlScope;

        public message: string = "124";

        public static $inject = ["$scope"];

        constructor($scope: MainCtrlScope) {
            this.$scope = $scope;
            this.$scope.message = "1242567";

            this.$scope.item = "";
            this.$scope.itemArray = [
                { purchase: "Bread", done: false, price: 15.9 },
                { purchase: "Butter", done: false, price: 60 },
                { purchase: "Potatoes", done: true, price: 22.6 },
                { purchase: "Cheese", done: false, price: 310 },
            ];
        }

        public addItem() {
             this.$scope.itemArray.push(this.$scope.item);
             this.$scope.item = "";
        }
        ;

        public deleteItem(index) {
             this.$scope.itemArray.splice(index, 1);
        }
        ;
    }
}
