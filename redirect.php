<?php
    header("Status: 301 Moved Permanently");
	header("Location:https://webhooks.mongodb-stitch.com/api/client/v2.0/app/stitch-badges-dkhza/service/badgeservice/incoming_webhook/badge?". $_SERVER['QUERY_STRING']);
	exit;
?>