import * as helpers from "../helpers/arrayHelpers";

export default class ListController {

    array: any[];
    callback: any;

    constructor(array: any[], callback: any) {
        this.array = array;
        this.callback = callback;
    }

    set(index : number, newContent : any) {
        this.callback(helpers.set(this.array, index, newContent));
    }

    add(newContent : any) {
        this.callback([...this.array, newContent]);
    }

    remove(index : any) {
        this.callback(helpers.remove(this.array, index));
    }

    moveUp(index : any) {
        let newIndex = index === 0 ? index : index - 1;
        this.callback(helpers.move(this.array, index, newIndex));
    }

    moveDown(index : any) {
        let newIndex = index === this.array.length - 1 ? index : index + 1;
        this.callback(helpers.move(this.array, index, newIndex));
    }
}
