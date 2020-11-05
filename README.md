# Mithril Starter

A minimal [Mithril](https://mithril.js.org) starter project using [rollup](http://rollupjs.org/) for bundling, [modular-css](https://m-css.com/) for CSS modules, [basscss](https://basscss.com/) (w/ addons) for styles, and [ospec](https://github.com/MithrilJS/mithril.js/tree/next/ospec) for testing... and Mithril for [XHR, routing, reactive streams, etc.](https://mithril.js.org/api.html).

State management is handled using simple objects and functions, and leveraging Mithril's auto-redraw feature (this pattern's been jokingly named "Mitosis" in the Mithril Gitter chat). [Read about my approach to minimal state management with Mithril here](https://kevinfiol.com/blog/simple-state-management-in-mithriljs/). Also see [Meiosis](http://meiosis.js.org/) by [foxdonut](https://github.com/foxdonut) for more complex use-cases.

This is a sequel to my [preact-starter](https://github.com/kevinfiol/preact-starter). The difference here is that we're using the great Mithril.js framework which is tried and tested and comes batteries-included with a bunch of goodies. This project assumes you're targeting modern browsers and thus does not include any transpilers. See [buble](https://github.com/rollup/plugins/tree/master/packages/buble), [sucrase](https://github.com/rollup/plugins/tree/master/packages/sucrase), or [babel](https://github.com/rollup/plugins/tree/master/packages/babel) for that.

## Running & Building

I used [pnpm](https://pnpm.js.org/) for this project, but you can use npm or yarn if you wish.

Install dependencies:
```
pnpm install
```

Run:
```
pnpm run dev
```

Build:
```
pnpm run build
```

Test:
```
pnpm run test
```

## JSX

You can optionally use JSX with Mithril. The [official docs](https://mithril.js.org/jsx.html) are thorough in how to get started, although they use Babel. For a minimal config solution I recommend [sucrase](https://github.com/rollup/plugins/tree/master/packages/sucrase) if you're targeting ES6, or [buble](https://github.com/rollup/plugins/tree/master/packages/buble) for ES5.

Example using sucrase:
```js
// rollup.config.js
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sucrase from '@rollup/plugin-sucrase';

export default {
    input: './src/index.js',
    output: {
        file: './public/bundle.js',
        format: 'iife'
    },
    plugins: [
        sucrase({
            production: true,
            exclude: ['node_modules/**'],
            transforms: ['jsx'],
            jsxPragma: 'm',
            jsxFragmentPragma: 'm.fragment'
        }),
        nodeResolve(),
        commonjs(),
    ]
};
```