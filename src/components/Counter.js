import m from 'mithril';
import Btn from './Btn';

const Counter = {
    view: ({ attrs: { num, increment, decrement } }) =>
        m('div',
            m('h2', num),

            m('div.center',
                m(Btn, { onclick: increment }, 'Increment'),
                m(Btn, { onclick: decrement }, 'Decrement')
            )
        )
};

export default Counter;