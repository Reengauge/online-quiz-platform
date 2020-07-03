// import { LanguageComponent } from '../components/global/Language';
import { Dispatch } from 'react';
import { IAction, SetLanguage } from '../actions';
import { IAppState } from './store';
import { Language } from '../components/global/Language';

export const mapStateToProps = (state: IAppState) => {
    return {
        language: state.app.language,
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        onClickFr: () => dispatch(SetLanguage(Language.FR)),
        onClickEn: () => dispatch(SetLanguage(Language.EN)),
    };
};

// export const LanguageContainer = compose(
//     connect(mapStateToProps, mapDispatchToProps)
// )(LanguageComponent);
