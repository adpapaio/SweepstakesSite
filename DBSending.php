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

if($_GET['itWorks'] == 'true')
{
    $fName = $_GET['fName'];
    $lName = $_GET['lName'];
    $sql = "INSERT INTO UserInfo (firstName, lastName)
    VALUES ($fName, $lName)";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>