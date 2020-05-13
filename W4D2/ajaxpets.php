<?php

if (isset($_GET['animal'])) {
	$animal = $_GET['animal'];
} else {
	$animal = "";
}	

$files = glob("https://caleb12s.github.io/W4D2/imgs/$animal*");

?>
<?php foreach ($files as $file) : ?>
	<img src="<?=$file?>" />
<?php endforeach ?>