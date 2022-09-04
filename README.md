# node js server set using es6:

## Packages to be installed:
## Babel Packages:
### npm i @babel/cli @babel/core @babel/node @babel/preset-env
### npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread

## Nodemon and rimraf
### npm i rimraf nodemon

## Package json scripts:
``` "scripts": {
  "build": "rimraf dist && babel src --out-dir dist  --copy-files",
  "start": "node dist/app.js",
  "start:dev": "nodemon --exec babel-node src/app.js",
 }, ```

### Build: delete and transpile es6 code to es5 code
### Start: serve the compliled es5 code
### start dev: for dev env use bable core and live serve using nodemon

## Babel configurations in .babelrc file
``` {
   "presets": [
     ["@babel/env", {
       "targets": {
         "node": "current"
       }
     }]
   ],
   "plugins": [
     "@babel/plugin-proposal-class-properties",
     "@babel/plugin-proposal-object-rest-spread"
   ]
} ```
