import './styles/tailwind.css';
import './styles/global.css';

import m from 'mithril';
import { state, actions } from './state/container';

import Counter from './components/Counter';

const App = {
    view: ({ attrs: { state, actions } }) =>
        m('div.container.max-w-xl.mx-auto.p-3',
            m('h1.text-4xl', 'Mithril Starter'),
            m('p', 'This is a sample Mithril.js application. It uses the Meiosis/Mitosis State Management Pattern.'),
            m(Counter, { state, actions })
        )
};

m.mount(document.getElementById('app'), {
    view: () => m(App, { state, actions })

    // If using Meiosis State Management
    // view: () => m(App, { state: state(), actions })
});