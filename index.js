function calculate()
{

let fisrtnumber=document.getElementById("txtfirstnumber");
let secondnumber=document.getElementById("txtsecondnumber");
let result=document.getElementById("resulat")
result.innerText= parseInt (fisrtnumber.value)+ parseInt(secondnumber.value);

}