import m from 'mithril';
import Btn from './Btn';

const Counter = {
    view: ({ attrs: { num, increment, decrement } }) => 
        <div>
            <h2>{num}</h2>

            <div className="center">
                <Btn onclick={increment}>Increment</Btn>
                <Btn onclick={decrement}>Decrement</Btn>
            </div>
        </div>
};

export default Counter;