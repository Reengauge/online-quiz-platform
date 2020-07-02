import React from 'react';
import { LanguageContainer as LanguageFragment } from './Language';

const Header: React.FunctionComponent = () => {
    return (
        <div>
            <h1 style={{ display: 'inline-block' }}>Header</h1>
            <div style={{ display: 'inline-block' }}>
                <LanguageFragment />
            </div>
        </div>
    );
};

export default Header;
