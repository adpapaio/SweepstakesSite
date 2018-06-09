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
            FormData[i].valid = true;
        }
        else
        {
            if(FormData[i].optional)
            {
                FormData[i].valid = true;
            }
            else
            {
                FormData[i].valid = false;
            }
        }
    }

    if(ClientValidation())
    {
        SendInfo('DBSending.php?itWorks=true'+'&fName='+fName.inputVal+'&lName='+lName.inputVal+'&add1='+address1.inputVal+'&add2='+address2.inputVal+'&state='+state.inputVal
                    +'&city='+city.inputVal+'&zip='+zipCode.inputVal+'&country='+country.inputVal);
    }
    else
    {
        window.alert("ERROR: Error found in inputted info.");
    }
   
    //window.location.href = "confirmationPage.html";
}

function pullInfo()
{
    fName.inputVal = document.forms["infoForm"]["fName"].value;
    lName.inputVal = document.forms["infoForm"]["lName"].value;
    address1.inputVal = document.forms["infoForm"]["addressOne"].value;
    address2.inputVal = document.forms["infoForm"]["addressTwo"].value;
    state.inputVal = document.forms["infoForm"]["state"].value;
    city.inputVal = document.forms["infoForm"]["city"].value;
    zipCode.inputVal = document.forms["infoForm"]["zip"].value;
    country.inputVal = document.forms["infoForm"]["country"].value;

    fName.valTag = document.forms["infoForm"]["fName"].value.tagName;
    lName.valTag = document.forms["infoForm"]["lName"].value.tagName;
    address1.valTag = document.forms["infoForm"]["addressOne"].value.tagName;
    address2.valTag = document.forms["infoForm"]["addressTwo"].value.tagName;
    state.valTag = document.forms["infoForm"]["state"].value.tagName;
    city.valTag = document.forms["infoForm"]["city"].value.tagName;
    zipCode.valTag = document.forms["infoForm"]["zip"].value.tagName;
    country.valTag = document.forms["infoForm"]["country"].value.tagName;
}

function ClientValidation()
{
    for(var i = 0; i < FormData.length; i++)
    {
        if(FormData[i].valid == false)
        {
            return false;
        }
    }

    return true;
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
            ajaxReutrn = ajax.responseText; //store the repsponse from the php file
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