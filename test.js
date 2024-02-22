function calculate(operator)
{

let fisrtnumber=document.getElementById("txtfirstnumber");
let secondnumber=document.getElementById("txtsecondnumber");
let result=document.getElementById("resulat");

switch(operator)
{

    case'+':
    result.innerText= parseInt (fisrtnumber.value)+ parseInt(secondnumber.value);
    break;
    case'-':
    result.innerText= parseInt (fisrtnumber.value)- parseInt(secondnumber.value);
    break;
    case'*':
    result.innerText= parseInt (fisrtnumber.value)* parseInt(secondnumber.value);
    break;
    case'/':
    result.innerText= parseInt (fisrtnumber.value)/ parseInt(secondnumber.value);
    break;
}


}