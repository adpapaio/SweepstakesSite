//This script will validate the form info and then send to the server.

var formId;
var fName;
var lName;
var address1;
var address2;
var city;
var state;
var zipCode;
var country;

var FormData; //array that holds all the data
function formVar(opt)
{
    this.inputVal;
    this.valTag;
    this.optional = opt;
    this.valid = false;
}

function Submit()
{

    pullInfo();

    for(var i = 0; i <FormData.length; i++)
    {
        if(FormData[i].inputVal.length != 0)
        {
            
        }
        else
        {
            FormData[i].valid = false;
        }
    }
    SendInfo('DBSending.php?itWorks=true'+'&fName='+fName.inputVal+'&lName='+lName.inputVal);
   
    window.location.href = "confirmationPage.html";
}

function pullInfo()
{
    fName.inputVal = document.forms["infoForm"]["fName"].value;
    lName.inputVal = document.forms["infoForm"]["lName"].value;
    address1.inputVal = document.getElementById("addressOne");
    address2.inputVal = document.getElementById("addressTwo");
    state.inputVal = document.getElementById("state");
    city.inputVal = document.getElementById("city");
    zipCode.inputVal = document.getElementById("zip");
    country.inputVal = document.getElementById("country");

    fName.valTag = document.getElementById("fName").tagName;
    lName.valTag = document.getElementById("lName").tagName;
    address1.valTag = document.getElementById("addressOne").tagName;
    address2.valTag = document.getElementById("addressTwo").tagName;
    state.valTag= document.getElementById("state").tagName;
    city.valTag = document.getElementById("city").tagName;
    zipCode.valTag = document.getElementById("zip").tagName;
    country.valTag = document.getElementById("country").tagName;
}

//creates the AJAX Caller for the server/php files
function AjaxCaller(){
    var xmlhttp=false;
    try{
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){
        try{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(E){
            xmlhttp = false;
        }
    }

    if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

//send the data to the server
function SendInfo(url){
    ajax=AjaxCaller(); 
    ajax.open("POST", url, true);  //Using the POST operation
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status == 200){
            ajaxReutrn = ajax.responseText; //store the repsponse form the php file
           window.alert(ajaxReutrn);   
        }
    }
    ajax.send(null); //end of ajax call
}

window.onload = function()
{
    document.getElementById('submit').addEventListener("click", Submit);
    fName = new formVar(false);
    lName = new formVar(false);
    address1 = new formVar(false);
    address2 = new formVar(true);
    city = new formVar(false);
    state = new formVar(false);
    zipCode = new formVar(false);
    country = new formVar(false);
    
    FormData = [fName,lName,address1,address2,city,state,zipCode,country];
}