# Sample React/Redux
A sample [React](http://facebook.github.io/react/), [Redux](http://rackt.github.io/redux/), ES6 project with [sass](http://sass-lang.com/), [postcss](https://github.com/postcss/postcss) and [jspm](https://github.com/jspm/jspm-cli) workflows.

The sample demonstrates an async search against the Spotify Api and returns a list of Artists based on a name search. The UI utilizes Google's [Material Design Lite](http://www.getmdl.io/index.html) look and feel.

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
- ```npm install gulp mocha jspm -g```
- ```npm install```
- ```jspm install```

####Development and Debug
- Launch terminal
- ```gulp start```
- This task will launch google chrome using
    [browser-sync](http://www.browsersync.io/)
- Making code changes will automatically reload
    the app into the browser so you can see your changes
