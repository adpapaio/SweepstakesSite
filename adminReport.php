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

echo "Refresh Page to see updated info!";
echo "<br>";
echo "<br>";
echo "<br>";

   $sql ="SELECT * 
   FROM UserInfo 
   ORDER BY DateEntered DESC";

echo "<table>";
   echo "<tr>";
   echo '<td align="center">'."<strong>First Name</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Last Name</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Address 1</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Address 2</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>City</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>State</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Zip Code</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Country</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo '<td align="center">'."<strong>Date</strong>".str_repeat('&nbsp;', 20)."</td>";
   echo "</tr>";
   $dbResults = $conn->query($sql);
   while($row = $dbResults->fetch_assoc())
   {
       echo "<tr>";
       echo '<td align="center">'.$row['FirstName'].str_repeat('&nbsp;', 20). "</td>";
       echo '<td align="center">'.$row['LastName'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['Address1'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['Address2'].str_repeat('&nbsp;', 15)."</td>";
       echo '<td align="center">'.$row['City'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['State'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['Zip'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['Country'].str_repeat('&nbsp;', 20)."</td>";
       echo '<td align="center">'.$row['DateEntered'].str_repeat('&nbsp;', 20)."</td>";
       
       echo "</tr>";
   }
   echo "</table>";

?>