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
function formVar(type,opt)
{
    this.inputVal;
    this.valType =type;
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
            if(FormData[i].valType == 'alpha')
            {
                console.log("Entered alpha");
                FormData[i].valid = AlphaValidation(FormData[i].inputVal);
            }
            else if (FormData[i].valType == 'alphaNum')
            {
                console.log("Entered alphaNum");
                FormData[i].valid = AlphaNumVal(FormData[i].inputVal);
            }
            else if (FormData[i].valType == 'zipCode')
            {
                console.log("Entered zip");
                FormData[i].valid = ZipValidation(FormData[i].inputVal);
            }
        }
        else
        {
            if(FormData[i].optional) //if it was an optional field then it can be blank
            {
                FormData[i].valid = true;
            }
            else
            {
                FormData[i].valid = false;
            }
        }

        console.log(FormData[i].inputVal +": "+ FormData[i].valid);
        
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
}

function AlphaValidation(input)
{
    var alpha = /^[A-Za-z\s]+$/;

    if(alpha.test(input))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function AlphaNumVal(input)
{
    var alphaNum = /^[a-z0-9]+$/i;

    if(alphaNum.test(input))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function ZipValidation(input)
{
    var zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/; //checks either 5 digit zip or 5+4 digit zip

    if(zip.test(input))
    {
        return true;
    }
    else
    {
        return false;
    }
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
    fName = new formVar('alpha',false);
    lName = new formVar('alpha',false);
    address1 = new formVar('alphaNum',false);
    address2 = new formVar('alphaNum',true);
    city = new formVar('alpha',false);
    state = new formVar('alpha',false);
    zipCode = new formVar('zipCode',false);
    country = new formVar('alpha',false);
    
    FormData = [fName,lName,address1,address2,city,state,zipCode,country];
}