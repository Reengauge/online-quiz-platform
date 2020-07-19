export default class Question {

    text: any;
    type: any;
    options: any;
    id: any;

    static TYPES = Object.freeze({
        SINGLE: "Options: Pick One",
        MULTIPLE: "Options: Pick Any Number",
        TEXT: "Short Answer"
    });

    static DEFAULTS = Object.freeze({
        text: "New Question",
        type: Question.TYPES.SINGLE,
        options: [],
        id: "random"
    });

    constructor(params = {}) {
        // const { text, type, options, id } = { ...Question.DEFAULTS, ...params };
        const { text, type, options, id } = { ...Question.DEFAULTS, ...params };
        this.text = text;
        this.type = type;
        this.options = options;
        this.id = id || Math.random();
        // this.id = Math.random();
    }

    get hasOptions() {
        return (
            this.type === Question.TYPES.SINGLE ||
            this.type === Question.TYPES.MULTIPLE
        );
    }

    get inputType() {
        if (this.type === Question.TYPES.SINGLE) return "radio";
        if (this.type === Question.TYPES.MULTIPLE) return "checkbox";
        throw new Error("This question does not have an input type.");
    }

    merge(patch: any) {
        return new Question({ ...this, ...patch });
    }
}
