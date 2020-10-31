export const anagram = (s1, s2) => {

    if (s1 === undefined || s2 === undefined || s1 === null || s2 === null)
        return false

    return s1.toLowerCase().split('').filter(s => !/\s+/.test(s)).sort().join('') === s2.toLowerCase().split('').filter(s => !/\s+/.test(s)).sort().join('')

}

export const palindrome = (str) => {

    if (str === undefined || str === null)
        return false

    const filteredS = str.toLowerCase().split('').filter(s => !/[\u0020-\u002f\u003a-\u0040\u005b-\x60\u2000-\u206f]/.test(s))

    return filteredS.join('') === filteredS.reverse().join('')

}
