import m from 'mithril';
import stream from 'mithril/stream';
import Actions from './Actions';
import AsyncActions from './AsyncActions';

const initialState = {
    num: 0
};

const update = stream();
const state  = stream.scan((x, f) => f(x), initialState, update);

const actions      = Actions(update);
const asyncActions = AsyncActions(actions, m.redraw);
const allActions   = Object.assign({}, actions, asyncActions);

export { state, allActions as actions };