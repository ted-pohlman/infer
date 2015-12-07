# Infer

After you understand something by Intuiting it, it's time to leave your stamp on the world by Infering that thing in your speech and other actions.

## Installation

To install the app, do the following:

    git clone git@github.com:bengrunfeld/infer.git
    cd infer
    npm install
    bower install
    grunt

## Usage

To run the app, 

1. Open `dist/index.html` in a browser
2. Open the Console in Chrome Dev Tools or FF/IE/Safari equivalent  

## How it works

We use NPM to install Grunt, Bower, and all of Grunt's plugins, listed below.

We will then use Bower to install and maintain the app's Front End dependencies, which in this case are:

* Twitter Bootstrap
* jQuery
* Underscore
* Backbone
* Marionette

Then we use Grunt to perform the following tasks:

* Uglify and minify our HTML, CSS and JS
* Copy custom HTML, CSS & JS minified files to a dist folder
* Copy files our app is dependant on to the dist folder (e.g. bootstrap CSS & JS)
* Update the paths in our HTML to redirect to the minified files

To perform these tasks, we use the following Grunt plugins:

* [grunt-processhtml](https://www.npmjs.com/package/grunt-processhtml) - redirect paths
* [grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint) - lint our Javascript
* [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) - delete the dist directory before a rebuild
* [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify) - use Uglify to minify our Javascript
* [grunt-contirb-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin) - minify our css
* [grunt-contrib-htmlmin](https://www.npmjs.com/package/grunt-contrib-htmlmin) - minify our html
* [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy) - copy dependency files (e.g. bootstrap css/js) to dist
* [grunt-contrib-requirejs](https://www.npmjs.com/package/grunt-contrib-requirejs) - load all our modules, so that we can write modular code

## But.... why??

Using the workflow listed in `Installation` and `Usage` at the top of this doc, you install bootstrap, install all of the dependencies your app will use, then lint, uglify and minify your HTML, CSS and Javascript. All the paths inside `link` and `script` tags are updated to the new minified files automatically, without the developer having to worry about them. 

The most compact possible copy of the app files are then placed in a distribution directory called `dist`. The `dist` directory gets completely deleted before Grunt executes, and then gets freshly created during the Grunt process, ensuring that old junky files don't hang around inside it from previous compiles. 
 
All that happens using three commands, which usually take less than 20 seconds to complete.

What that means is that the only thing the developer has to worry about is, well, developing. 

All they ever have to focus on is writing the HTML, CSS, and Javascript that eventually becomes their Web App. All other installation, linting and compilation tasks are handled by automated tools. **Woot!** 

## Why are dist and tmp not being pushed to the repo?

In regular production applications, `dist` and `tmp` are **never** pushed to the main repo, because they are usually large in size and don't provide development benefit to anyone reading them (minified, optimized, compressed code). Also, it gives no benefit to another developer, since using the simple `grunt` command will give you all these things anyway from the dev version of hte code. 