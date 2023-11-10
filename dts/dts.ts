

import { quote, setCase} from './mylib'
import type { CaseKinds } from "./mylib";


const message = "hello";
const upper = setCase(message, 'uppercase')
console.log(upper)
// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
