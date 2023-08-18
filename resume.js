import inquirer from "inquirer"
import figlet from "figlet"
import chalk from "chalk"
import details from "./details.json" assert {type:"json"}
import ansiEscapes from "ansi-escapes"

// intro
process.stdout.write(ansiEscapes.clearScreen);
figlet("Hello",{ font: "Banner3-D" },
    (err, result) => {
        if(err) {
            console.log("Hi I am Vishnu Prasad Korada");
        }else {
            console.log("\n\n" + chalk.green(result));
        }
        console.log(`\n${chalk.italic.cyan(details.about)}\n`);
});


async function main() {

    let answer = await inquirer.prompt({
        name:"answer",
        type:"list",
        message:"Pick one",
        choices:["Skills", "Projects", "Education", "Experience", "Contacts", "Exit"]
    });
    let choice = answer.answer;

    if(choice == "Skills") {
        // skills
        console.log(chalk.yellow("============= Skills ===============\n"));
        console.log(chalk.yellow("Technical Skills: \n") + details.skills.technicalSkills.join(" | "));
        console.log(chalk.yellow("Non Technical Skills: \n") + details.skills.nonTechnicalSkills.join(" | "));
        console.log(chalk.yellow("Soft Skills: \n") + details.skills.softSkills.join(" | "));
        console.log(chalk.yellow("\n====================================================\n"));
        let back = await inquirer.prompt({
            // message:"menu",
            name:"back",
            type:"list",
            choices:["back"]
        });
        if(back.back == "back") {
            main();
        }
        console.log();
            

    }else if(choice == "Education") {
        // education    
        console.log(chalk.yellow("============= Education ===============\n"));
        for (const education in details.educations) {
            console.log(chalk.yellow(`${education.toUpperCase()}: \n`)+ details.educations[education]["details"] + chalk.whiteBright(details.educations[education]["marks/grade"]) + "\n");
        }
        console.log(chalk.yellow("====================================================\n"));
        let back = await inquirer.prompt({
            // message:"menu",
            name:"back",
            type:"list",
            choices:["back"]
        });
        if(back.back == "back") {
            main();
        }
        console.log();
    

    }else if(choice == "Projects") {
        // projects 
        console.log(chalk.yellow("============= Projects ===============\n"));
        console.log(chalk.dim.grey("Hold Ctrl and Click on the link..."));
        details.projects.forEach(project => {
            console.log(`${chalk.yellow(project.name.toUpperCase())}:\n${project.details}\nTechnologies Used:${project.technologiesUsed.join(" | ")}\nLink:${project.link}\n`);
        });
        console.log(chalk.yellow("====================================================\n"));
        let back = await inquirer.prompt({
            message:"menu",
            name:"back",
            type:"list",
            choices:["back"]
        });
        if(back.back == "back") {
            main();
        }
        console.log();


    }else if(choice == "Experience"){
        // experience
        console.log(chalk.yellow("============= Experience ===============\n"));
        if(details.experiences == null) {
            console.log("Till now no Experience...But I am working on it");
        }else {
            details.experiences.forEach(experience => {
                console.log(chalk.yellow(`${experience["companyName/InstituteName"].toUpperCase()}: `) + "\n" + experience.details + "\n" + experience.timePeriod + '\n');

            });
        }
        console.log(chalk.yellow("\n==================================================\n"));
        let back = await inquirer.prompt({
            message:"menu",
            name:"back",
            type:"list",
            choices:["back"]
        });
        if(back.back == "back") {
            main();
        }
        console.log();


    }else if(choice == "Contacts") {
        // contacts
        console.log(chalk.yellow("============= Contacts ===============\n"));
        console.log(chalk.dim.grey("Hold Ctrl and Click on the link..."));
        for (const contact in details.contacts) {
            if(details.contacts[contact] != "") {
                console.log(chalk.yellow(`${contact.toUpperCase()}: `) + details.contacts[contact]);
            }
        }
        console.log(chalk.yellow("====================================================\n"));
        let back = await inquirer.prompt({
            message:"menu",
            name:"back",
            type:"list",
            choices:["back"]
        });
        if(back.back == "back") {
            main();
        }
        console.log();


    }else if(choice == "Exit") {

        console.log("\n");
        figlet(" Thank You",{ font: "Train" },
            (err, result) => {
                if(err) {
                    console.log("Thank You");
                }
                console.log(chalk.magenta(result));
        });
        return;
    }
    
}

setTimeout(main,1000);



