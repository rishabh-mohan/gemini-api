import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class CLIQuery {
    constructor () {
        this.rl = readline.createInterface({ input, output });
    }

    async ask(query) {
        const answer = await this.rl.question(query);
        return answer.trim();
    }

    async answer(ans) {
        if (ans === null || ans === undefined) console.log("The answer returned as null/undefined");
        console.log(ans);
    }
}