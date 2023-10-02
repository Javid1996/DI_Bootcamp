const getAnagram = (str1, str2) => {
    
    if(str1.toLowerCase().split('').sort().join('') ==
    str2.toLowerCase().split('').sort().join('')){

    console.log(`${str1} is an anagram of ${str2} `)

    } else{
        console.log(`${str1} is not an anagram of ${str2} `)
    }
}


getAnagram('aaaBBb','AbAbAb')
getAnagram('Astronomer ','Moon starer')
getAnagram('School master','The classroom')
getAnagram('The Morse Code','Here come dots')
getAnagram('str1','str2')





// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// !!! TASK REDO

// !!! steps
/* 
1. stringlerden space silmek 
2. stirngleri arraye cevirmek
3. stringlerin lengthlerini muqayise etmek eger lengthler beraber deyilse demek sozler eyni deyil
4. stringleri loop getmek her bir elementi muqayise etmek
5. her biri birbirine beraberdise demekki eyni herfler istifade olunub
*/
