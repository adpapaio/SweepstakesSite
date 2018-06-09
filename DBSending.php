<?php
$servername = "localhost";
$username = "id6115033_tester";
$password = "butwhy";
$dbname = "id6115033_test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if($_GET['validated'] == 'true')
{
    $fName = $_GET['fName'];
    $lName = $_GET['lName'];
    $add1 = $_GET['add1'];
    $add2 = $_GET['add2'];
    $state = $_GET['state'];
    $city = $_GET['city'];
    $zip = $_GET['zip'];
    $country = $_GET['country'];

    $sql = "INSERT INTO UserInfo (firstName, lastName, address1, address2, city, `state`, zip, country, DateEntered)
    VALUES ('$fName', '$lName', '$add1','$add2','$city','$state','$zip','$country', CURRENT_TIMESTAMP())";

    if ($conn->query($sql) === TRUE) {
        echo "SUCCESS you have signed up for the sweepstakes";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>