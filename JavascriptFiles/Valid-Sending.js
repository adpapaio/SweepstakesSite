//This script will validate the form info and then send to the server.

var formId;

function Submit()
{
   SendInfo('DBSending.php?itWorks=true');
   
    //window.location.href = "confirmationPage.html";
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
}