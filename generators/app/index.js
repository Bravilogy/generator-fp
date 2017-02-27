'use strict';

const Generator = require('yeoman-generator');

module.exports = Generator.extend({
    prompting() {
        const prompts = [
            {
                type: 'confirm',
                name: 'includeReact',
                message: 'Should I include react?',
                default: false
            }
        ];

        return this.prompt(prompts).then(answers => {
            this.includeReact = answers.includeReact;
        });
    },
    writing: {
        config(){
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    includeReact: this.includeReact
                }
            );
            this.fs.copyTpl(
                this.templatePath('_webpack.config.js'),
                this.destinationPath('webpack.config.js'),
                {
                    includeReact: this.includeReact
                }
            );
        },
        app() {
            this.fs.copy(
                this.templatePath('_public/index.html'),
                this.destinationPath('public/index.html')
            );
            this.fs.copyTpl(
                this.templatePath('_src/app.js'),
                this.destinationPath('src/app.js'),
                {
                    includeReact: this.includeReact
                }
            );
            if (this.includeReact) {
                this.fs.copy(
                    this.templatePath('_src/components/brave-and-true.jsx'),
                    this.destinationPath('src/components/brave-and-true.jsx')
                );
                this.fs.copy(
                    this.templatePath('_src/store/functional.js'),
                    this.destinationPath('src/store/functional.js')
                );
                this.fs.copy(
                    this.templatePath('_src/reducer.js'),
                    this.destinationPath('src/reducer.js')
                );
            }
        }
    },
    install() {
        this.installDependencies();
    }
});
