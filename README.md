
# What is Bootflat-Admin?
BOOTFLAT-ADMIN is an open source Flat UI KIT specialized for admin template, based on BOOTFLAT and Bootstrap 3.2.0 CSS framework.

# Preview
![Bootflat-Admin](https://raw.githubusercontent.com/silverbux/bootflat-admin/master/dist/img/screensho1.png "Bootflat-Admin")

![Bootflat-Admin](https://raw.githubusercontent.com/silverbux/bootflat-admin/master/dist/img/screenshot2.png "Bootflat-Admin")

For the designers, BOOTFLAT offer a [free PSD](https://github.com/bootflat/Bootflat.UI.Kit.PSD) file for you, it including a set of beautiful and pure components, which you can use to create startup projects, websites or iOS/Android Apps.


# Installation
* Clone the repo: `git clone https://github.com/silverbux/bootflat-admin.git`
* Go inside the folder and Install Requirements: `npm install`
* Run Grunt Watch: `grunt watch`

#Customize / Modify / Workflow
`grunt watch` will monitor any changes to sass, css and js files and automatically combine, minify and clean all files to **dist/css/site.min.css** and **dist/js/site.min.js**

###CSS and JS Settings
Add or Remove css/js sources or packages from **bootflat-admin/csscomb.json** and **bootflat-admin/jscomb.json**

###CSS
Add your css rules under **bootflat-admin/css/site.css**

###SASS FILES
You can also modify SASS files under folder **/bootflat-admin/scss** folder.

###JS FILES
Add your javascript codes under **bootflat-admin/js/application.js**.

#Folder Structure

```bash
Root Folder
├──bootflat-admin
│  ├── csscomb.json  # json file containing all css files to combine
│  ├── jscomb.json   # json file containing all js files to combine
│  ├── css           # source files for css
│  ├── js            # source files for js
│  ├── sass          # sass files
│  └── tmp           # temp folder for csscomb
│
│──dist              # the only folder you need for your app/website/template
│  ├── css
│  ├── fonts
│  ├── js
└──└── img
```
# MORE INFO

## Installing Ruby and Sass
* https://www.ruby-lang.org/en/installation/ *(for windows user dont forget to check "Add Ruby executables to your PATH" option)*
* After installing Ruby execute `gem install sass` to install SASS

## CREDITS
Bootflat-Admin is simply a modified copy of Bootflat with extra magic stuff in it. All necessary credits are given to [Bootflat](http://bootflat.github.io/) authors.

## LICENSE
Bootflat-Admin is licensed under the MIT Open Source license. For more information, please see the LICENSE file in this repository.
