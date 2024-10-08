function isIsogram(str) {

    let firstIndex
    let lastIndex

    for (i = 0; i < str.length; i++) {
        lastIndex = str.lastIndexOf(str.charAt(i))
        firstIndex = str.indexOf(str.charAt(i))

        if (firstIndex !== lastIndex) {
            return true
        } else {
            return false
        }

    }

    return true
}