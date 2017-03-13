///<reference path="../main.module.ts"/>

module MainFeature {

    interface MainCtrlScope extends ng.IScope {
        message: string;
        item: string;
        itemArray: any[];
        MainService: MainFeature.IMainService;
    }

    export class MainCtrl {
        public static $inject = ["$scope", "MainService"];
        public $scope: MainCtrlScope;
        public message = "124";

        constructor($scope: MainCtrlScope, MainService: MainFeature.IMainService) {
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

        public SetMessage(): void {
            this.message = this.$scope.MainService.GetMessage();
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
