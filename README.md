# Sample React/Redux
A sample [React](http://facebook.github.io/react/), [Redux](http://rackt.github.io/redux/), ES6 project with [sass](http://sass-lang.com/), [postcss](https://github.com/postcss/postcss) and [systemjs](https://github.com/systemjs/systemjs) workflows.

The sample demonstrates an async search against the Spotify Api to return a list of Artists based on a name search.

##Setup your dev environment

- Install a package manager
    - OSX: I recommend [homebrew](http://brew.sh)
    - Windows: I recommend [chocolatey](https://chocolatey.org)
    - Unix: Use the one that came with your OS
- Install node
    - Launch terminal
    - OSX: ```brew install node```
    - Windows: ```choco install nodejs```
    - Unix(Debian and Ubuntu): ```sudo apt-get install --yes nodejs```
- Install git
    - Launch terminal
    - OSX: ```brew install git```
    - Windows: ```choco install git```
    - Unix: ```sudo apt-get install git```

###Project Setup

- Launch terminal
- ```git clone https://github.com/earlsioson/start-react-redux.git```
- ```cd start-react-redux```
- ```npm install gulp mocha -g```
- ```npm install```

####Development and Debug
- Launch terminal
- ```gulp start```
- This task will launch google chrome using
    [browser-sync](http://www.browsersync.io/)
- Making code changes will automatically reload
    the app into the browser so you can see your changes

####Create a distribution directory for production
- Launch terminal
- ```gulp publish```
- This task creates a self contained
     directory, named "dist", minifies and bundles all js dependencies into one file and updates the index.html to link to it. This directory can then serve as the root for an http server.
