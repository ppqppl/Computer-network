function dfa(uid,gid,event){
	var url = "http://g.51cto.com/mingpian.php?uid="+uid+"&gid="+gid;
	postRequesttwo(url,event);
	return false;
}
function postRequesttwo(strURL,event){
	var xmlHttp;
	if(window.XMLHttpRequest){ 
		var xmlHttp = new XMLHttpRequest();
	}else if(window.ActiveXObject){ 
		var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlHttp.open('GET', strURL, true);
	xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlHttp.onreadystatechange = function(){
		if (xmlHttp.readyState == 4 ){
			updatepagetwo(xmlHttp.responseText,event);
		}
	}
	xmlHttp.send(null);
}
function getEvt(event){
	if (parseInt(navigator.appVersion.charAt(0))>=4){ 
		var isNN=(navigator.appName=='Netscape')?1:0; 
		var isIE=(navigator.appName.indexOf('Microsoft')!=-1)?1:0; 
	} 
	if(isIE)
		return document.documentElement.scrollTop;
	else
		return event.pageY;
}

function updatepagetwo(str,event){
	//document.getElementById("add_sys_type_div").style.top=(document.documentElement.scrollTop+100)+"px";
	document.getElementById("add_sys_type_div").innerHTML=str;		
	document.getElementById("add_sys_type_div").style.display="";
}


