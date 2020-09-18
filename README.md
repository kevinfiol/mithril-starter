# Mithril Starter

A minimal [Mithril](https://mithril.js.org) starter project using [rollup](http://rollupjs.org/) for bundling, [modular-css](https://m-css.com/) for CSS modules, [basscss](https://basscss.com/) (w/ addons) for styles, and [ospec](https://github.com/MithrilJS/mithril.js/tree/next/ospec) for testing... and Mithril for [XHR, routing, reactive streams, etc.](https://mithril.js.org/api.html).

This is a sequel to my [preact-starter](https://github.com/kevinfiol/preact-starter). The difference here is that we're using the great Mithril.js framework which is tried and tested and comes batteries-included with a bunch of goodies. I set this project up to use JSX, but you can easily remove the JSX pragma & transforms from the sucrase config in `rollup.config.js` to go the Mithril-flavored hyperscript route (my preferred method).

## Running & Building

I used [yarn v1](https://classic.yarnpkg.com/lang/en/) for this project, but you can use npm if you wish.

Install dependencies:
```
yarn
```

Run:
```
yarn run dev
```

Build:
```
yarn run build
```

Test:
```
yarn run test
```

## Disclaimer

This project uses [sucrase](https://github.com/alangpierce/sucrase) as a transpiler as opposed to Babel in order to optimize bundle build times, and also minimize dependencies. Sucrase is fine for production builds **so long as you're OK with only supporting modern browsers**. For that reason, don't expect this to work with IE11. See [buble](https://buble.surge.sh) if you need a zero-config transpiler with JSX support that also transpiles to ES5. Or [babel](https://babeljs.io/) if you want to go down that rabbithole.
