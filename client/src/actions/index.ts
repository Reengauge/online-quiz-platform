import { AppEvents } from './events';
import { Language } from '../components/global/Language';

const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
    return {
        type,
        payload,
    };
};

export const SetLanguage = makeAction<AppEvents.SET_LANGUAGE, Language>(
    AppEvents.SET_LANGUAGE
);

interface IStringMap<T> {
    [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
    SetLanguage,
};

export type IAction = IActionUnion<typeof actions>;
