<?php 
header('Access-Control-Allow-Origin: *'); 
// $client  = new SoapClient('https://ec2-35-165-69-128.us-west-2.compute.amazonaws.com:8443/webtools/control/SOAPService');

//     $params = array(
//         'login.username' => "admin",
//         'login.password' => "ofbiz"
//     );
//     $result = $client->createOrder($params);
//     var_dump($result);

$myXMLData =
"<?xml version='1.0' encoding='UTF-8'?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>";

$xml=simplexml_load_string($myXMLData) or die("Error: Cannot create object");
print_r($xml);
?>