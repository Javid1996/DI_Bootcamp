const getAnagram = (str1, str2) => {
    
    // let newStr1 = str1.toLowerCase().split('').filter(letter => letter!=' ');
    // let newStr2= str2.toLowerCase().split('').filter(letter => letter!=' ');
    
    
    if(str1.toLowerCase().split('').filter(letter => letter!=' ').sort().join('') == 
    str2.toLowerCase().split('').filter(letter => letter!=' ').sort().join('')){

    console.log(`${str1} is an anagram of ${str2} `)

    } else{
        console.log(`${str1} is not an anagram of ${str2} `)
    }
}


getAnagram('aaaBBb','AbAbAb')
getAnagram('Astronomer','Moon starer')
getAnagram('School master','The classroom')
getAnagram('The Morse Code','Here come dots')
getAnagram('str1','str2')





// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"
