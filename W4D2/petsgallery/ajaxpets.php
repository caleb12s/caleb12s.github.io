<?php

if (isset($_GET['animal'])) {
	$animal = $_GET['animal'];
} else {
	$animal = "";
}	

$files = glob("imgs/$animal*");

?>
<?php foreach ($files as $file) : ?>
	<img src="<?=$file?>" />
<?php endforeach ?>