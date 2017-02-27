<% if (includeReact) { %>import React from 'react';
import reducer from './reducer';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';

import BraveAndTrue from './components/brave-and-true';

const store = createStore(reducer);
<% } else { %>import R from 'ramda';
import Task from 'data.task';
import Maybe from 'data.maybe';
import Either from 'data.either';

R.compose(R.map(([k, v]) => global[k] = v), R.toPairs)(R);
<% } %>
console.log(`%c ________________________________________
    < mooooooooooooooooooooooooooooooooooooo >
     ----------------------------------------
            \\   ^__^
             \\  (oo)\\_______
                (__)\\       )\\/\\
                ||----w |
                    ||     ||`, "font-family:monospace");
<% if (includeReact) { %>
const routes = (
    <Router history={browserHistory}>
        <Route path='/' component={BraveAndTrue} />
    </Router>
);

function bootstrap() {
    ReactDOM.render(
        <Provider store={store}>
            {routes}
        </Provider>,
        document.getElementById('app')
    );
}

store.subscribe(bootstrap);
bootstrap();
<% } %>
