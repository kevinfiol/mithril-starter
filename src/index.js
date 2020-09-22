import './styles/index.css';
import m from 'mithril';

import Counter from './components/Counter';

const State = () => ({ num: 0 });

const Actions = state => ({
    increment: () => state.num += 1,
    decrement: () => state.num -= 1
});

const App = {
    view: ({ attrs: { state, actions } }) =>
        m('div.max-width-3.mx-auto.p3',
            m('h1', 'Mithril Starter'),
            m('p', 'This is a sample Mithril application.'),
            m(Counter, {
                num: state.num,
                increment: actions.increment,
                decrement: actions.decrement
            })
        )
};

m.mount(document.getElementById('app'), () => {
    const state = State();
    const actions = Actions(state);

    return { view: () => m(App, { state, actions }) };
});