<?php

$name =$_POST['name'];
$message = $_POST['message'];

?>

<!DOCTYPE html>
<html>
    <head>
        <tital>Message Sent</tital>
</head>
<body
style="font-family:Arial;text-align:center;">

<h2>Thank You!</h2>

<p> Dear<b><?php echo $name; ?></b>, your message has been received.</p>

<p>we will contact you soon.</p>

<a href="index.html">Return to Home</a>
</body>
</html>