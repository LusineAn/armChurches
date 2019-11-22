import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import App from './src/components/container/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
// ReactDOM.render(<App />, document.getElementById('app'));