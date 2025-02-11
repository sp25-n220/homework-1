#!/usr/bin/env node

const readline = require("readline");

const path = require("path");

const fs = require("fs");


const app = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout


});



reAskQuestion = () => {
    app.question("What is the name of your project: \n", (projectName) => { 
        if (projectName.trim().length === 0){ 
            
            console.log("Your project must have a name, please try again");
            return reAskQuestion();
        }
        const projectDirectory = path.resolve(process.cwd(), projectName);
        
        const readmeFile = path.join(projectDirectory, "README.md");
    
        const indexJSFile = path.join(projectDirectory, "index.js");

        console.log(`index.js File added for ${projectName} `);
            
        const indexHTMLFile = path.join(projectDirectory, "index.html");

        console.log(`index.html File added for ${projectName} `);

        app.question("Would you like a Readme file? (Y/N) ", (answer) => {
            
            if (!fs.existsSync(projectDirectory)) {
                
                fs.mkdirSync(projectDirectory);

                fs.writeFileSync(indexJSFile, `console.log("This is your index.js file in ${projectName}")`)
               
                fs.writeFileSync(indexHTMLFile, 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<script src="lib/jquery-3.7.1.min.js">
</script><script src="app/app.js"></script>
</body>
</html>`
            );


            };
            
            if (answer.toLowerCase() === 'y') { 
                fs.writeFileSync(readmeFile, `## ${projectName}`);
                console.log(`README File added for ${projectName} `)
                app.close();
            } else if (answer.toLowerCase() === 'n'){
                
                console.log(`Readme for ${projectName} was not added`);
                app.close();

            } else {

                console.log("This was not an answer, start over");
                return reAskQuestion();

            }
        
            console.log(`You created ${projectName}`);
        });
    
         
    });
    
    
}

reAskQuestion();