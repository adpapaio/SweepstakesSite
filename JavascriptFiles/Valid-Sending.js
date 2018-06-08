//This script will validate the form info and then send to the server.


function Submit()
{
    window.location.href = "confirmationPage.html";
}

window.onload = function()
{
    document.getElementById('submit').addEventListener("click", Submit);
}