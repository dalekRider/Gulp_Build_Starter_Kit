# Gulp Build the Starter Kit

This is my basic build setup for personal projects. One major feature you may see missing is minification. The projects that use this build are simple and shared. I want to maintain the codes readability for anyone that is looking. 

## Features
+ Gulp-Sass
+ Postcss
+ Autoprefixer
+ Browsersync

## How to Use
**Installation**

_Warning, if you are unfamiliar with node, npm, gulp and the dependencies being installed, I highly recommend you read their documentation and follow a few online tutorials before proceeding._

This requires node.js installed on your machine. If you do not have it installed you will need to go the nodejs.org website, download and install it to your machine.

Download the files. Copy the contents inside of the gulp_build_starter_kit folder to an empty new project folder. You will need access from the command line. Powershell, Command Prompt or use one of your choosing. I just use VS Code's integrated command line tool. From a command line you will need to change to your current folder (your new project folder with the files). Type the following code and press enter
```
npm install
```
This may take a minute or two depending on your machine. One it has completed you can simply run the following code
```
npm start
```
This will start the dev server. It will launch and load the page in a browser. It will watch HTML and SASS files for changes and live reload the browser to update. SASS files will be compiled to a CSS folder and output as normal CSS. The Postcss Autoprefixer will apply autoprefixes to css properties that need them to be supported across most browsers. 

## Options
There are a few options that some developers may want to change based on their tastes. Below you will find these options and how to change them or links to documentation to help you decide which settings you want

**SASS or SCSS**

Semicolons and Brackers. I've chosen not to use them, but for those of you that do its a pretty simple change. Open the gulpfile.js and replace `'src/sass/*.sass'` with `'src/sass/*.scss'`. Update the style.sass file in src folder to style.scss and you are all set!

**Browser Settings**

This section allows you to choose which browser your project will open in. If you want to use a browser other than your machine's default, you can add a name/value. Look [here][1] for more information.
```
browser: 'browser name or exe location goes here',
```
Here's how mine is setup
```js
browserSync.init({
        browser: 'C:\\Program Files\\Firefox Developer Edition\\firefox.exe',
        server: './src'
    });
```
**Autoprefixer Options**

The autoprefixer is currently set to provide prefix support for 99.5% of browsers in the US and prefixes flexbox. I did not turn on the grid support. My reasoning is that prefix support seems a bit sketchy to me. VSCode starts screaming at me when it attempts to prefix grid's repeat functionality for IE. For grid I believe the best option is to provide fallback support using feature queries. Jen Simmon's [post][2] and Rachel Andrew's [video][3] are great resources for learning more.

Adjust this line of code to change the autoprefixer options using options listed [here][4]

```autoprefixer({ browsers: ['cover 99.5% in US'], flexbox: "no-2009" })```

## Resources
A list of all the resources I used to when putting together this kit

https://nodejs.org/en/ <br>
https://gulpjs.com/ <br>
https://www.npmjs.com/ <br>
https://github.com/postcss/postcss <br>
https://github.com/postcss/autoprefixer#options <br>
https://github.com/ai/browserslist#queries <br>
https://www.npmjs.com/package/gulp-sass <br>
https://webdesign.tutsplus.com/tutorials/using-postcss-together-with-sass-stylus-or-less--cms-24591 <br>
https://browsersync.io/docs/gulp <br>
https://browsersync.io/docs/options#option-browser <br>
https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/ <br>
https://gridbyexample.com/video/feature-queries/ <br>
https://www.youtube.com/watch?v=fMg5HlHmGLY&list=PLLnpHn493BHFvjZzyYrQP0RTsG-Al7j9m <br>
https://www.youtube.com/watch?v=rmXVmfx3rNo&t=126s <br>


[1]: https://browsersync.io/docs/options#option-browser
[2]: https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/
[3]: https://gridbyexample.com/video/feature-queries/
[4]: https://github.com/postcss/autoprefixer#options