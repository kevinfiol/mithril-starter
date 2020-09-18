import m from 'mithril';
import { btn } from './styles/Btn.css';

const Btn = {
    view: ({ attrs, children }) =>
        <button className={btn} {...attrs}>
            {children}
        </button>
};

export default Btn;