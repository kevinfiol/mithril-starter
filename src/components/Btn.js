import m from 'mithril';
import { btn } from './styles/Btn.css';

const StyledBtn = `button.${btn}`;

const Btn = {
    view: ({ attrs, children }) => m(StyledBtn, attrs, children)
};

export default Btn;