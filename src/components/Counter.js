import m from 'mithril';
import Btn from './Btn';

const Counter = {
    view: ({ attrs: { state, actions } }) => 
        m('div',
            m('h2.text-3xl', state.num),

            m('div.text-center',
                m(Btn, { onclick: actions.incrementNum }, 'Increment'),
                m(Btn, { onclick: actions.decrementNum }, 'Decrement'),
                m(Btn, { onclick: actions.delayedIncrement }, 'Delayed Increment')
            )
        )
};

export default Counter;