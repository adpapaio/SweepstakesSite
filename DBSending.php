<?php
$servername = "localhost";
$username = "id6115033_tester";
$password = "butwhy";
$dbname = "id6115033_test";
$inputValid = false;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if($_GET['validated'] == 'true')
{
    $inputValid = false;
    $fName = $_GET['fName'];
    $lName = $_GET['lName'];
    $add1 = $_GET['add1'];
    $add2 = $_GET['add2'];
    $state = $_GET['state'];
    $city = $_GET['city'];
    $zip = $_GET['zip'];
    $country = $_GET['country'];

    if(preg_match('/^[A-Za-z\s]+$/',$fName) && preg_match('/^[A-Za-z\s]+$/',$lName) && preg_match('/^[A-Za-z\s]+$/',$city) && preg_match('/^[A-Za-z\s]+$/',$state) && preg_match('/^[A-Za-z\s]+$/',$country))
    {
        $inputValid = true;
    }
    
    if($inputValid && preg_match('/^[a-z0-9\s\.]+$/i', $add1) && preg_match('/^[a-zA-Z0-9\s\.]*$/', $add2))
    {
        $inputValid = true;
    }
    else
    {
        $inputValid = false;
    }

    if ($inputValid && preg_match('/(^\d{5}$)|(^\d{5}-\d{4}$)/', $zip))
    {
        $inputValid = true;
    }
    else
    {
        $inputValid = false;
    }

    if($inputValid)
    {
        $sql = "INSERT INTO UserInfo (firstName, lastName, address1, address2, city, `state`, zip, country, DateEntered)
        VALUES ('$fName', '$lName', '$add1','$add2','$city','$state','$zip','$country', CURRENT_TIMESTAMP())";

        if ($conn->query($sql) === TRUE)
        {
            echo "SUCCESS you have signed up for the sweepstakes";
        } else 
        {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    else
    {
        echo "Error in Server Validation, Please reload page.";
    }
}
$conn->close();
?>