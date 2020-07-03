import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    mapStateToProps,
    mapDispatchToProps,
} from '../../reducers/mapLanguage';

export enum Language {
    EN,
    FR,
}

interface IProps {
    language: Language;
    onClickFr(): void;
    onClickEn(): void;
}

const LanguageComponent: React.FunctionComponent<IProps> = ({
    language,
    onClickFr,
    onClickEn,
}) => (
    <>
        <button onClick={language === 0 ? onClickFr : onClickEn}>
            {Language[language]}
        </button>
    </>
);

export const LanguageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LanguageComponent);
