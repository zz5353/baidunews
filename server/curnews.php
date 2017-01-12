<?php

header("Content-type:application/json;charset=utf-8");

require_once('db.php');
if ($link) {
	//删除新闻
	
	$newsid = $_GET['newsid'];
	mysqli_query($link,"SET NAMES 'utf8'");
	$sql = "SELECT * FROM `news` WHERE `id` = {$newsid} order by id desc";
	
	$result = mysqli_query($link,$sql);

	$senddata = array();
	while ($row = mysqli_fetch_assoc($result)) {

		array_push($senddata, array(
			'id'=>$row['id'],
			'newstitle'=>htmlspecialchars_decode($row['newstitle']),
			'newsimg'=>htmlspecialchars_decode($row['newsimg']),
			'newstime'=>htmlspecialchars_decode($row['newstime']),
			'newstype'=>htmlspecialchars_decode($row['newstype'])
			));	
	}
	echo json_encode($senddata);
	// echo json_encode(array('delete'=>'ok'));
}else{
	echo json_encode(array('链接信息'=>'失败'));
}
mysqli_close($link);
?>