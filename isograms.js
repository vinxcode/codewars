function isIsogram(str) {

    str = str.toLowerCase()

    let firstIndex
    let lastIndex
    let result = false

    for (i = 0; i < str.length; i++) {
        lastIndex = str.lastIndexOf(str.charAt(i))
        firstIndex = str.indexOf(str.charAt(i))

        if (firstIndex !== lastIndex) {
            result = false
            break;
        } else {
            result = true
        }

    }

    return str === "" ? true : result
}

isIsogram('Dermatoglyphics')
isIsogram('isogram')
isIsogram('aba')
isIsogram('moOse')
isIsogram('isIsogram')
isIsogram('')