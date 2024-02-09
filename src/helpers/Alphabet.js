let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const alphabetize = (array, letter) => {
    return array.filter((recipe) => recipe.label[0] === letter)
}

export {alphabet, alphabetize}