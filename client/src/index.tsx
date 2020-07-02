import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './reducers/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
