$(document).ready(function(){
        $("#login").click(function(){
            console.log("In the function");
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', 'https://ec2-35-165-69-128.us-west-2.compute.amazonaws.com:8443/webtools/control/SOAPService/userLogin?WSDL', true);

            // build SOAP request
            var sr =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://ofbiz.apache.org/service/">'+
   '<soapenv:Header/>'+
   '<soapenv:Body>'+
      '<ser:userLogin>'+
         '<map-Map>'+
            '<ser:map-Entry>'+
               '<ser:map-Key>'+
                  '<ser:std-String value="userLoginId"/>'+
               '</ser:map-Key>'+
               '<ser:map-Value>'+
              '<ser:std-String value="admin"/>'+
               '</ser:map-Value>'+
            '</ser:map-Entry>'+
             '<ser:map-Entry>'+
               '<ser:map-Key>'+
                  '<ser:std-String value="login.username"/>'+
               '</ser:map-Key>'+
               '<ser:map-Value>'+
              '<ser:std-String value="admin"/>'+
               '</ser:map-Value>'+
            '</ser:map-Entry>'+
            '<ser:map-Entry>'+
               '<ser:map-Key>'+
                  '<ser:std-String value="login.password"/>'+
               '</ser:map-Key>'+
               '<ser:map-Value>'+
              '<ser:std-String value="ofbiz"/>'+
               '</ser:map-Value>'+
            '</ser:map-Entry>'+
         '</map-Map>'+
      '</ser:userLogin>'+
   '</soapenv:Body>'+
'</soapenv:Envelope>';

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        alert('done. use firebug/console to see network response');
                        window.location = "login-continue.html";
                    }
                }
            }
            // Send the POST request
            xmlhttp.setRequestHeader('Content-Type', 'text/xml');
            xmlhttp.send(sr);
            // send request
            // ...
        }
    }