import { AppEvents } from '../actions/events';
import { IAction } from '../actions';
import { Language } from '../components/global/Language';

const initState: IState = {
    language: Language.EN,
};

export interface IState {
    language: Language;
}

export const reducer = (state: IState = initState, action: IAction): IState => {
    switch (action.type) {
        case AppEvents.SET_LANGUAGE:
            return { ...state, language: action.payload };

        default:
            return state;
    }
};
