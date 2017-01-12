<?php

header("Content-type:application/json;charset=utf-8");

require_once('db.php');
if ($link) {
	//插入新闻
	foreach ($_POST as $key => $value) {
		$_POST[$key] = addslashes(htmlspecialchars($value));
	}
	$newstitle = $_POST['newstitle'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newstype = $_POST['newstype'];
	$newsid = $_POST['newsid'];
	$sql ="UPDATE `news`SET`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newstype`='{$newstype}' WHERE `id`={$newsid}";
	mysqli_query($link,"SET NAMES 'utf8'");
	$result = mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}
?>