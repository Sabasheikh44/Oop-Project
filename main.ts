

import inquirer from "inquirer";
import chalk from 'chalk';

class Person {
  private _personality: string;

  constructor() {
    this._personality = 'Mystery';
  }

  userinput(input: string) {
    if (input.includes('talk to others about yourself')) {
      this._personality = 'talk Happly';
    } else if (input.includes('keep quiet and dont ask question')) {
      this._personality = 'talk Rude';
    }
  }

  get personality() {
    return this._personality;
  }
}

class Main {
  async main() {
    const ans = await inquirer.prompt([
      {
        name: "ask",
        type: "list",
        message: chalk.yellow("what is your behaviour?"),
        choices: [
          { name: '1- talk to others about myself', value: 'talk to other about your self' },
          { name: '2- keep quiet and dont ask questions', value: 'keep quiet and dont ask questions' }
        ]
      }
    ]);

    let myPerson = new Person();
    myPerson.userinput(ans.ask);
    console.log(`you are ${myPerson.personality}`);
  }
}

const myObj = new Main();
myObj.main();
