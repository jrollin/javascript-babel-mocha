const askAboutDrinkingByAge = (age) => {
    let iage = parseInt(age);
    if (!canDrinkAtAge(iage)) {
        return "You should only take a tiny sip at " + iage + "..."
    } else {
        return "Of course you can drink at " + iage + " !"
    }
}


const canDrinkAtAge = (age) => {
    if (age < 18) {
        return false
    }
    return true
}

export {
    askAboutDrinkingByAge,
    canDrinkAtAge
}