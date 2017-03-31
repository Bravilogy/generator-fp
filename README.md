# Yeoman Functional Programming Generator

Functional programming starter-kit for playing around with `data.task`, `data.either`, `data.maybe` and `ramda.js`. Comes with `webpack + babel` combo, pre-configured and includes an optional `react + redux` barebones.

## Installation
If you don't have `yeoman` set up yet, then first do:
```
npm i -g yo
```

and then:
```
git clone https://github.com/Bravilogy/generator-fp.git ~/.npm/generator-fp
cd ~/.npm/generator-fp && npm link
```

Once the generator is all set up, you can
```
mkdir some-app && cd some-app
yo fp
npm start
```

and visit `localhost:8080`.
