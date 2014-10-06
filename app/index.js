'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var WebrtcGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to WebRTC generator!'
    ));

    var prompts = [{
      type: 'checkbox',
      name: 'constraints',
      message: 'Will you be using?',
      default: true,
      choices: [
        {
          name: 'audio'
        }, {
          name: 'video'
        }, {
          name: 'both',
          checked: 'true'
        }
      ],
      validate: function( answer ) {
        if ( answer.length === 0 ) {
          return "You must choose at least one option.";
        }
        return true;
      }
    }];
    this.prompt(prompts, function (props) {
      this.constraints = props.constraints;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('css');
      this.dest.mkdir('js');
    },
    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('main.css', 'css/main.css');
      this.template('main.js', 'js/main.js');
      this.template('_index.html', 'index.html');
    }
  },

  end: function () {
    // No deps as of now; this.installDependencies();
  }
});

module.exports = WebrtcGenerator;
