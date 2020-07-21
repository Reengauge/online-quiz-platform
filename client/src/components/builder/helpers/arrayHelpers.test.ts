import * as arrayHelpers from "./arrayHelpers";

describe("arrayHelpers", () => {
    describe("set(array, index, element)", () => {
        it("replaces the element at the given index", () => {
            const array = [1, 2, 3, 4];
            expect(arrayHelpers.set(array, 2, 5)).toEqual([1, 2, 5, 4]);
        });

        it("does not mutate the array", () => {
            const array = [1, 2, 3, 4];
            arrayHelpers.set(array, 2, 5);
            expect(array).toEqual([1, 2, 3, 4]);
        });
    });

    describe("remove(array, index)", () => {
        it("removes the element at the given index", () => {
            const array = [1, 2, 3, 4];
            expect(arrayHelpers.remove(array, 2)).toEqual([1, 2, 4]);
        });

        it("does not mutate the array", () => {
            const array = [1, 2, 3, 4];
            arrayHelpers.remove(array, 2);
            expect(array).toEqual([1, 2, 3, 4]);
        });
    });

    describe("insert(array, index, element)", () => {
        it("inserts the given element before the given index", () => {
            const array = [1, 2, 3, 4];
            expect(arrayHelpers.insert(array, 2, 7)).toEqual([1, 2, 7, 3, 4]);
        });

        it("does not mutate the array", () => {
            const array = [1, 2, 3, 4];
            arrayHelpers.insert(array, 2, 7);
            expect(array).toEqual([1, 2, 3, 4]);
        });
    });

    describe("move(array, fromIndex, toIndex)", () => {
        it("moves the element at the given fromIndex to the given toIndex", () => {
            const array = [1, 2, 3, 4, 5, 6];
            expect(arrayHelpers.move(array, 2, 4)).toEqual([1, 2, 4, 5, 3, 6]);
        });

        it("does not mutate the array",() => {
            const array = [1, 2, 3, 4, 5, 6];
            arrayHelpers.move(array, 2, 4);
            expect(array).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });
});
