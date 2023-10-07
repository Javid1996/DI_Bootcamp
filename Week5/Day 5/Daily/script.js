let val1;
let val2;
const url1 = "https://v6.exchangerate-api.com/v6/1984dc98ee1da84c05d42e5d/codes";
let url2 = `https://v6.exchangerate-api.com/v6/1984dc98ee1da84c05d42e5d/pair/${val1}/${val2}`;
let selectedCountryCode;
let codeOfCountry;
let nameOfCountry;
let button = document.getElementById("btn");
// button.addEventListener('click',buttonClick);

async function fetchFunction(){
    const response = await fetch(url1);
    const data = await response.json();
    console.log(data);
    const countryCode = data.supported_codes;
    console.log(countryCode); 
    selectedCountryCode = [countryCode[9],countryCode[25],countryCode[29],countryCode[42],countryCode[46],countryCode[139],countryCode[146],countryCode[117]];
    console.log(selectedCountryCode);
    
    codeOfCountry = selectedCountryCode.map(getCodeOfCountry);
    nameOfCountry = selectedCountryCode.map(getName);
    console.log(codeOfCountry);
    console.log(nameOfCountry);

    //burda çalisdim ki yeni optionlar yaradim və seliktin daxilinə salim,lakin nedense alinmir
    for(let i = 0;i++;i<=selectedCountryCode.length){
        
        // let [codeOfCountry,nameOfCountry]=element;
        let optionFrom = document.createElement('option');
         optionFrom.innerText = codeOfCountry[i] , nameOfCountry[i]  ;
         optionFrom.value = codeOfCountry[i];
         const selectFrom=document.getElementById('from')
         selectFrom.append(optionFrom);
         
         
         let optionTo = document.createElement('option');
         optionTo.innerText = nameOfCountry[i];
         optionTo.value = codeOfCountry[i];
         const selectTo=document.getElementById('to')
         selectTo.append(optionTo);
    }




}


// async function sendAndGetRequest()














fetchFunction();



function getCodeOfCountry(item) {
    return item[0];
     
};

function getName(item){
    return item[1];
}