import { openVertexAI } from "./Browser.js";
import { askVertexAI } from "./Browser.js";
import { CLIQuery } from './CLIQuery.js';

const { page } = await openVertexAI();
const sc = new CLIQuery();
var response = "";
while(true) {
    await sc.answer(await askVertexAI(page, await sc.ask("Prompt: ")));
}