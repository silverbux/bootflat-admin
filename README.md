
# What is Bootflat-Admin?
BOOTFLAT-ADMIN is an open source Flat UI KIT specialized for admin template, based on BOOTFLAT and Bootstrap 3.2.0 CSS framework.

# Preview
![Bootflat-Admin](https://raw.githubusercontent.com/silverbux/bootflat-admin/master/img/screensho1.png "Bootflat-Admin")

![Bootflat-Admin](https://raw.githubusercontent.com/silverbux/bootflat-admin/master/img/screenshot2.png "Bootflat-Admin")

For the designers, BOOTFLAT offer a [free PSD](https://github.com/bootflat/Bootflat.UI.Kit.PSD) file for you, it including a set of beautiful and pure components, which you can use to create startup projects, websites or iOS/Android Apps.


# Installation
* Clone the repo: `git clone https://github.com/silverbux/bootflat-admin.git`
* Go inside the folder and Install Requirements: `npm install`
* Run Grunt Watch: `grunt watch`

#Customize / Modify / Workflow
`grunt watch` will monitor any changes to sass, css and js files and automatically combine, minify and clean all files to **site.min.css** and **site.min.js**

###CSS
Add your own css rules under **/css/site.css**

###SASS FILES
You can also modify SASS files under folder **/bootflat-admin/scss** folder.

###JS FILES
Add your javascript codes to **/js/application.js**.

#Compiled Files
Here are the following files/folders you will need for your application/website

```bash
Root Folder
├── css
|   └── site.min.css    # Combined/Minified file of css and sass files
├── js
|   └── site.min.js     # Combined/Minified file of javascript files
└── fonts           	# Font-Awsome and Glyphicons font folder
```
# MORE INFO

## Installing Ruby and Sass
* https://www.ruby-lang.org/en/installation/ *(for windows user dont forget to check "Add Ruby executables to your PATH" option)*
* After installing Ruby execute `gem install sass` to install SASS

## CREDITS
Bootflat-Admin is simply a modified copy of Bootflat with extra magic stuff in it. All necessary credits are given to [Bootflat](http://bootflat.github.io/) authors.

## LICENSE
Bootflat-Admin is licensed under the MIT Open Source license. For more information, please see the LICENSE file in this repository.
