## <span style="color:#1e90ff">render remove all the chiled elements and add new element</span>

so if there are multiple elements inside the root div, and we use render() to add a new element, then all the previous elements will be removed and only the new element will be added.

you have to create a parent element and then add all the elements inside that parent element to avoid this issue.

---

## <span style="color:#1e90ff">Bundler</span>

### <span style="color:#ff8c00">Why we need Bundlers ?</span> 

for now we are using CDN links to use React and ReactDOM in our project. but in real world projects, but using CDN links is not a good idea because: it increases the load time of the website, because the browser has to make multiple requests to load the React and ReactDOM libraries.

but we can copy past the React and ReactDOM libraries in our project folder and use them locally, but that is also not a good idea because: it increases the size of the project folder, and also we have to manually update the libraries whenever there is a new version available.

and still there are many code in React and ReactDOM libraries that we are not using in our project, so it is better to use only the code that we are using in our project.

so to solve all these issues, we use Bundlers like Webpack, Parcel, etc. 

###  <span style="color:#ff8c00">Role of Bundler</span>

1: Combines Multiple Files:
Your code might be spread across many files (e.g., multiple JavaScript modules, CSS files, images). A bundler collects all of these files, combines them, and creates one (or more) output files that the browser can efficiently load.

2: Optimizes for Performance: Minification: Removing unnecessary spaces, comments, and shortening variable names.
Tree Shaking: Removing unused code from the final bundle, so only the parts of your code that are used are included.
Code Splitting: Breaking your code into smaller pieces (chunks) so that the browser only loads what is needed for the initial page load and can load other parts of the app on demand.

3: Handles Dependencies:
When your code imports libraries or modules (like React), the bundler resolves these dependencies, ensuring that all required code is included in the final bundle.

4: Transpiles Code:
Modern JavaScript (ES6+) and frameworks like React often use syntax and features that are not supported in all browsers. Bundlers can integrate with tools like Babel to transpile this modern code into a version that is widely compatible.

> Popular Bundlers : webpack, parcel, rollup, vite etc.

### <span style="color:#ff8c00">How to use Bundlers ?</span>

first we have to initialize a npm project using the command `npm init` in the terminal. it creat es a package.json file in our project folder.

then we have to install the bundler using the command `npm install <bundler-name> `

for example, to install webpack, we have to run the command `npm install -D parcel` or `npm install --save-dev parcel` which are used to install the bundler as a dev dependency. which means that the bundler is only needed during the development phase and not in the production phase. 


### <span style="color:#ff8c00">What is packet.json and what it holds</span>

What your project needs (dependencies).
How to run your project (scripts).
Basic details about your project (name, version, description).

Why It’s Important:
For consistency: When other people or you work on the project in the future, package.json ensures you all use the same version of the tools.
For easy setup: Instead of installing each package manually, npm install looks at package.json and automatically installs everything your project needs.

npm is Node Package Manager, which is used to manage the packages that we are using in our project. it is open source and comes with Node.js installation.

### <span style="color:#ff8c00">What is packet-lock.json</span>

It records the exact versions of every package that was installed so that the project can be reliably reproduced later.

why not only package.json?

because package.json allows version ranges (like ^1.0.0 or ~1.0.0), which means that if you run npm install at different times, you might get different versions of the packages. this can lead to inconsistencies and bugs that are hard to track down.

### <span style="color:#ff8c00">why it come with node_modules folder? why it has so many files?</span>

because when someone has created parcel, he has used some other packages to create parcel. ans this other packeges depend on other packeges so when we install parcel, it also installs all the packages that are required to run parcel. and all these packages are stored in node_modules folder.



## <span style="color:#1e90ff">Updates</span> 
18.1.2

MAJOR.MINOR.PATCH


1. Patch Version
Purpose: Bug fixes and patches that do not affect functionality or introduce breaking changes.
Changes: Fixes a small issue without adding new features.
Incremented: When backward-compatible bug fixes are made.

2. Minor Version
Purpose: Adds new features or improvements in a backward-compatible way (no breaking changes).
Changes: Introduces new functionality, but existing code will still work as before.
Incremented: When new, backward-compatible features are added.

3. Major Version
Purpose: Introduces significant changes, often with breaking changes that may require users to modify their code.
Changes: Makes fundamental changes to the library, removing or changing functionality in a way that is not backward-compatible.
Incremented: When breaking changes are introduced.

caret: ^ (minor and patch)

tilde: ~(patch)