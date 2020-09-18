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
        <div className="max-width-3 mx-auto p3">
            <h1>Mithril Starter</h1>
            <p>This is a sample Mithril application.</p>
            <Counter
                num={state.num}
                increment={actions.increment}
                decrement={actions.decrement}
            />
        </div>
};

m.mount(document.getElementById('app'), () => {
    const state = State();
    const actions = Actions(state);

    return { view: () => <App state={state} actions={actions} /> };
});