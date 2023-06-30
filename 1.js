function getPasswordChecker(password) {
    return function(checking) {
        if (password === checking) {
            return true
        }
        return false
    }
}

const check = getPasswordChecker('Netology123')


console.log(check('Netology123'))
console.log(check('Netology123'))