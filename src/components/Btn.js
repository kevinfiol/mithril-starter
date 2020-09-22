import m from 'mithril';
import { btn } from './styles/Btn.css';

const Btn = {
    view: ({ attrs, children }) =>
        m('button', {...attrs, className: btn }, children)
};

export default Btn;