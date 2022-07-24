<?

//Block1
$user="dcvmail@protonmail.com";
$password="WP1hostgator";
$host="https://hostgator.com";
$database="ownmyata";
$table="users"

//Block2
    $name=$_POST['name_entered'];
    $email=$_POST['email_entered'];
    $phone=$_POST['phone_entered'];

//Block3
$connection = mysql_connect($host, $user, $password);
if(!$connection){
        die('Connection Failed  : '.mysql_error());
    }
mysql_select_db($database, $connection);

//Block4
$username_table=mysql_query("SELECT name FROM $table WHERE name= '$name'" ) 
or die("SELECT Error: ".mysql_error()); 


//Block 5
mysql_query("INSERT INTO $table (column1, column2, column3)
VALUES (value1, value2, value 3)");

//Block 6
echo 'You have been added.';

//Block 7
mysql_close($connection);

?>