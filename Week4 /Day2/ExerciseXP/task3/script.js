// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, 
// and married to <partner's name> with <number of children> kids."


(function (children,partnerName,location,job){
    
 console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${children} kids.`)
})("3","Ema","British Columbia","developer")