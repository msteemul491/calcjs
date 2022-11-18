var numField1= document.getElementById('num1');
var numField2 =document.getElementById('num2');
var resultField =document.getElementById('result');
var form = document.getElementById('xPercentageY');

form.addEventListener('submit', function(event){
    if(!numField1.value|| !numField2.value){
        alert("please enter values in fields")
    }else{
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var resulting =x/y;
        var percent = resulting*100;

        resultField.innerText = "Answer:" + percent + "%";
        event.preventDefault();
        
    }
     
});