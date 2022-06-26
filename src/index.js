/**
 * Code to check for inquirer.
 */
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'list',
        name: 'character-class',
        loop: false,
        message: 'Choose your character\'s Class',
        choices: [
            'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
        ]
    }, {
        type: 'checkbox',
        name: 'proficiencies',
        loop: false,
        message: 'Choose 2 proficiencies',
        choices: [
            'Acrobat', 'Animal Handling', 'Arcana', 'Atheletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation'
        ],
        validate: function (input) {
            const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            const amount = Object.keys(input).length;
            return wait(2000).then(() =>
                amount !== 2 ? "Please choose exactly 2 proficiencies." : true
            );
        }
    }
]).then(answers => { console.log(answers) }).catch(error => console.error(error))