import m from 'mithril';
import Actions from './Actions';
import AsyncActions from './AsyncActions';

const state = {
    num: 0
};

const actions      = Actions(state);
const asyncActions = AsyncActions(actions, m.redraw);
const allActions   = Object.assign({}, actions, asyncActions);

export { state, allActions as actions };