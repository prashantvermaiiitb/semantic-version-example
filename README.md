# Semantic Versioning example 
<br/>1. Installed inquirer package for c language like prompt for the question / answers.
<br/>2. npm ls : will give you the list of packages installed manually. 
<br/>3. npm ls --depth=1 : will give you list of packages with dependencies upto level 1.
<br/>4. npm list is also going to do the same. 
<br/>5. npm view <package-name> will list all the information for the package.
<br/>6. npm install <package-name>@<release number> --exact will install the exact version requested by NPM.
<br/>7. npm install <package-name>@<release number> --save-exact will install the exact version requested by NPM.
<br/>8. npm install inquirer@7.3.0 will be making ^7.3.0 as the version of the inquirer in package JSON.
<br/>9. npm install inquirer@~7.3.0 will be installing latest patch version for inquirer in the package JSON. In Package jSON we will be having ~7.3.0 but in package-lock.json we have 7.3.3 installed. This means it's fine to have the latest patch version but not the major or minor version.
<br/>10. for viewing the versions of the project : npm view or npm v <package-name> versions
<br/>11. for viewing the versions of the project : npm view or npm v <package-name> versions --json to print out the full list.





