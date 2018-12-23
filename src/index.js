import { askAboutDrinkingByAge } from "./drinking";

document.getElementById('answer-adult').innerHTML = askAboutDrinkingByAge(33)

document.getElementById('answer-minor').innerHTML = askAboutDrinkingByAge(8)