<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$age = $_POST['age'];
$blood = $_POST['bloodgroup'];

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Registration Successful</title>
</head>
<body
style="font-family:Arial;text-align:center;">

<h1 style="color:red;">Registration Successful!</h1>

<p>Thank you <b><?php echo $name; ?></b>for Registration as a blood donor.</p>
<p>Email: <?php echo $email; ?></p>

<p>Phone: <?php echo $phone; ?></p>

<p>Date: <?php echo $date; ?></p>

<p>Age: <?php echo $age; ?></p>

<p>Bloodgroup: <?php echo $blood; ?></p>

<a href="index.html">Go Back to Home</a>
</body>
</html>
