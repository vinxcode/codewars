function getCount(str) {

    function isVowel(vowel) {
        return vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' ? true : false
    }

    let counter = 0
    for (i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            counter++
        }
    }
    return counter
}

console.log(getCount('caremico'))