import Question from "./Question";

describe("Question", () => {
    let question: any;

    beforeEach(() => {
        question = new Question();
    });

    describe("constructor", () => {
        it("can be initialized", () => {
            expect(question).toBeInstanceOf(Question);
        });

        it("can be initialized with only some attributes", () => {
            question = new Question({ text: "What’s up?" });
            expect(question.type).toEqual(Question.DEFAULTS.type);
        });

        it("has a unique id", () => {
            expect(question.id).toBeTruthy();
            expect(new Question().id).not.toEqual(new Question().id);
        });

        describe("without arguments", () => {
            it("has default text", () => {
                expect(question.text).toEqual(Question.DEFAULTS.text);
            });

            it("has default type", () => {
                expect(question.type).toEqual(Question.DEFAULTS.type);
            });

            it("has default options", () => {
                expect(question.options).toEqual(Question.DEFAULTS.options);
            });
        });

        it("can be initialized with values", () => {
            question = new Question({
                text: "What is your favorite color?",
                type: Question.TYPES.MULTIPLE,
                options: ["Red", "Blue"],
                id: 1234
            });

            expect(question.text).toEqual("What is your favorite color?");
            expect(question.type).toEqual(Question.TYPES.MULTIPLE);
            expect(question.options).toEqual(["Red", "Blue"]);
            expect(question.id).toEqual(1234);
        });
    });

    describe(".merge(patch)", () => {
        it("returns an object with the old values overwritten by the new values", () => {
            question = new Question({
                text: "Another question",
                type: Question.TYPES.TEXT
            });
            expect(question.merge({ text: "Updated question" })).toMatchObject({
                text: "Updated question",
                type: Question.TYPES.TEXT
            });
        });

        it("returns a different object", () => {
            question = new Question({
                text: "Another question",
                type: Question.TYPES.TEXT
            });
            expect(question.merge({ text: "Updated question" })).not.toEqual(
                question
            );
        });

        it("returns a Question", () => {
            question = new Question({
                text: "Another question",
                type: Question.TYPES.TEXT
            });
            expect(question.merge({ text: "Updated question" })).toBeInstanceOf(
                Question
            );
        });
    });

    describe(".hasOptions", () => {
        it("returns true if question is pick one", () => {
            question.type = Question.TYPES.SINGLE;
            expect(question.hasOptions).toBeTruthy();
        });

        it("returns true if question is pick any number", () => {
            question.type = Question.TYPES.MULTIPLE;
            expect(question.hasOptions).toBeTruthy();
        });

        it("returns false if the question is short answer", () => {
            question.type = Question.TYPES.TEXT;
            expect(question.hasOptions).toBeFalsy();
        });
    });

    describe(".inputType", () => {
        it("returns 'radio' if question is pick one", () => {
            question.type = Question.TYPES.SINGLE;
            expect(question.inputType).toEqual("radio");
        });

        it("returns 'checkbox' if question is pick any number", () => {
            question.type = Question.TYPES.MULTIPLE;
            expect(question.inputType).toEqual("checkbox");
        });

        it("throws an error if question is short answer", () => {
            question.type = Question.TYPES.TEXT;
            expect(() => question.inputType).toThrow(
                "This question does not have an input type."
            );
        });
    });
});
