<?php
    // Create connection
    $con=mysqli_connect("localhost","","","test");
    
    // Check connection
    if (mysqli_connect_errno())
      {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }
    else
     MySQL connection "OK - connected to MySQL";
    
    // Run import SQL statement
    $import = mysqli_query($con,"LOAD DATA LOCAL INFILE 'C:\CompanyDetails.csv' INTO TABLE test.company FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'");
    
    // Close connection
    mysqli_close($con);
?>
