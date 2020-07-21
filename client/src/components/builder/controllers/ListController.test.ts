import ListController from "./ListController";

describe("ListController", () => {
    const callback = jest.fn();
    let subject : any;

    beforeEach(() => {
        subject = new ListController(["a", "b", "c"], callback);
        jest.resetAllMocks();
    });

    test("constructor", () => {
        const array = ["a", "b", "c"];
        subject = new ListController(array, callback);
        expect(subject).toBeInstanceOf(ListController);
        expect(subject.array).toBe(array);
        expect(subject.callback).toBe(callback);
    });

    test("set", () => {
        subject.set(1, "x");
        expect(callback).toHaveBeenCalledWith(["a", "x", "c"]);
    });

    test("add", () => {
        subject.add("x");
        expect(callback).toHaveBeenCalledWith(["a", "b", "c", "x"]);
    });

    test("remove", () => {
        subject.remove(1);
        expect(callback).toHaveBeenCalledWith(["a", "c"]);
    });

    test("moveUp", () => {
        subject.moveUp(1);
        expect(callback).toHaveBeenCalledWith(["b", "a", "c"]);
    });

    test("moveDown", () => {
        subject.moveDown(1);
        expect(callback).toHaveBeenCalledWith(["a", "c", "b"]);
    });
});
