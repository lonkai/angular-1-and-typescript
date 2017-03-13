///<reference path="../main.module.ts"/>

module MainFeature {
    export interface IMainService {
        GetMessage(): string;
    }

    export class MainService implements IMainService {
        constructor() {
        }
        public GetMessage(): string {
            return "Hello world from Service!";
        }
    }
}
