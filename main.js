import {moo} from "./moo.js";
import {say} from "cowsay";

let greeting = moo("NAME");
let obj = {
    text: greeting,
};

console.log(say(obj));