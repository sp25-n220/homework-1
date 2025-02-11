# CLI tool creation Homework-2
## create-simple-frontend-struct

This homework assignment is a custom scaffold project. It allows users to create a simple project folder with index.js/html and README.md files inside. This project uses fs, readline, and path inorder to create these files and folders.  


### How to setup 

- To install: 

	`npm install -g create-simple-frontend-struct`

- After installation: 

    `create-simple-frontend-struct `

### Weekly Recap
1. fs:
    - The fs module writes to certain files or directories
2. readline: 
    - The readline module allows for user input inside a terminal.
3. path:
    - The path module handles the "pathing" (given the name) to where files or directories go.
4. process.cwd()
    - Process.cwd() means current working directory. This directory is where the script is ran from. This is important because it keeps track of which directory you are in. It allows you to write your files to the directory you are in and not from the original directoy. 
5. bin/version/files
    - Bin makes your package true CLI tool! 
    - Files tells the program what files to keep in the package
    - This helps users keep track of version updates. 



### How the project works 

1. First we use import statements for fs, readline, and path. 
2. We create an interface in order to use the readline module.
3. We ask a question to the user. This question has a series of logic that will take in the users project name, ask if the user would like a README, and then create the folder structure as follows:
-main-folder
/index.js
/index.html
/README.md
