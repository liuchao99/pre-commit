import { observable, action, makeObservable } from "mobx";

class Store {

    constructor() {
        makeObservable(this);
    }

    @observable
    count = 0;

    @action("add")
    add = () => {
        this.count = this.count + 1;
    };

    @action("reduce")
    reduce = () => {
        this.count = this.count - 1;
    };
}
export default new Store();