/**************************************************************
KindEditor
WYSIWYG HTML Editor for Internet
Copyright (c) 2006 kindsoft.net

Author: Roddy (luolonghao@gmail.com)
Created: 2006/07/20
Last Modified: 2006/11/09
**************************************************************/
var KE_VERSION = "2.5";
var KE_EDITOR_TYPE = "full"; //full or simple
var KE_SAFE_MODE = false; // true or false
var KE_UPLOAD_MODE = true; // true or false
var KE_FONT_FAMILY = "SimSun";
var KE_WIDTH = "700px";
var KE_HEIGHT = "400px";
var KE_SITE_DOMAIN = "";
var KE_SKIN_PATH  = "/editor/skins/default/";
var KE_ICON_PATH = "/editor/icons/";
var KE_IMAGE_ATTACH_PATH = "/editor/attachment/";
var KE_IMAGE_UPLOAD_CGI = "http://g.51cto.com/editor/upload.php";
var KE_CSS_PATH = "/editor/common.css";
var KE_MENU_BORDER_COLOR = '#AAAAAA';
var KE_MENU_BG_COLOR = '#EFEFEF';
var KE_MENU_TEXT_COLOR = '#222222';
var KE_MENU_SELECTED_COLOR = '#CCCCCC';
var KE_TOOLBAR_BORDER_COLOR = '#DDDDDD';
var KE_TOOLBAR_BG_COLOR = '#EFEFEF';
var KE_FORM_BORDER_COLOR = '#DDDDDD';
var KE_FORM_BG_COLOR = '#FFFFFF';
var KE_BUTTON_COLOR = '#AAAAAA';
var CodeDivBgColor = "#eeeeee";
var CodeDivFontColor = "#000000";
var KE_LANG = {
	INPUT_URL		: "请输入正确的URL地址。",
	INPUT_CODE		: "请输入代码。",
	SELECT_IMAGE	: "请选择图片。",
	INVALID_IMAGE	: "只能选择GIF,JPG,PNG,BMP格式的图片，请重新选择。",
	INVALID_FLASH	: "只能选择SWF格式的文件，请重新选择。",
	INVALID_MEDIA	: "只能选择MP3,WAV,WMA,WMV,MID,AVI,MPG,ASF格式的文件，请重新选择。",
	INVALID_REAL	: "只能选择RM,RMVB格式的文件，请重新选择。",
	INVALID_WIDTH	: "宽度不是数字，请重新输入。",
	INVALID_HEIGHT	: "高度不是数字，请重新输入。",
	INVALID_BORDER	: "边框不是数字，请重新输入。",
	INVALID_HSPACE	: "横隔不是数字，请重新输入。",
	INVALID_VSPACE	: "竖隔不是数字，请重新输入。",
	INPUT_CONTENT	: "请输入内容",
	TITLE			: "描述",
	WIDTH			: "宽",
	HEIGHT			: "高",
	BORDER			: "边",
	ALIGN			: "对齐方式",
	HSPACE			: "横隔",
	VSPACE			: "竖隔",
	CONFIRM			: "确定",
	CANCEL			: "取消",
	PREVIEW			: "预览",
	LISTENING		: "试听",
	LOCAL			: "本地",
	REMOTE			: "远程",
	NEW_WINDOW		: "新窗口",
	CURRENT_WINDOW	: "当前窗口",
	TARGET			: "目标",
	ABOUT			: "访问技术支持网站",
	SUBJECT			: "标题",
	PROM			: "语言",
	CODE			: "代码",
	INSERT_CODE		: "插入代码"
}
var KE_FONT_NAME = Array(
	Array('SimSun', '宋体'), 
	Array('SimHei', '黑体'), 
	Array('FangSong_GB2312', '仿宋体'), 
	Array('KaiTi_GB2312', '楷体'), 
	Array('NSimSun', '新宋体'), 
	Array('Arial', 'Arial'), 
	Array('Arial Black', 'Arial Black'), 
	Array('Times New Roman', 'Times New Roman'), 
	Array('Courier New', 'Courier New'), 
	Array('Tahoma', 'Tahoma'), 
	Array('Verdana', 'Verdana'), 
	Array('GulimChe', 'GulimChe'), 
	Array('MS Gothic', 'MS Gothic') 
);
var KE_SPECIAL_CHARACTER = Array(
	'§','№','☆','★','○','●','◎','◇','◆','□','℃','‰','■','△','▲','※',
	'→','←','↑','↓','〓','¤','°','＃','＆','＠','＼','︿','＿','￣','―','α',
	'β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ',
	'σ','τ','υ','φ','χ','ψ','ω','≈','≡','≠','＝','≤','≥','＜','＞','≮',
	'≯','∷','±','＋','－','×','÷','／','∫','∮','∝','∞','∧','∨','∑','∏',
	'∪','∩','∈','∵','∴','⊥','∥','∠','⌒','⊙','≌','∽','〖','〗',
	'【','】','（','）','［','］'
);
var KE_TOP_TOOLBAR_ICON = Array(
	Array('KE_SOURCE', 'source.gif', '视图转换'),
	Array('KE_FONTNAME', 'font.gif', '字体'),
	Array('KE_FONTSIZE', 'fontsize.gif', '文字大小'),
	Array('KE_TEXTCOLOR', 'textcolor.gif', '文字颜色'),
	Array('KE_BGCOLOR', 'bgcolor.gif', '文字背景'),
	Array('KE_BOLD', 'bold.gif', '粗体'),
	Array('KE_ITALIC', 'italic.gif', '斜体'),
	Array('KE_UNDERLINE', 'underline.gif', '下划线'),
	Array('KE_JUSTIFYLEFT', 'justifyleft.gif', '左对齐'),
	Array('KE_JUSTIFYCENTER', 'justifycenter.gif', '居中'),
	Array('KE_JUSTIFYRIGHT', 'justifyright.gif', '右对齐'),
	Array('KE_LAYER', 'layer.gif', '层'),
	Array('KE_HR', 'hr.gif', '横线'),
	Array('KE_IMAGE', 'image.gif', '图片'),
	Array('KE_LINK', 'link.gif', '创建超级连接')
);
var KE_BOTTOM_TOOLBAR_ICON = Array();
var KE_SIMPLE_TOOLBAR_ICON = Array(
	
	Array('KE_FONTNAME', 'font.gif', '字体'),
	Array('KE_FONTSIZE', 'fontsize.gif', '文字大小'),
	Array('KE_TEXTCOLOR', 'textcolor.gif', '文字颜色'),
	Array('KE_BGCOLOR', 'bgcolor.gif', '文字背景'),
	Array('KE_BOLD', 'bold.gif', '粗体'),
	Array('KE_ITALIC', 'italic.gif', '斜体'),
	Array('KE_UNDERLINE', 'underline.gif', '下划线'),
	Array('KE_JUSTIFYLEFT', 'justifyleft.gif', '左对齐'),
	Array('KE_JUSTIFYCENTER', 'justifycenter.gif', '居中'),
	Array('KE_JUSTIFYRIGHT', 'justifyright.gif', '右对齐'),
	Array('KE_LAYER', 'layer.gif', '层'),
	Array('KE_HR', 'hr.gif', '横线'),
	Array('KE_IMAGE', 'image.gif', '图片'),
	Array('KE_LINK', 'link.gif', '创建超级连接')
);
var KE_TITLE_TABLE = Array(
	Array('H1', KE_LANG['SUBJECT'] + ' 1'), 
	Array('H2', KE_LANG['SUBJECT'] + ' 2'), 
	Array('H3', KE_LANG['SUBJECT'] + ' 3'), 
	Array('H4', KE_LANG['SUBJECT'] + ' 4'), 
	Array('H5', KE_LANG['SUBJECT'] + ' 5'), 
	Array('H6', KE_LANG['SUBJECT'] + ' 6')
);
var KE_ZOOM_TABLE = Array('250%', '200%', '150%', '120%', '100%', '80%', '50%');
var KE_FONT_SIZE = Array(
	Array(1,'8pt'), 
	Array(2,'10pt'), 
	Array(3,'12pt'), 
	Array(4,'14pt'), 
	Array(5,'18pt'), 
	Array(6,'24pt'), 
	Array(7,'36pt')
);
var KE_POPUP_MENU_TABLE = Array(
	"KE_ZOOM", "KE_TITLE", "KE_FONTNAME", "KE_FONTSIZE", "KE_TEXTCOLOR", "KE_BGCOLOR", 
	"KE_LAYER", "KE_TABLE", "KE_HR", "KE_ICON", "KE_SPECIALCHAR", "KE_ABOUT", 
	"KE_IMAGE", "KE_FLASH", "KE_MEDIA", "KE_REAL", "KE_LINK", "KE_DATE"
);
var KE_COLOR_TABLE = Array(
	"#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF", "#F5F5F5", "#DCDCDC", "#FFFAFA",
	"#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#000000", "#2F4F4F", "#708090", "#778899", "#4682B4",
	"#4169E1", "#6495ED", "#B0C4DE", "#7B68EE", "#6A5ACD", "#483D8B", "#191970", "#000080", "#00008B", "#0000CD",
	"#1E90FF", "#00BFFF", "#87CEFA", "#87CEEB", "#ADD8E6", "#B0E0E6", "#F0FFFF", "#E0FFFF", "#AFEEEE", "#00CED1",
	"#5F9EA0", "#48D1CC", "#00FFFF", "#40E0D0", "#20B2AA", "#008B8B", "#008080", "#7FFFD4", "#66CDAA", "#8FBC8F",
	"#3CB371", "#2E8B57", "#006400", "#008000", "#228B22", "#32CD32", "#00FF00", "#7FFF00", "#7CFC00", "#ADFF2F",
	"#98FB98", "#90EE90", "#00FF7F", "#00FA9A", "#556B2F", "#6B8E23", "#808000", "#BDB76B", "#B8860B", "#DAA520",
	"#FFD700", "#F0E68C", "#EEE8AA", "#FFEBCD", "#FFE4B5", "#F5DEB3", "#FFDEAD", "#DEB887", "#D2B48C", "#BC8F8F",
	"#A0522D", "#8B4513", "#D2691E", "#CD853F", "#F4A460", "#8B0000", "#800000", "#A52A2A", "#B22222", "#CD5C5C",
	"#F08080", "#FA8072", "#E9967A", "#FFA07A", "#FF7F50", "#FF6347", "#FF8C00", "#FFA500", "#FF4500", "#DC143C",
	"#FF0000", "#FF1493", "#FF00FF", "#FF69B4", "#FFB6C1", "#FFC0CB", "#DB7093", "#C71585", "#800080", "#8B008B",
	"#9370DB", "#8A2BE2", "#4B0082", "#9400D3", "#9932CC", "#BA55D3", "#DA70D6", "#EE82EE", "#DDA0DD", "#D8BFD8",
	"#E6E6FA", "#F8F8FF", "#F0F8FF", "#F5FFFA", "#F0FFF0", "#FAFAD2", "#FFFACD", "#FFF8DC", "#FFFFE0", "#FFFFF0",
	"#FFFAF0", "#FAF0E6", "#FDF5E6", "#FAEBD7", "#FFE4C4", "#FFDAB9", "#FFEFD5", "#FFF5EE", "#FFF0F5", "#FFE4E1"
);
var KE_IMAGE_ALIGN_TABLE = Array(
	"baseline", "top", "middle", "bottom", "texttop", "absmiddle", "absbottom", "left", "right"
);
var KE_OBJ_NAME;
var KE_SELECTION;
var KE_RANGE;
var KE_RANGE_TEXT;
var KE_EDITFORM_DOCUMENT;
var KE_IMAGE_DOCUMENT;
var KE_FLASH_DOCUMENT;
var KE_MEDIA_DOCUMENT;
var KE_REAL_DOCUMENT;
var KE_LINK_DOCUMENT;
var KE_DATE_DOCUMENT;
var KE_BROWSER;
var KE_TOOLBAR_ICON;
function KindGetBrowser()
{
	var browser = '';
	var agentInfo = navigator.userAgent.toLowerCase();
	if (agentInfo.indexOf("msie") > -1) {
		var re = new RegExp("msie\\s?([\\d\\.]+)","ig");
		var arr = re.exec(agentInfo);
		if (parseInt(RegExp.$1) >= 5.5) {
			browser = 'IE';
		}
	} else if (agentInfo.indexOf("firefox") > -1) {
		browser = 'FF';
	} else if (agentInfo.indexOf("netscape") > -1) {
		var temp1 = agentInfo.split(' ');
		var temp2 = temp1[temp1.length-1].split('/');
		if (parseInt(temp2[1]) >= 7) {
			browser = 'NS';
		}
	} else if (agentInfo.indexOf("gecko") > -1) {
		browser = 'ML';
	} else if (agentInfo.indexOf("opera") > -1) {
		var temp1 = agentInfo.split(' ');
		var temp2 = temp1[0].split('/');
		if (parseInt(temp2[1]) >= 9) {
			browser = 'OPERA';
		}
	}
	return browser;
}
function KindGetFileName(file, separator)
{
	var temp = file.split(separator);
	var len = temp.length;
	var fileName = temp[len-1];
	return fileName;
}
function KindGetFileExt(fileName)
{
	var temp = fileName.split(".");
	var len = temp.length;
	var fileExt = temp[len-1].toLowerCase();
	return fileExt;
}
function KindCheckImageFileType(file, separator)
{
	if (separator == "/" && file.match(/http:\/\/.{3,}/) == null) {
		alert(KE_LANG['INPUT_URL']);
		return false;
	}
	var fileName = KindGetFileName(file, separator);
	var fileExt = KindGetFileExt(fileName);
	if (fileExt != 'gif' && fileExt != 'jpg' && fileExt != 'png' && fileExt != 'bmp') {
		alert(KE_LANG['INVALID_IMAGE']);
		return false;
	}
	return true;
}
function KindCheckFlashFileType(file, separator)
{
	if (file.match(/http:\/\/.{3,}/) == null) {
		alert(KE_LANG['INPUT_URL']);
		return false;
	}
	var fileName = KindGetFileName(file, "/");
	var fileExt = KindGetFileExt(fileName);
	if (fileExt != 'swf') {
		alert(KE_LANG['INVALID_FLASH']);
		return false;
	}
	return true;
}
function KindCheckMediaFileType(cmd, file, separator)
{
	if (file.match(/http:\/\/.{3,}/) == null) {
		alert(KE_LANG['INPUT_URL']);
		return false;
	}
	var fileName = KindGetFileName(file, "/");
	var fileExt = KindGetFileExt(fileName);
	if (cmd == 'KE_REAL') {
		if (fileExt != 'rm' && fileExt != 'rmvb') {
			alert(KE_LANG['INVALID_REAL']);
			return false;
		}
	} else {
		if (fileExt != 'mp3' && fileExt != 'wav' && fileExt != 'wma' && fileExt != 'wmv' && fileExt != 'mid' && fileExt != 'avi' && fileExt != 'mpg' && fileExt != 'asf') {
			alert(KE_LANG['INVALID_MEDIA']);
			return false;
		}
	}
	return true;
}
function KindHtmlToXhtml(str) 
{
	str = str.replace(/<p(\s+)(.*?>)/gi, "<div$1$2");
	str = str.replace(/<p>/gi, "<div>");
	str = str.replace(/<\/p>/gi, "</div>");
	str = str.replace(/<br.*?>/gi, "<br />");
	str = str.replace(/(<hr\s+[^>]*[^\/])(>)/gi, "$1 />");
	str = str.replace(/(<img\s+[^>]*[^\/])(>)/gi, "$1 />");
	str = str.replace(/(<\w+)(.*?>)/gi, function ($0,$1,$2) {
						return($1.toLowerCase() + KindConvertAttribute($2));
					}
				);
	str = str.replace(/(<\/\w+>)/gi, function ($0,$1) {
						return($1.toLowerCase());
					}
				);
	str = KindTrim(str);
	return str;
}
function KindConvertAttribute(str)
{
	str = KindConvertAttributeChild(str, 'style', '[^\"\'>]+');
	str = KindConvertAttributeChild(str, 'href', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'src', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'color', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'alt', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'title', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'type', '[^\"\'\\s>]+');
//	str = KindConvertAttributeChild(str, 'face', '[^\"\'\\s>]+');
	str = KindConvertAttributeChild(str, 'id', '\\w+');
	str = KindConvertAttributeChild(str, 'name', '\\w+');
	str = KindConvertAttributeChild(str, 'dir', '\\w+');
	str = KindConvertAttributeChild(str, 'target', '\\w+');
	str = KindConvertAttributeChild(str, 'align', '\\w+');
	str = KindConvertAttributeChild(str, 'width', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'height', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'border', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'hspace', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'vspace', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'size', '[\\w%]+');
	str = KindConvertAttributeChild(str, 'cellspacing', '\\d+');
	str = KindConvertAttributeChild(str, 'cellpadding', '\\d+');
	if (KE_SAFE_MODE == true) {
		str = KindClearAttributeScriptTag(str);
	}
	return str;
}
function KindConvertAttributeChild(str, attName, regStr)
{
	var re = new RegExp("\\s("+attName+"=)[\"']?("+regStr+")[\"']?", "ig");
	var reUrl = new RegExp("http://" + KE_SITE_DOMAIN + "(/.*)", "i");
	str = str.replace(re, function ($0,$1,$2) {
						var val = $2;
						if (val.match(reUrl) != null) {
							val = val.replace(reUrl, "$1");
						}
						if (KE_BROWSER == 'IE' && attName.match(/style/i) != null) {
							return(" " + $1.toLowerCase() + "\"" + val.toLowerCase() + "\"");
						} else {
							return(" " + $1.toLowerCase() + "\"" + val + "\"");
						}
					}
				);
	return str;
}
function KindClearAttributeScriptTag(str)
{
	var re = new RegExp("(\\son[a-z]+=)[\"']?[^>]*?[^\\\\\>][\"']?([\\s>])","ig");
	str = str.replace(re, function ($0,$1,$2) {
						return($1.toLowerCase() + "\"\"" + $2);
					}
				);
	return str;
}
function KindClearScriptTag(str)
{
	if (KE_SAFE_MODE == false) {
		return str;
	}
	str = str.replace(/<(script.*?)>/gi, "[$1]");
	str = str.replace(/<\/script>/gi, "[/script]");
	return str;
}
function KindTrim(str)
{
	str = str.replace(/^\s+|\s+$/g, "");
	str = str.replace(/[\r\n]+/g, "\r\n");
	return str;
}
function KindHtmlentities(str)
{
	str = str.replace(/&/g,'&amp;');
	str = str.replace(/</g,'&lt;');
	str = str.replace(/>/g,'&gt;');
	str = str.replace(/"/g,'&quot;');
	return str;
}
function KindGetTop(id)
{
	var top = 28;
	var tmp = '';
	var obj = document.getElementById(id);
	while (eval("obj" + tmp).tagName != "BODY") {
		tmp += ".offsetParent";
		top += eval("obj" + tmp).offsetTop;
	}
	return top;
}
function KindGetLeft(id)
{
	var left = 2;
	var tmp = '';
	var obj = document.getElementById(id);
	while (eval("obj" + tmp).tagName != "BODY") {
		tmp += ".offsetParent";
		left += eval("obj" + tmp).offsetLeft;
	}
	return left;
}
function KindDisplayMenu(cmd)
{
	KindEditorForm.focus();
	KindSelection();
	KindDisableMenu();
	var top, left;
	top = KindGetTop(cmd);
	left = KindGetLeft(cmd);
	if (cmd == 'KE_ABOUT') {
		left -= 200;
	} else if (cmd == 'KE_LINK') {
		left -= 220;
	} else if (cmd == 'KE_DATE') {
		left -= 20;
	} else if (cmd == 'KE_IMAGE') {
		left -= 220;
	}
	document.getElementById('POPUP_'+cmd).style.top =  top.toString(10) + 'px';
	document.getElementById('POPUP_'+cmd).style.left = left.toString(10) + 'px';
	document.getElementById('POPUP_'+cmd).style.display = 'block';
}
function KindDisableMenu()
{
	for (i = 0; i < KE_POPUP_MENU_TABLE.length; i++) {
		document.getElementById('POPUP_'+KE_POPUP_MENU_TABLE[i]).style.display = 'none';
	}
}
function KindReloadIframe()
{
	var str = '';
	str += KindPopupMenu('KE_IMAGE');
	str += KindPopupMenu('KE_FLASH');
	str += KindPopupMenu('KE_MEDIA');
	str += KindPopupMenu('KE_REAL');
	document.getElementById('InsertIframe').innerHTML = str;
	KindDrawIframe('KE_IMAGE');
	KindDrawIframe('KE_FLASH');
	KindDrawIframe('KE_MEDIA');
	KindDrawIframe('KE_REAL');
}
function KindGetMenuCommonStyle()
{
	var str = 'position:absolute;top:1px;left:1px;font-size:12px;color:'+KE_MENU_TEXT_COLOR+
			';background-color:'+KE_MENU_BG_COLOR+';border:solid 1px '+KE_MENU_BORDER_COLOR+';z-index:1;display:none;';
	return str;
}
function KindGetCommonMenu(cmd, content)
{
	var str = '';
	str += '<div id="POPUP_'+cmd+'" style="'+KindGetMenuCommonStyle()+'">';
	str += content;
	str += '</div>';
	return str;
}
function KindCreateColorTable(cmd, eventStr)
{
	var str = '';
	str += '<table cellpadding="0" cellspacing="2" border="0">';
	for (i = 0; i < KE_COLOR_TABLE.length; i++) {
		if (i == 0 || (i >= 10 && i%10 == 0)) {
			str += '<tr>';
		}
		str += '<td style="width:12px;height:12px;border:1px solid #AAAAAA;font-size:1px;cursor:pointer;background-color:' +
		KE_COLOR_TABLE[i] + ';" onmouseover="javascript:this.style.borderColor=\'#000000\';' + ((eventStr) ? eventStr : '') + '" ' +
		'onmouseout="javascript:this.style.borderColor=\'#AAAAAA\';" ' + 
		'onclick="javascript:KindExecute(\''+cmd+'_END\', \'' + KE_COLOR_TABLE[i] + '\');">&nbsp;</td>';
		if (i >= 9 && i%(i-1) == 0) {
			str += '</tr>';
		}
	}
	str += '</table>';
	return str;
}
function KindDrawColorTable(cmd)
{
	var str = '';
	str += '<div id="POPUP_'+cmd+'" style="width:160px;padding:2px;'+KindGetMenuCommonStyle()+'">';
	str += KindCreateColorTable(cmd);
	str += '</div>';
	return str;
}
function KindDrawMedia(cmd)
{
	var str = '';
	str += '<table cellpadding="0" cellspacing="0" style="width:100%;font-size:12px;">' + 
		'<tr><td colspan="2"><table border="0"><tr><td id="'+cmd+'preview" style="width:240px;height:240px;border:1px solid #AAAAAA;background-color:#FFFFFF;" align="center" valign="middle">&nbsp;</td></tr></table></td></tr>' +  	
		'<tr><td style="width:40px;padding:5px;">'+KE_LANG['REMOTE']+'</td>' +
		'<td style="width:210px;padding-bottom:5px;"><input type="text" id="'+cmd+'link" value="http://" style="width:190px;border:1px solid #555555;" /></td></tr>' +
		'<tr><td colspan="2" style="margin:5px;padding-bottom:5px;" align="center">' +
		'<input type="button" name="button" value="'+KE_LANG['LISTENING']+'" onclick="javascript:parent.KindMediaPreview(\''+cmd+'\');" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
		'<input type="submit" name="button" id="'+cmd+'submitButton" value="'+KE_LANG['CONFIRM']+'" onclick="javascript:parent.KindDrawMediaEnd(\''+cmd+'\');" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
		'<input type="button" name="button" value="'+KE_LANG['CANCEL']+'" onclick="javascript:parent.KindDisableMenu();parent.KindReloadIframe();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /></td></tr>' + 
		'</table>';
	return str;
}
function KindPopupMenu(cmd)
{
	switch (cmd)
	{
		case 'KE_ZOOM':
			var str = '';
			for (i = 0; i < KE_ZOOM_TABLE.length; i++) {
				str += '<div style="padding:2px;width:120px;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_ZOOM_END\', \'' + KE_ZOOM_TABLE[i] + '\');" ' + 
				'onmouseover="javascript:this.style.backgroundColor=\''+KE_MENU_SELECTED_COLOR+'\';" ' +
				'onmouseout="javascript:this.style.backgroundColor=\''+KE_MENU_BG_COLOR+'\';">' + 
				KE_ZOOM_TABLE[i] + '</div>';
			}
			str = KindGetCommonMenu('KE_ZOOM', str);
			return str;
			break;
		case 'KE_TITLE':
			var str = '';
			for (i = 0; i < KE_TITLE_TABLE.length; i++) {
				str += '<div style="width:140px;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_TITLE_END\', \'' + KE_TITLE_TABLE[i][0] + '\');" ' + 
				'onmouseover="javascript:this.style.backgroundColor=\''+KE_MENU_SELECTED_COLOR+'\';" ' +
				'onmouseout="javascript:this.style.backgroundColor=\''+KE_MENU_BG_COLOR+'\';"><' + KE_TITLE_TABLE[i][0] + ' style="margin:2px;">' + 
				KE_TITLE_TABLE[i][1] + '</' + KE_TITLE_TABLE[i][0] + '></div>';
			}
			str = KindGetCommonMenu('KE_TITLE', str);
			return str;
			break;
		case 'KE_FONTNAME':
			var str = '';
			for (i = 0; i < KE_FONT_NAME.length; i++) {
				str += '<div style="font-family:' + KE_FONT_NAME[i][0] + 
				';padding:2px;width:160px;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_FONTNAME_END\', \'' + KE_FONT_NAME[i][0] + '\');" ' + 
				'onmouseover="javascript:this.style.backgroundColor=\''+KE_MENU_SELECTED_COLOR+'\';" ' +
				'onmouseout="javascript:this.style.backgroundColor=\''+KE_MENU_BG_COLOR+'\';">' + 
				KE_FONT_NAME[i][1] + '</div>';
			}
			str = KindGetCommonMenu('KE_FONTNAME', str);
			return str;
			break;
		case 'KE_FONTSIZE':
			var str = '';
			for (i = 0; i < KE_FONT_SIZE.length; i++) {
				str += '<div style="font-size:' + KE_FONT_SIZE[i][1] + 
				';padding:2px;width:120px;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_FONTSIZE_END\', \'' + KE_FONT_SIZE[i][0] + '\');" ' + 
				'onmouseover="javascript:this.style.backgroundColor=\''+KE_MENU_SELECTED_COLOR+'\';" ' +
				'onmouseout="javascript:this.style.backgroundColor=\''+KE_MENU_BG_COLOR+'\';">' + 
				KE_FONT_SIZE[i][1] + '</div>';
			}
			str = KindGetCommonMenu('KE_FONTSIZE', str);
			return str;
			break;
		case 'KE_TEXTCOLOR':
			var str = '';
			str = KindDrawColorTable('KE_TEXTCOLOR');
			return str;
			break;
		case 'KE_BGCOLOR':
			var str = '';
			str = KindDrawColorTable('KE_BGCOLOR');
			return str;
			break;
		case 'KE_HR':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:160px;'+KindGetMenuCommonStyle()+'">';
			str += '<div id="hrPreview" style="margin:10px 2px 10px 2px;height:1px;border:0;font-size:0;background-color:#FFFFFF;"></div>';
			str += KindCreateColorTable(cmd, 'document.getElementById(\'hrPreview\').style.backgroundColor = this.style.backgroundColor;');
			str += '</div>';
			return str;
			break;
		case 'KE_LAYER':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:160px;'+KindGetMenuCommonStyle()+'">';
			str += '<div id="divPreview" style="margin:5px 2px 5px 2px;height:20px;border:1px solid #AAAAAA;font-size:1px;background-color:#FFFFFF;"></div>';
			str += KindCreateColorTable(cmd, 'document.getElementById(\'divPreview\').style.backgroundColor = this.style.backgroundColor;');
			str += '</div>';
			return str;
			break;
		case 'KE_ICON':
			var str = '';
			var iconNum = 20;
			str += '<table id="POPUP_'+cmd+'" cellpadding="0" cellspacing="2" style="'+KindGetMenuCommonStyle()+'">';
			for (i = 0; i < iconNum; i++) {
				if (i == 0 || (i >= 6 && i%6 == 0)) {
					str += '<tr>';
				}
				var num;
				if ((i+1).toString(10).length < 2) {
					num = '0' + (i+1);
				} else {
					num = (i+1).toString(10);
				}
				var iconUrl = KE_ICON_PATH + 'etc_' + num + '.gif';
				str += '<td style="padding:2px;border:0;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_ICON_END\', \'' + iconUrl + '\');">' +
				'<img src="' + iconUrl + '" style="border:1px solid #EEEEEE;" onmouseover="javascript:this.style.borderColor=\'#AAAAAA\';" ' +
				'onmouseout="javascript:this.style.borderColor=\'#EEEEEE\';">' + '</td>';
				if (i >= 5 && i%(i-1) == 0) {
					str += '</tr>';
				}
			}
			str += '</table>';
			return str;
			break;
		case 'KE_SPECIALCHAR':
			var str = '';
			str += '<table id="POPUP_'+cmd+'" cellpadding="0" cellspacing="2" style="'+KindGetMenuCommonStyle()+'">';
			for (i = 0; i < KE_SPECIAL_CHARACTER.length; i++) {
				if (i == 0 || (i >= 10 && i%10 == 0)) {
					str += '<tr>';
				}
				str += '<td style="padding:2px;border:1px solid #AAAAAA;cursor:pointer;" ' + 
				'onclick="javascript:KindExecute(\'KE_SPECIALCHAR_END\', \'' + KE_SPECIAL_CHARACTER[i] + '\');" ' +
				'onmouseover="javascript:this.style.borderColor=\'#000000\';" ' +
				'onmouseout="javascript:this.style.borderColor=\'#AAAAAA\';">' + KE_SPECIAL_CHARACTER[i] + '</td>';
				if (i >= 9 && i%(i-1) == 0) {
					str += '</tr>';
				}
			}
			str += '</table>';
			return str;
			break;
		case 'KE_TABLE':
			var str = '';
			var num = 10;
			str += '<table id="POPUP_'+cmd+'" cellpadding="0" cellspacing="0" style="'+KindGetMenuCommonStyle()+'">';
			for (i = 1; i <= num; i++) {
				str += '<tr>';
				for (j = 1; j <= num; j++) {
					var value = i.toString(10) + ',' + j.toString(10);
					str += '<td id="kindTableTd' + i.toString(10) + '_' + j.toString(10) + 
					'" style="width:15px;height:15px;background-color:#FFFFFF;border:1px solid #DDDDDD;cursor:pointer;" ' + 
					'onclick="javascript:KindExecute(\'KE_TABLE_END\', \'' + value + '\');" ' +
					'onmouseover="javascript:KindDrawTableSelected(\''+i.toString(10)+'\', \''+j.toString(10)+'\');" ' + 
					'onmouseout="javascript:;">&nbsp;</td>';
				}
				str += '</tr>';
			}
			str += '<tr><td colspan="10" id="tableLocation" style="text-align:center;height:20px;"></td></tr>';
			str += '</table>';
			return str;
			break;
		case 'KE_IMAGE':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:250px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindImageIframe" id="KindImageIframe" frameborder="0" style="width:250px;height:390px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_FLASH':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:250px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindFlashIframe" id="KindFlashIframe" frameborder="0" style="width:250px;height:300px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_MEDIA':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:250px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindMediaIframe" id="KindMediaIframe" frameborder="0" style="width:250px;height:300px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_REAL':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:250px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindRealIframe" id="KindRealIframe" frameborder="0" style="width:250px;height:300px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_LINK':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:250px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindLinkIframe" id="KindLinkIframe" frameborder="0" style="width:250px;height:85px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_DATE':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:400px;'+KindGetMenuCommonStyle()+'">';
			str += '<iframe name="KindDateIframe" id="KindDateIframe" frameborder="0" style="width:400px;height:380px;padding:0;margin:0;border:0;">';
			str += '</iframe></div>';
			return str;
			break;
		case 'KE_ABOUT':
			var str = '';
			str += '<div id="POPUP_'+cmd+'" style="width:230px;'+KindGetMenuCommonStyle()+';padding:5px;">';
			str += '<span style="margin-right:10px;">KindEditor ' + KE_VERSION + '</span>' + 
				'<a href="http://www.kindsoft.net/" target="_blank" style="color:#4169e1;" onclick="javascript:KindDisableMenu();">'+KE_LANG['ABOUT']+'</a><br />';
			str += '</div>';
			return str;
			break;
		default: 
			break;
	}
}
function KindDrawIframe(cmd)
{
	if (KE_BROWSER == 'IE') {
		KE_IMAGE_DOCUMENT = document.frames("KindImageIframe").document;
		KE_FLASH_DOCUMENT = document.frames("KindFlashIframe").document;
		KE_MEDIA_DOCUMENT = document.frames("KindMediaIframe").document;
		KE_REAL_DOCUMENT = document.frames("KindRealIframe").document;
		KE_LINK_DOCUMENT = document.frames("KindLinkIframe").document;
		KE_DATE_DOCUMENT = document.frames("KindDateIframe").document;
	} else {
		KE_IMAGE_DOCUMENT = document.getElementById('KindImageIframe').contentDocument;
		KE_FLASH_DOCUMENT = document.getElementById('KindFlashIframe').contentDocument;
		KE_MEDIA_DOCUMENT = document.getElementById('KindMediaIframe').contentDocument;
		KE_REAL_DOCUMENT = document.getElementById('KindRealIframe').contentDocument;
		KE_LINK_DOCUMENT = document.getElementById('KindLinkIframe').contentDocument;
		KE_DATE_DOCUMENT = document.getElementById('KindDateIframe').contentDocument;
	}
	switch (cmd)
	{
		case 'KE_IMAGE':
			var str = '';
			str += '<div align="center">' +
				'<form name="uploadForm" style="margin:0;padding:0;" method="post" enctype="multipart/form-data" ' +
				'action="' + KE_IMAGE_UPLOAD_CGI + '" onsubmit="javascript:if(parent.KindDrawImageEnd()==false){return false;};">' +
				'<input type="hidden" name="fileName" id="fileName" value="" />' + 
				'<table cellpadding="0" cellspacing="0" style="width:100%;font-size:12px;">' + 
				'<tr><td colspan="2"><table border="0" style="margin-bottom:3px;"><tr><td id="imgPreview" style="width:230px;height:226px;border:1px solid #AAAAAA;background-color:#FFFFFF;" align="center" valign="middle">&nbsp;</td></tr></table></td></tr>' +  	
				'<tr><td style="width:50px;padding-left:5px;">';
			if (KE_UPLOAD_MODE == true) {
				str += '<select id="imageType" onchange="javascript:parent.KindImageType(this.value);document.getElementById(\''+cmd+'submitButton\').focus();"><option value="1" selected="selected">'+KE_LANG['LOCAL']+'</option><option value="2">'+KE_LANG['REMOTE']+'</option></select>';
			} else {
				str += KE_LANG['REMOTE'];
			}
			str += '</td><td style="width:200px;padding-bottom:3px;">';
			if (KE_UPLOAD_MODE == true) {
				str += '<input type="text" id="imgLink" value="http://" maxlength="255" style="width:95%;border:1px solid #555555;display:none;" />' +
				'<input type="file" name="fileData" id="imgFile" size="14" style="border:1px solid #555555;" onclick="javascript:document.getElementById(\'imgLink\').value=\'http://\';" />';
			} else {
				str += '<input type="text" id="imgLink" value="http://" maxlength="255" style="width:95%;border:1px solid #555555;" />' +
				'<input type="hidden" name="imageType" id="imageType" value="2"><input type="hidden" name="fileData" id="imgFile" value="" />';
			}
			str += '</td></tr><tr><td colspan="2" style="color:blue;text-indent:1em">*请上传300K以内的图片</td></tr><tr><td colspan="2" style="padding-bottom:3px;">' +
				'<table border="0" style="width:100%;font-size:12px;"><tr>' +
				'<td width="18%" style="padding:2px 2px 2px 5px;">'+KE_LANG['TITLE']+'</td><td width="82%"><input type="text" name="imgTitle" id="imgTitle" value="" maxlength="100" style="width:95%;border:1px solid #555555;" /></td></tr></table>' +	
				'<table border="0" style="width:100%;font-size:12px;"><tr>' +
				'<td width="10%" style="padding:2px 2px 2px 5px;">'+KE_LANG['WIDTH']+'</td><td width="23%"><input type="text" name="imgWidth" id="imgWidth" value="0" maxlength="4" style="width:40px;border:1px solid #555555;" /></td>' +
				'<td width="10%" style="padding:2px;">'+KE_LANG['HEIGHT']+'</td><td width="23%"><input type="text" name="imgHeight" id="imgHeight" value="0" maxlength="4" style="width:40px;border:1px solid #555555;" /></td>' +
				'<td width="10%" style="padding:2px;">'+KE_LANG['BORDER']+'</td><td width="23%"><input type="text" name="imgBorder" id="imgBorder" value="0" maxlength="1" style="width:20px;border:1px solid #555555;" /></td></tr></table>' +
				'<table border="0" style="width:100%;font-size:12px;"><tr>' +
				'<td width="39%" style="padding:2px 2px 2px 5px;"><select id="imgAlign" name="imgAlign"><option value="">'+KE_LANG['ALIGN']+'</option>';
			for (var i = 0; i < KE_IMAGE_ALIGN_TABLE.length; i++) {
				str += '<option value="' + KE_IMAGE_ALIGN_TABLE[i] + '">' + KE_IMAGE_ALIGN_TABLE[i] + '</option>';
			}
			str += '</select></td>' +
				'<td width="15%" style="padding:2px;">'+KE_LANG['HSPACE']+'</td><td width="15%"><input type="text" name="imgHspace" id="imgHspace" value="0" maxlength="1" style="width:20px;border:1px solid #555555;" /></td>' +
				'<td width="15%" style="padding:2px;">'+KE_LANG['VSPACE']+'</td><td width="15%"><input type="text" name="imgVspace" id="imgVspace" value="0" maxlength="1" style="width:20px;border:1px solid #555555;" /></td></tr></table>' +
				'</td></tr><tr><td colspan="2" style="margin:5px;padding-bottom:5px;" align="center">' +
				'<input type="button" name="button" value="'+KE_LANG['PREVIEW']+'" onclick="javascript:parent.KindImagePreview();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
				'<input type="submit" name="button" id="'+cmd+'submitButton" value="'+KE_LANG['CONFIRM']+'" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
				'<input type="button" name="button" value="'+KE_LANG['CANCEL']+'" onclick="javascript:parent.KindDisableMenu();parent.KindReloadIframe();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /></td></tr>' + 
				'</table></form></div>';
			KindDrawMenuIframe(KE_IMAGE_DOCUMENT, str);
			break;
		case 'KE_FLASH':
			var str = '<table cellpadding="0" cellspacing="0" style="width:100%;font-size:12px;">' + 
			'<tr><td colspan="2"><table border="0"><tr><td id="flashPreview" style="width:240px;height:240px;border:1px solid #AAAAAA;background-color:#FFFFFF;" align="center" valign="middle">&nbsp;</td></tr></table></td></tr>' +  	
			'<tr><td style="width:40px;padding:5px;">'+KE_LANG['REMOTE']+'</td>' +
			'<td style="width:210px;padding-bottom:5px;"><input type="text" id="flashLink" value="http://" style="width:190px;border:1px solid #555555;" /></td></tr>' +
			'<tr><td colspan="2" style="margin:5px;padding-bottom:5px;" align="center">' +
			'<input type="button" name="button" value="'+KE_LANG['PREVIEW']+'" onclick="javascript:parent.KindFlashPreview();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
			'<input type="submit" name="button" id="'+cmd+'submitButton" value="'+KE_LANG['CONFIRM']+'" onclick="javascript:parent.KindDrawFlashEnd();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
			'<input type="button" name="button" value="'+KE_LANG['CANCEL']+'" onclick="javascript:parent.KindDisableMenu();parent.KindReloadIframe();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /></td></tr>' + 
			'</table>';
			KindDrawMenuIframe(KE_FLASH_DOCUMENT, str);
			break;
		case 'KE_MEDIA':
			var str = KindDrawMedia(cmd);
			KindDrawMenuIframe(KE_MEDIA_DOCUMENT, str);
			break;
		case 'KE_REAL':
			var str = KindDrawMedia(cmd);
			KindDrawMenuIframe(KE_REAL_DOCUMENT, str);
			break;
		case 'KE_LINK':
			var str = '';
			str += '<table cellpadding="0" cellspacing="0" style="width:100%;font-size:12px;">' + 
				'<tr><td style="width:50px;padding:5px;">URL</td>' +
				'<td style="width:200px;padding-top:5px;padding-bottom:5px;"><input type="text" id="hyperLink" value="http://" style="width:190px;border:1px solid #555555;background-color:#FFFFFF;"></td>' +
				'<tr><td style="padding:5px;">'+KE_LANG['TARGET']+'</td>' +
				'<td style="padding-bottom:5px;"><select id="hyperLinkTarget"><option value="_blank" selected>'+KE_LANG['NEW_WINDOW']+'</option><option value="">'+KE_LANG['CURRENT_WINDOW']+'</option></select></td></tr>' + 
				'<tr><td colspan="2" style="padding-bottom:5px;" align="center">' +
				'<input type="submit" name="button" id="'+cmd+'submitButton" value="'+KE_LANG['CONFIRM']+'" onclick="javascript:parent.KindDrawLinkEnd();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
				'<input type="button" name="button" value="'+KE_LANG['CANCEL']+'" onclick="javascript:parent.KindDisableMenu();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /></td></tr>';
			str += '</table>';
			KindDrawMenuIframe(KE_LINK_DOCUMENT, str);
			break;
		case 'KE_DATE':
			var str = '';
			str += '<table style="width:100%;font-size:12px;">' + 
				'<tr><td colspan="2" style="padding:5px;font-size:16px"><b>'+KE_LANG['INSERT_CODE']+'</b></td></tr>' +
				'<tr><td style="width:35px;padding:5px;">'+KE_LANG['PROM']+'</td>' +
				'<td style="padding-bottom:5px;"><select id="LanguageDropDownList" name="LanguageDropDownList"><option value="C#" selected>C#</option><option value="VBScript">VBScript</option><option value="java">JAVA</option><option value="JScript">JavaScript</option><option value="HTML">HTML</option><option value="CSS">CSS</option><option value="XML">XML</option><option value="SQL">SQL</option><option value="VB.NET">.NET</option><option value="other">其他代码</option></select></td></tr>' + 
				'<tr><td style="padding:5px;" valign="top">'+KE_LANG['CODE']+'</td>' +
				'<td style="width:360px;padding-top:5px;padding-bottom:5px;"><textarea id="txtCode" name="txtCode" style="width: 340px; height: 280px;"></textarea></td>' +
				'<tr><td colspan="2" style="padding-bottom:5px;" align="center">' +
				'<input type="submit" name="button" id="'+cmd+'submitButton" value="'+KE_LANG['CONFIRM']+'" onclick="javascript:parent.KindDrawDateEnd();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /> ' +
				'<input type="button" name="button" value="'+KE_LANG['CANCEL']+'" onclick="javascript:parent.KindDisableMenu();" style="border:1px solid #555555;background-color:'+KE_BUTTON_COLOR+';" /></td></tr>';
			str += '</table>';
			KindDrawMenuIframe(KE_DATE_DOCUMENT, str);
			break;
		default:
			break;
	}
}
function KindDrawMenuIframe(obj, str)
{
	obj.open();
	obj.write(str);
	obj.close();
	obj.body.style.color = KE_MENU_TEXT_COLOR;
	obj.body.style.backgroundColor = KE_MENU_BG_COLOR;
	obj.body.style.margin = 0;
	obj.body.scroll = 'no';
}
function KindDrawTableSelected(i, j)
{
	var text = i.toString(10) + ' by ' + j.toString(10) + ' Table';
	document.getElementById('tableLocation').innerHTML = text;
	var num = 10;
	for (m = 1; m <= num; m++) {
		for (n = 1; n <= num; n++) {
			var obj = document.getElementById('kindTableTd' + m.toString(10) + '_' + n.toString(10) + '');
			if (m <= i && n <= j) {
				obj.style.backgroundColor = KE_MENU_SELECTED_COLOR;
			} else {
				obj.style.backgroundColor = '#FFFFFF';
			}
		}
	}
}
function KindImageType(type)
{
	if (type == 1) {
		KE_IMAGE_DOCUMENT.getElementById('imgFile').style.display = 'block';
		KE_IMAGE_DOCUMENT.getElementById('imgLink').style.display = 'none';
		KE_IMAGE_DOCUMENT.getElementById('imgLink').value = 'http://';
	} else {
		KE_IMAGE_DOCUMENT.getElementById('imgFile').style.display = 'none';
		KE_IMAGE_DOCUMENT.getElementById('imgLink').style.display = 'block';
	}
	KE_IMAGE_DOCUMENT.getElementById('imgPreview').innerHTML = "&nbsp;";
	KE_IMAGE_DOCUMENT.getElementById('imgWidth').value = 0;
	KE_IMAGE_DOCUMENT.getElementById('imgHeight').value = 0;
}
function KindImagePreview()
{
	var type = KE_IMAGE_DOCUMENT.getElementById('imageType').value;
	var url = KE_IMAGE_DOCUMENT.getElementById('imgLink').value;
	var file = KE_IMAGE_DOCUMENT.getElementById('imgFile').value;
	if (type == 1) {
		if (KE_BROWSER != 'IE') {
			return false;
		}
		if (file == '') {
			alert(KE_LANG['SELECT_IMAGE']);
			return false;
		}
		url = 'file:///' + file;
		if (KindCheckImageFileType(url, "\\") == false) {
			return false;
		}
	} else {
		if (KindCheckImageFileType(url, "/") == false) {
			return false;
		}
	}
	var imgObj = KE_IMAGE_DOCUMENT.createElement("IMG");
	imgObj.src = url;
	var width = parseInt(imgObj.width);
	var height = parseInt(imgObj.height);
	KE_IMAGE_DOCUMENT.getElementById('imgWidth').value = width;
	KE_IMAGE_DOCUMENT.getElementById('imgHeight').value = height;
	var rate = parseInt(width/height);
	if (width >230 && height <= 230) {
		width = 230;
		height = parseInt(width/rate);
	} else if (width <=230 && height > 230) {
		height = 230;
		width = parseInt(height*rate);
	} else if (width >230 && height > 230) {
		if (width >= height) {
			width = 230;
			height = parseInt(width/rate);
		} else {
			height = 230;
			width = parseInt(height*rate);
		}
	}
	imgObj.style.width = width;
	imgObj.style.height = height;
	var el = KE_IMAGE_DOCUMENT.getElementById('imgPreview');
	if (el.hasChildNodes()) {
		el.removeChild(el.childNodes[0]);
	}
	el.appendChild(imgObj);
	return imgObj;
}
function KindDrawImageEnd()
{
	var type = KE_IMAGE_DOCUMENT.getElementById('imageType').value;
	var url = KE_IMAGE_DOCUMENT.getElementById('imgLink').value;
	var file = KE_IMAGE_DOCUMENT.getElementById('imgFile').value;
	var width = KE_IMAGE_DOCUMENT.getElementById('imgWidth').value;
	var height = KE_IMAGE_DOCUMENT.getElementById('imgHeight').value;
	var border = KE_IMAGE_DOCUMENT.getElementById('imgBorder').value;
	var title = KE_IMAGE_DOCUMENT.getElementById('imgTitle').value;
	var align = KE_IMAGE_DOCUMENT.getElementById('imgAlign').value;
	var hspace = KE_IMAGE_DOCUMENT.getElementById('imgHspace').value;
	var vspace = KE_IMAGE_DOCUMENT.getElementById('imgVspace').value;
	if (type == 1) {
		if (file == '') {
			alert(KE_LANG['SELECT_IMAGE']);
			return false;
		}
		if (KindCheckImageFileType(file, "\\") == false) {
			return false;
		}
	} else {
		if (KindCheckImageFileType(url, "/") == false) {
			return false;
		}
	}
	if (width.match(/^\d+$/) == null) {
		alert(KE_LANG['INVALID_WIDTH']);
		return false;
	}
	if (height.match(/^\d+$/) == null) {
		alert(KE_LANG['INVALID_HEIGHT']);
		return false;
	}
	if (border.match(/^\d+$/) == null) {
		alert(KE_LANG['INVALID_BORDER']);
		return false;
	}
	if (hspace.match(/^\d+$/) == null) {
		alert(KE_LANG['INVALID_HSPACE']);
		return false;
	}
	if (vspace.match(/^\d+$/) == null) {
		alert(KE_LANG['INVALID_VSPACE']);
		return false;
	}
	var fileName;
	KindEditorForm.focus();
	if (type == 1) {
		fileName = KindGetFileName(file, "\\");
		var fileExt = KindGetFileExt(fileName);
		var dateObj = new Date();
		var year = dateObj.getFullYear().toString(10);
		var month = (dateObj.getMonth() + 1).toString(10);
		month = month.length < 2 ? '0' + month : month;
		var day = dateObj.getDate().toString(10);
		day = day.length < 2 ? '0' + day : day;
		var ymd = year + month + day;
		fileName = ymd + dateObj.getTime().toString(10) + '.' + fileExt;
		KE_IMAGE_DOCUMENT.getElementById('fileName').value = fileName;
	} else {
		KindInsertImage(url, width, height, border, title, align, hspace, vspace);
	}
}
function KindInsertImage(url, width, height, border, title, align, hspace, vspace)
{
	var element = document.createElement("img");
	element.src = url;
	if (width > 0) {
		element.style.width = width;
	}
	if (height > 0) {
		element.style.height = height;
	}
	if (align != "") {
		element.align = align;
	}
	if (hspace > 0) {
		element.hspace = hspace;
	}
	if (vspace > 0) {
		element.vspace = vspace;
	}
	element.border = border;
	element.alt = KindHtmlentities(title);
	KindSelect();
	KindInsertItem(element);
	KindDisableMenu();
	KindReloadIframe();
}
function KindGetFlashHtmlTag(url)
{
	var str = '<embed src="'+url+'" type="application/x-shockwave-flash" quality="high"></embed>';
	return str;
}
function KindFlashPreview()
{
	var url = KE_FLASH_DOCUMENT.getElementById('flashLink').value;
	if (KindCheckFlashFileType(url, "/") == false) {
		return false;
	}
	var el = KE_FLASH_DOCUMENT.getElementById('flashPreview');
	el.innerHTML = KindGetFlashHtmlTag(url);
}
function KindDrawFlashEnd()
{
	var url = KE_FLASH_DOCUMENT.getElementById('flashLink').value;
	if (KindCheckFlashFileType(url, "/") == false) {
		return false;
	}
	KindEditorForm.focus();
	KindSelect();
	var obj = document.createElement("EMBED");
	obj.src = url;
	obj.type = "application/x-shockwave-flash";
	obj.quality = "high";
	KindInsertItem(obj);
	KindDisableMenu();
}
function KindGetMediaHtmlTag(cmd, url)
{
	var str = '<embed src="'+url+'" type="';
	if (cmd == "KE_REAL") {
		str += 'audio/x-pn-realaudio-plugin';
	} else {
		str += 'video/x-ms-asf-plugin';
	}
	str += '" width="230" height="230" loop="true" autostart="true">';
	return str;
}
function KindMediaPreview(cmd)
{
	var mediaDocument;
	if (cmd == 'KE_REAL') {
		mediaDocument = KE_REAL_DOCUMENT;
	} else {
		mediaDocument = KE_MEDIA_DOCUMENT;
	}
	var url = mediaDocument.getElementById(cmd+'link').value;
	if (KindCheckMediaFileType(cmd, url, "/") == false) {
		return false;
	}
	var el = mediaDocument.getElementById(cmd+'preview');
	el.innerHTML = KindGetMediaHtmlTag(cmd, url);
}
function KindDrawMediaEnd(cmd)
{
	var mediaDocument;
	if (cmd == 'KE_REAL') {
		mediaDocument = KE_REAL_DOCUMENT;
	} else {
		mediaDocument = KE_MEDIA_DOCUMENT;
	}
	var url = mediaDocument.getElementById(cmd+'link').value;
	if (KindCheckMediaFileType(cmd, url, "/") == false) {
		return false;
	}
	KindEditorForm.focus();
	KindSelect();
	var obj = document.createElement("EMBED");
	obj.src = url;
	if (cmd == 'KE_REAL') {
		obj.type = 'audio/x-pn-realaudio-plugin';
	} else {
		obj.type = 'video/x-ms-asf-plugin';
	}
	obj.loop = 'true';
	obj.autostart = 'true';
	KindInsertItem(obj);
	KindDisableMenu(cmd);
}
function KindDrawLinkEnd()
{
	var range;
	var url = KE_LINK_DOCUMENT.getElementById('hyperLink').value;
	var target = KE_LINK_DOCUMENT.getElementById('hyperLinkTarget').value;
	if (url.match(/http:\/\/.{3,}/) == null) {
		alert(KE_LANG['INPUT_URL']);
		return false;
	}
	KindEditorForm.focus();
	KindSelect();
	var element;
    if (KE_BROWSER == 'IE') {
		if (KE_SELECTION.type.toLowerCase() == 'control') {
			var el = document.createElement("a");
			el.href = url;
			if (target) {
				el.target = target;
			}
			KE_RANGE.item(0).applyElement(el);
		} else if (KE_SELECTION.type.toLowerCase() == 'text') {
			KindExecuteValue('CreateLink', url);
			element = KE_RANGE.parentElement();
			if (target) {
				element.target = target;
			}
		}
	} else {
		KindExecuteValue('CreateLink', url);
		element = KE_RANGE.startContainer.previousSibling;
		if(target)
		{
		var a_list=KE_EDITFORM_DOCUMENT.getElementsByTagName("a");
		for(var i=0;a_list.length;i++)
        {
			if(a_list[i].href==element){
			a_list[i].target=target;
			}
		}
		}
    }
	KindDisableMenu();
}
//编辑器插入代码开始
// 转化为代码格式(代码，语言，是否有行号，是否折叠，是否全部折叠，整个代码的标题)
function FormateCode(str,language,showLine,canCollapse,canAllCollapse,allRegion)
{
	var CodeDivStyle = "color: "+CodeDivFontColor+";BACKGROUND-COLOR: "+CodeDivBgColor+";font-family: Verdana,宋体;width: 98%;line-height:16px;BORDER: #cccccc 1px solid;PADDING: 4px;FONT-SIZE: 10pt;WORD-BREAK: break-all;";
	if (language != "CSS") {
	    // 将双引号替换成&quot;
	    str = str.replace(/([^\\])"/g,"$1&quot;");
	}
	switch (language)
	{
        case "C#": str = FormatCSharp(str,canCollapse); break;
		case "HTML": str = FormatHTML(str,canCollapse); break;
		case "VBScript": str = FormatVBScript(str,canCollapse); break;
		case "java": str = FormatJava(str,canCollapse); break;
		case "JScript": str = FormatJScript(str,canCollapse); break;
		case "CSS": str = FormatCSS(str,canCollapse); break;
		case "XML": str = FormatXML(str,canCollapse); break;
		case "SQL": str = FormatSQL(str,canCollapse); break;
		case "VB.NET": str = FormatVBDOTNET(str,canCollapse); break;
		case "other": str = FormatOther(str,canCollapse); break;
	}
	// 加行号	
	if (showLine) str = AddLineNumber(str);	
    // 替换换行符为<BR>
	str = str.replace(/\n/g,"<BR>");
    // 全部折叠
	if (canAllCollapse) str = GetHeader(" ",allRegion,"Code",canAllCollapse,true)+"<BR>"+str+"</span>";
	// 改为正确路径		
	var src = /\b(src=")\b/g;
	str = str.replace(src,'src="images/editer/');
	// 给代码加一个边框
	str = "<div style=\""+CodeDivStyle+"\">" + str + "</div>";
	str = str.replace(/\s{2}/g,"&nbsp;&nbsp;");
    // 替换1个Tab为4个空格，使界面美观一些
    str = str.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");    
    return(str);
}

//---------------------------------------   格式化C#代码   ----------------------------------------
// 格式化C#代码
function FormatCSharp(str,canCollapse)
{	
	// 值变为棕色
    str = FormatValue(str);
	if (str.match(/using/g)!=null)//格式化using
		str = FormatUsing(str,canCollapse);
	//格式化Region窗体
	str = FormatRegion(str,canCollapse);
	// 格式化{}
//	str = FormatBrace(str); 
	//格式化函数头
	str = FormatFunctionRemark(str);
	// 给所有没有收缩功能的行的行头加图片
	str = str.replace(/(^|\n)([^<])/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">$2");
	// 所有关键字变成蓝色
	var re = /\b(abstract|event|new|struct|as|explicit|null|switch|base|extern|object|this|bool|false|operator|throw|break|finally|out|true|byte|fixed|override|try|case|float|params|typeof|catch|for|private|uint|char|foreach|protected|ulong|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|ushort|continue|in|return|using|decimal|int|sbyte|virtual|default|interface|sealed|volatile|delegate|internal|short|void|do|is|sizeof|while|double|lock|stackalloc|else|long|static|enum|namespace|string)\b/g;
	str = str.replace(re,"<font color=\"#0000FF\">$1</font>");
	//替换字符串中关键字颜色
	str = FormatKeyWords(str);
	//格式化注释//和/**/
	str = FormatCodeRemark(str);
	//替换收缩图片
    str = FormatImage(str);
	return (str);

}

// 格式化using
function FormatUsing(str)
{
	// 给using和正式代码之间的行的行头加上空白图片
	str = str.replace(/^([\s\S]*?)({)/g,
			function() {
				var s = arguments[1].replace(/(\n)([^u])/g,"$1<IMG src=\"None.gif\" align=\"top\">$2");
				s = s.replace(/(\n)([^u<])/g,"$1<IMG src=\"None.gif\" align=\"top\">$2");
				return(s+arguments[2]);
			});
	// using加一个收缩功能

	str = str.replace(/^([\s\S]*?)\b(using\s)/i,
			function() {
				
//原有				var s = arguments[1].replace(/(.*)([^\n]*)$/g,"$2")
//						+GetHeader(arguments[1].replace(/(.*)([^\n]*)$/g,"$2")+arguments[2],"...","CodeUsing",false,true);
				var s = arguments[1].replace(/(.*)([^\n]*)$/g,"$2")
						+GetHeader(arguments[1].replace(/(.*)([^\n]*)$/g,"$2")+arguments[2],"","CodeUsing",false,true);
				return(s);
			});	
	var arr = str.match(/.*using.*/g);
	if (arr!=null)
//去缩进图片	str = str.replace(arr[arr.length-1],"<IMG src=\"ExpandedBlockEnd.gif\" align=\"top\">"+arr[arr.length-1]+"</span>");	
//	str = str.replace(/([\s\S]*\n)(using[\s\S]*?)\n/g,"$1<IMG src=\"ExpandedBlockEnd.gif\" align=\"top\">$2</span>");
	return(str);
}

// 格式化Region
function FormatRegion(str,canCollapse)
{
	// 替换region处
	str = str.replace(/(.*)(#region\s+)([^\r\n]*)/g,	
		function() {				
				var s = GetHeader(arguments[1],arguments[3],"CodeRegion",canCollapse,false)
						+"<font color=\"#0000ff\">"+arguments[2]+"</font>"+arguments[3];
				return(s);
			});
	// 替换endregion处
//**img	str = str.replace(/(.*)(#endregion)/g,"<IMG src=\"ExpandedSubBlockEnd.gif\" align=\"top\"/>$1<font color=\"#0000ff\">$2</font></span>");
	return(str);
}

// 格式化{}
function FormatBrace(str)
{
	// 替换左边大括号
	str = str.replace(/([^{]*\n)(.*?)(\{)/g, 
			function() {
					var str = arguments[1]+GetHeader(arguments[2],"...","CodeFunction",false,false)+arguments[3];
//原有					var str = arguments[1]+GetHeader(arguments[2],"","CodeFunction",false,false)+arguments[3];
					return(str);
    					});
	// 替换右边大括号
	str = str.replace(/(.*\})/g,"<IMG src=\"ExpandedSubBlockEnd.gif\" align=\"top\">$1</span>"); 
	return str;
}

// 格式化函数头注释
function FormatFunctionRemark(str)
{
	// 函数头注释处的<summary>值变绿色
	str = str.replace(/(\/{3}\s{0,}&lt;summary&gt;.*?\n)([\s\S]*?)(\/{3}\s{0,}&lt;\/summary&gt;)/g,
			function() {
				str = arguments[2].replace(/(\/{3})([\s\S]*?)(\n)/g,"$1<font color=\"#008000\">$2</font>$3");
				return(arguments[1]+str+arguments[3]); 
			});
	// <param>值变为绿色
	str = str.replace(/(\/{3}\s{0,}&lt;param([\s\S]*?)&gt;)([\s\S]*?)(&lt;\/param&gt;)/g,"$1<font color=\"#008000\">$3</font>$4");
	// <returns><example><remarks><value>值变为绿色
	str = str.replace(/(\/{3}\s{0,}&lt;(returns|example|remarks|value)&gt;)([\s\S]*?)(&lt;\/\2&gt;)/g,
		"$1<font color=\"#008000\">$3</font>$4");
	// 加收缩功能***img
//	str = str.replace(/(.*)(\/{3}\s{0,}&lt;summary&gt;)([\s\S]*?)(\n\s{0,}\b(public|protected|private)\b)/g,
//			function() {
//				var s1 = GetHeader(arguments[1],"/**/","CodeRemark",false,false)+arguments[2];
//				var arr = arguments[3].match(/[\s\S]*?\n/g);
//				var maxStr = arr[arr.length-1];
//				var s2 = arguments[3].replace(maxStr,maxStr+"<IMG src=\"ExpandedSubBlockEnd.gif\" align=\"top\">");
//				return(s1+s2+"</span>"+arguments[4]);
//			});
	// 函数头注释处其它字符变为灰色
	str = str.replace(/(\/{3})([\s\S]*?)(<\/SPAN>|\n|$)/gi,"<font color=\"#808080\">$1$2</font>$3");
	return(str);
}

function FormatOther(str,canCollapse)
{	
	if (str.match(/using/g)!=null)//格式化using
		str = FormatUsing(str,canCollapse);
	// 格式化{}
//	str = FormatBrace(str); 
	return (str);

}
//---------------------------------------   格式化HTML代码   ----------------------------------------
// 格式化HTML代码
function FormatHTML(str,canCollapse)
{
	// 给Flash加折叠功能，默认为收缩状态
//	str = str.replace(/(.*)(&lt;object)([\s\S]*)(\n)(.*&lt;\/object.*)/gi,
//			function() {
//				var s = GetHeader(arguments[1],"<-- OBJECT class=ShockwaveFlash -->","CodeFlash",true,true)+arguments[2]+arguments[3].replace(/(\n)/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">")+arguments[4]+"<IMG src=\"ExpandedBlockEnd.gif\" align=\"top\">"+arguments[5]+"</span>";
//				return (s);
//			});
	// 替换HTML注释为绿色
	str = str.replace(/(&lt;!)(--.*?--)(&gt;)/g,"$1<font color=\"#008000\">$2</font>$3");
	// 替换HTML标签的属性为红色，HTML标签为棕色
/*	str = str.replace(/(&lt;)([^\s\/%!]*?)((\s+.*?)*)(\/?&gt;)/gi,
		function() {
			var s="<font color=\"#0000FF\">"+arguments[1]+"</font><font color=\"#800000\">"+
			    arguments[2]+"</font>"+arguments[3].replace(/(\s+)([^\s]*?)(=)(&quot;|')(.*?)\4/g,"$1<font color=\"#FF0000\">$2</font><font color=\"#0000FF\">$3$4$5$4</font>")+"<font color=\"#0000FF\">"+arguments[5]+"</font>";
			return (s);
		});*/
	str = str.replace(/(&lt;\/?)([^\s\/\&!]*)(.*?)(\/?&gt;)/gi,
			function() {
			var s="<font color=\"#0000FF\">"+arguments[1]+"</font><font color=\"#800000\">"+arguments[2]+"</font>"+
			arguments[3].replace(/(\s+)([^\s]*?)(=)(&quot;|')(.*?)\4/g,"$1<font color=\"#FF0000\">$2</font><font color=\"#0000FF\">$3$4$5$4</font>")+
			"<font color=\"#0000FF\">"+arguments[4]+"</font>";
			return (s);
            });
	str = str.replace(/(&lt;\/)(.*?)(&gt;)/gi,
		"<font color=\"#0000FF\">$1</font><font color=\"#800000\">$2</font><font color=\"#0000FF\">$3</font>");
	// 替换全部特殊符号标签为红色
	var symbolReg = /(&amp;)(quot|amp|lt|gt|nbsp|aacute|euro|lsquo|rsquo|rsquo|ldquo|rdquo|ndash|mdash|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|uuml|yacute|thorn|yuml)(;)/gi;
	str = str.replace(symbolReg,"<font color=\"#FF0000\">$1$2$3</font>")
	// 给<%和%>加个黄色背景
	str = str.replace(/(&lt;%)(.*?)(%&gt;)/gi,
			function() {
				var s="<font style=\"color:#000000;background-color:#FFFF00;\">"+arguments[1]+
				    "</font>"+arguments[2]+
				    "<font style=\"color:#000000;background-color:#FFFF00;\">"+arguments[3]+"</font>";
				return (s);
			});
	return (str);
}
//--------------------------------------   格式化Java函数   --------------------------------------
// 格式化Java函数
function FormatJava(str,canCollapse)
{
	// 值变为棕色
    str = FormatValue(str);
    // 格式化{}
//    str = FormatBrace(str);
	
	// 给所有没有收缩功能的行的行头加图片
//***img	str = str.replace(/(^|\n)([^<])/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">$2");
	// 关键字变为蓝色
	var keywordReg = /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|false|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|true|transient|try|void|volatile|while)\b/g;
	str = str.replace(keywordReg,"<font color=\"#0000FF\">$1</font>");
	//替换字符串中关键字颜色
	//str = FormatKeyWords(str);
	// 格式化注释//和/**/
	str = FormatCodeRemark(str);	
    //替换收缩图片
    str = FormatImage(str);
	return (str);
}
//--------------------------------------   格式化JScript函数   --------------------------------------
// 格式化JScript函数
function FormatJScript(str,canCollapse)
{
	// 值变为棕色
    str = FormatValue(str);
    // 格式化{}
//    str = FormatBrace(str);
	// 给所有没有收缩功能的行的行头加图片
//***img	str = str.replace(/(^|\n)([^<])/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">$2");
	// 关键字变为蓝色
	var keywordReg = /\b(break|delete|function|return|typeof|case|do|if|switch|var|catch|else|in|this|void|continue|false|instanceof|throw|while|debugger|finally|new|true|with|default|for|null|try|abstract|double|goto|native|static|boolean|enum|implements|package|super|byte|export|import|private|synchronized|char|extends|int|protected|throws|class|final|interface|public|transient|const|float|long|short|volatile)\b/g;
	str = str.replace(keywordReg,"<font color=\"#0000FF\">$1</font>");
	//替换字符串中关键字颜色
	str = FormatKeyWords(str);
	// 格式化注释//和/**/
	str = FormatCodeRemark(str);	
    //替换收缩图片
    str = FormatImage(str);
	return (str);
}

//--------------------------------------   格式化CSS   --------------------------------------
// 格式化CSS
function FormatCSS(str,canCollapse)
{
    str = str.replace(/(@\w*)(.*?;)/g,"<font color=\"#0000FF\">$1</font><font color=\"#000000\">$2</font>");
	str = str.replace(/(^|})([\s\S]*?)({|$)/g,"$1<font color=\"#800000\">$2</font>$3");
	str = str.replace(/({)([\s\S]*?)(})/g,
		function() {
			var s = arguments[2].replace(/(^|;)([\s\S]*?)(:)/g,"$1<font color=\"#FF0000\">$2</font>$3");
			s = s.replace(/(:)([\s\S]*?)(;|$)/g,"$1<font color=\"#0000FF\">$2</font>$3");
			s = arguments[1]+s+arguments[3];
			return (s);
		});
	return (str);
}

//--------------------------------------   格式化XML   --------------------------------------
// 格式化XML
function FormatXML(str,canCollapse)
{
	// 替换XML标签的属性为红色，XML标签为棕色
	str = str.replace(/(&lt;\??)([^!\s\/%]*?)((\s+.*?)*)([\/\?]?&gt;)/gi,
		function() {
			var s = arguments[3];
			s="<font color=\"#0000FF\">"+arguments[1]+"</font><font color=\"#800000\">"+arguments[2]+"</font>"+s.replace(/(\s+)([^\s]*?)(=)(&quot;|')(.*?)\4/g,"$1<font color=\"#FF0000\">$2</font><font color=\"#0000FF\">$3$4$5$4</font>")+"<font color=\"#0000FF\">"+arguments[5]+"</font>";
			return (s);
		});
	str = str.replace(/(&lt;\/)(.*?)(&gt;)/gi,
		"<font color=\"#0000FF\">$1</font><font color=\"#800000\">$2</font><font color=\"#0000FF\">$3</font>");
	
	// 替换全部特殊符号标签为红色
	var symbolReg = /(&amp;)(quot|amp|lt|gt|nbsp|aacute|euro|lsquo|rsquo|rsquo|ldquo|rdquo|ndash|mdash|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|uuml|yacute|thorn|yuml)(;)/gi;
	str = str.replace(symbolReg,"<font color=\"#FF0000\">$1$2$3</font>");
	str = str.replace(/(&lt;!--)([\s\S]*?)(--&gt;)/g,
	        function() {
	            return (arguments[1]+"<font color=\"#008000\">"+ClearColorTag(arguments[2])+"</font>"+arguments[3]);
	        });
	return (str);
}

//---------------------------------------   格式化VBScript代码   ----------------------------------------
// 格式化VBScript代码
function FormatVBScript(str,canCollapse)
{
	// 值变为棕色
    str = FormatValue(str);
    str = FormatCodeRemark_VBDOTNET(str);  //首先要格式化注释，否则会把GetHeader函数中的'也替换掉
	//格式化函数
	str = FormatBrace_VBDOTNET(str);
    // 给所有没有收缩功能的行的行头加图片
//***img	str = str.replace(/(^|\n)([^<])/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">$2");
	// 关键字变为蓝色
	var re = /\b(And|As|ByRef|Call|Case|Class|Const|Dim|Do|Each|Else|ElseIf|Empty|End|Eqv|Erase|Execute|ExecuteGlobal|Exit|Explicit|False|For|Get|Goto|If|Imp|In|Is|Let|Loop|Mod|Next|Not|Nothing|Null|On|Option|Or|Private|Public|Randomize|ReDim|Resume|Select|Set|Stop|Then|To|True|Until|Wend|While|With|Xor|Sub|Len|Right|Function|IsNull|IsEmpty|Left|Cint|Instr|Cstr|Replace|Chr|Error|Trim|Mid|Instrrev|LCase|UCase|Hex)\b/gi;
	str = str.replace(re,"<font color=\"#0000FF\">$1</font>");	
	//字符串中关键字颜色不变
	str = FormatKeyWords(str);
    //替换收缩图片
    str = FormatImage(str);
    return (str);
}

//---------------------------------------   格式化SQL代码   ----------------------------------------
// 格式化SQL代码
function FormatSQL(str,canCollapse)
{   

    re = /\b(not|or|null|exists|and|all|any|between|join|some|like|cross|outer|in)\b/gi;
	str = str.replace(re,"<font color=\"#999999\">$1</font>");
	// 关键字变为蓝色
	var re = /\b(ADD|EXIT|PRIMARY|FETCH|PRINT|ALTER|FILE|PRIVILEGES|FILLFACTOR|PROC|FLOPPY|PROCEDURE|AS|FOR|PROCESSEXIT|ASC|FOREIGN|PUBLIC|AUTHORIZATION|FREETEXT|RAISERROR|AVG|FREETEXTTABLE|READ|BACKUP|FROM|READTEXT|BEGIN|FULL|RECONFIGURE|GOTO|REFERENCES|BREAK|GRANT|REPEATABLE|BROWSE|GROUP|REPLICATION|BULK|HAVING|RESTORE|BY|HOLDLOCK|RESTRICT|CASCADE|RETURN|CASE|IDENTITY_INSERT|REVOKE|CHECK|IDENTITYCOL|RIGHT|CHECKPOINT|IF|ROLLBACK|CLOSE|CLUSTERED|INDEX|ROWGUIDCOL|COALESCE|INNER|RULE|COLUMN|INSERT|SAVE|COMMIT|INTERSECT|SCHEMA|COMMITTED|INTO|SELECT|COMPUTE|IS|SERIALIZABLE|CONFIRM|ISOLATION|SESSION_USER|CONSTRAINT|SET|CONTAINS|KEY|SETUSER|CONTAINSTABLE|KILL|SHUTDOWN|CONTINUE|LEFT|CONTROLROW|LEVEL|STATISTICS|CONVERT|SUM|COUNT|LINENO|SYSTEM_USER|CREATE|LOAD|TABLE|MAX|TAPE|CURRENT|MIN|TEMP|CURRENT_DATE|MIRROREXIT|TEMPORARY|CURRENT_TIME|NATIONAL|CURRENT_TIMESTAMP|NOCHECK|THEN|CURRENT_USER|NONCLUSTERED|TO|CURSOR|TOP|DATABASE|TRAN|DBCC|IF|TRANSACTION|DEALLOCATE|OF|TRIGGER|DECLARE|OFF|TRUNCATE|DEFAULT|OFFSETS|TSEQUAL|DELETE|ON|UNCOMMITTED|DENY|ONCE|UNION|DESC|ONLY|UNIQUE|DISK|OPEN|UPDATE|DISTINCT|OPENDATASOURCE|UPDATETEXT|DISTRIBUTED|OPENQUERY|USE|DOUBLE|OPENROWSET|USER|DROP|OPTION|VALUES|DUMMY|VARYING|DUMP|ORDER|VIEW|ELSE|WAITFOR|END|OVER|WHEN|ERRLVL|PERCENT|WHERE|ERROREXIT|PERM|WHILE|ESCAPE|PERMANENT|WITH|EXCEPT|PIPE|WORK|EXEC|PLAN|WRITETEXT|EXECUTE|PRECISION|PREPARE|NAME|FILENAME|FILEGROWTH|SIZE|COLLATE|bigint|Binary|bit|char|cursor|datetime|Decimal|float|image|int|money|Nchar|ntext|nvarchar|real|smalldatetime|Smallint|smallmoney|text|timestamp|tinyint|Varbinary|Varchar|uniqueidentifier)\b/gi;
	str = str.replace(re,"<font color=\"#0000FF\">$1</font>");
	// 系统存储过程名称变为棕色
	re = /\b(atalogs_cursor|sp_fulltext_column|sp_help_fulltext_columns|sp_fulltext_database|sp_help_fulltext_columns_cursor|sp_fulltext_service|sp_help_fulltext_tables|sp_fulltext_table|sp_help_fulltext_tables_cursor|sp_help_fulltext_catalogs|sp_add_log_shipping_database|sp_delete_log_shipping_database|sp_add_log_shipping_plan|sp_delete_log_shipping_plan|sp_add_log_shipping_plan_database|sp_delete_log_shipping_plan_database|sp_add_log_shipping_primary|sp_delete_log_shipping_primary|sp_add_log_shipping_secondary|sp_delete_log_shipping_secondary|sp_can_tlog_be_applied|sp_get_log_shipping_monitor_info|sp_change_monitor_role|sp_remove_log_shipping_monitor|sp_change_primary_role|sp_resolve_logins|sp_change_secondary_role|sp_update_log_shipping_monitor_info|sp_create_log_shipping_monitor_account|sp_update_log_shipping_plan|sp_define_log_shipping_monitor|sp_update_log_shipping_plan_database|sp_OACreate|sp_OAMethod|sp_OADestroy|sp_OASetProperty|sp_OAGetErrorInfo|sp_OAStop|sp_OAGetProperty|sp_add_agent_parameter|sp_enableagentoffload|sp_add_agent_profile|sp_enumcustomresolvers|sp_addarticle|sp_enumdsn|sp_adddistpublisher|sp_enumfullsubscribers|sp_adddistributiondb|sp_expired_subscription_cleanup|sp_adddistributor|sp_generatefilters|sp_addmergealternatepublisher|sp_getagentoffloadinfo|sp_addmergearticle|sp_getmergedeletetype|sp_addmergefilter|sp_get_distributor|sp_addmergepublication|sp_getqueuedrows|sp_addmergepullsubscription|sp_getsubscriptiondtspackagename|sp_addmergepullsubscription_agent|sp_grant_publication_access|sp_addmergesubscription|sp_help_agent_default|sp_addpublication|sp_help_agent_parameter|sp_addpublication_snapshot|sp_help_agent_profile|sp_addpublisher70|sp_helparticle|sp_addpullsubscription|sp_helparticlecolumns|sp_addpullsubscription_agent|sp_helparticledts|sp_addscriptexec|sp_helpdistpublisher|sp_addsubscriber|sp_helpdistributiondb|sp_addsubscriber_schedule|sp_helpdistributor|sp_addsubscription|sp_helpmergealternatepublisher|sp_addsynctriggers|sp_helpmergearticle|sp_addtabletocontents|sp_helpmergearticlecolumn|sp_adjustpublisheridentityrange|sp_helpmergearticleconflicts|sp_article_validation|sp_helpmergeconflictrows|sp_articlecolumn|sp_helpmergedeleteconflictrows|sp_articlefilter|sp_helpmergefilter|sp_articlesynctranprocs|sp_helpmergepublication|sp_articleview|sp_helpmergepullsubscription|sp_attachsubscription|sp_helpmergesubscription|sp_browsesnapshotfolder|sp_helppublication|sp_browsemergesnapshotfolder|sp_help_publication_access|sp_browsereplcmds|sp_helppullsubscription|sp_change_agent_parameter|sp_helpreplfailovermode|sp_change_agent_profile|sp_helpreplicationdboption|sp_changearticle|sp_helpreplicationoption|sp_changedistpublisher|sp_helpsubscriberinfo|sp_changedistributiondb|sp_helpsubscription|sp_changedistributor_password|sp_ivindexhasnullcols|sp_changedistributor_property|sp_helpsubscription_properties|sp_changemergearticle|sp_link_publication|sp_changemergefilter|sp_marksubscriptionvalidation|sp_changemergepublication|sp_mergearticlecolumn|sp_changemergepullsubscription|sp_mergecleanupmetadata|sp_changemergesubscription|sp_mergedummyupdate|sp_changepublication|sp_mergesubscription_cleanup|sp_changesubscriber|sp_publication_validation|sp_changesubscriber_schedule|sp_refreshsubscriptions|sp_changesubscriptiondtsinfo|sp_reinitmergepullsubscription|sp_changesubstatus|sp_reinitmergesubscription|sp_change_subscription_properties|sp_reinitpullsubscription|sp_check_for_sync_trigger|sp_reinitsubscription|sp_copymergesnapshot|sp_removedbreplication|sp_copysnapshot|sp_repladdcolumn|sp_copysubscription|sp_replcmds|sp_deletemergeconflictrow|sp_replcounters|sp_disableagentoffload|sp_repldone|sp_drop_agent_parameter|sp_repldropcolumn|sp_drop_agent_profile|sp_replflush|sp_droparticle|sp_replicationdboption|sp_dropanonymouseagent|sp_replication_agent_checkup|sp_dropdistpublisher|sp_replqueuemonitor|sp_dropdistributiondb|sp_replsetoriginator|sp_dropmergealternatepublisher|sp_replshowcmds|sp_dropdistributor|sp_repltrans|sp_dropmergearticle|sp_restoredbreplication|sp_dropmergefilter|sp_revoke_publication_access|sp_scriptsubconflicttable|sp_dropmergepublication|sp_script_synctran_commands|sp_dropmergepullsubscription|sp_setreplfailovermode|sp_showrowreplicainfo|sp_dropmergesubscription|sp_subscription_cleanup|sp_droppublication|sp_table_validation|sp_droppullsubscription|sp_update_agent_profile|sp_dropsubscriber|sp_validatemergepublication|sp_dropsubscription|sp_validatemergesubscription|sp_dsninfo|sp_vupgrade_replication|sp_dumpparamcmd|sp_addalias|sp_droprolemember|sp_addapprole|sp_dropserver|sp_addgroup|sp_dropsrvrolemember|sp_addlinkedsrvlogin|sp_dropuser|sp_addlogin|sp_grantdbaccess|sp_addremotelogin|sp_grantlogin|sp_addrole|sp_helpdbfixedrole|sp_addrolemember|sp_helpgroup|sp_addserver|sp_helplinkedsrvlogin|sp_addsrvrolemember|sp_helplogins|sp_adduser|sp_helpntgroup|sp_approlepassword|sp_helpremotelogin|sp_changedbowner|sp_helprole|sp_changegroup|sp_helprolemember|sp_changeobjectowner|sp_helprotect|sp_change_users_login|sp_helpsrvrole|sp_dbfixedrolepermission|sp_helpsrvrolemember|sp_defaultdb|sp_helpuser|sp_defaultlanguage|sp_MShasdbaccess|sp_denylogin|sp_password|sp_dropalias|sp_remoteoption|sp_dropapprole|sp_revokedbaccess|sp_dropgroup|sp_revokelogin|sp_droplinkedsrvlogin|sp_setapprole|sp_droplogin|sp_srvrolepermission|sp_dropremotelogin|sp_validatelogins|sp_droprole|sp_processmail|xp_sendmail|xp_deletemail|xp_startmail|xp_findnextmsg|xp_stopmail|xp_readmail|sp_trace_create|sp_trace_setfilter|sp_trace_generateevent|sp_trace_setstatus|sp_trace_setevent|sp_add_alert|sp_help_jobhistory|sp_add_category|sp_help_jobschedule|sp_add_job|sp_help_jobserver|sp_add_jobschedule|sp_help_jobstep|sp_add_jobserver|sp_help_notification|sp_add_jobstep|sp_help_operator|sp_add_notification|sp_help_targetserver|sp_add_operator|sp_help_targetservergroup|sp_add_targetservergroup|sp_helptask|sp_add_targetsvrgrp_member|sp_manage_jobs_by_login|sp_addtask|sp_msx_defect|sp_apply_job_to_targets|sp_msx_enlist|sp_delete_alert|sp_post_msx_operation|sp_delete_category|sp_purgehistory|sp_delete_job|sp_purge_jobhistory|sp_delete_jobschedule|sp_reassigntask|sp_delete_jobserver|sp_remove_job_from_targets|sp_delete_jobstep|sp_resync_targetserver|sp_delete_notification|sp_start_job|sp_delete_operator|sp_stop_job|sp_delete_targetserver|sp_update_alert|sp_delete_targetservergroup|sp_update_category|sp_delete_targetsvrgrp_member|sp_update_job|sp_droptask|sp_update_jobschedule|sp_help_alert|sp_update_jobstep|sp_help_category|sp_update_notification|sp_help_downloadlist|sp_update_operator|sp_helphistory|sp_update_targetservergroup|sp_help_job|sp_updatetask|xp_sqlagent_proxy_accountsp_add_data_file_recover_suspect_db|sp_helpconstraint|sp_addextendedproc|sp_helpdb|sp_addextendedproperty|sp_helpdevice|sp_add_log_file_recover_suspect_db|sp_helpextendedproc|sp_addmessage|sp_helpfile|sp_addtype|sp_helpfilegroup|sp_addumpdevice|sp_helpindex|sp_altermessage|sp_helplanguage|sp_autostats|sp_helpserver|sp_attach_db|sp_helpsort|sp_attach_single_file_db|sp_helpstats|sp_bindefault|sp_helptext|sp_bindrule|sp_helptrigger|sp_bindsession|sp_indexoption|sp_certify_removable|sp_invalidate_textptr|sp_configure|sp_lock|sp_create_removable|sp_monitor|sp_createstats|sp_procoption|sp_cycle_errorlog|sp_recompile|sp_datatype_info|sp_refreshview|sp_dbcmptlevel|sp_releaseapplock|sp_dboption|sp_rename|sp_dbremove|sp_renamedb|sp_delete_backuphistory|sp_resetstatus|sp_depends|sp_serveroption|sp_detach_db|sp_setnetname|sp_dropdevice|sp_settriggerorder|sp_dropextendedproc|sp_spaceused|sp_dropextendedproperty|sp_tableoption|sp_dropmessage|sp_unbindefault|sp_droptype|sp_unbindrule|sp_executesql|sp_updateextendedproperty|sp_getapplock|sp_updatestats|sp_getbindtoken|sp_validname|sp_help|sp_who|sp_dropwebtask|sp_makewebtask|sp_enumcodepages|sp_runwebtask|sp_xml_preparedocument|sp_xml_removedocument|xp_cmdshell|xp_logininfo|xp_enumgroups|xp_msver|xp_findnextmsg|xp_revokelogin|xp_grantlogin|xp_sprintf|xp_logevent|xp_sqlmaint|xp_loginconfig|xp_sscanf|sp_cursor|sp_cursorclose|sp_cursorexecute|sp_cursorfetch|sp_cursoropen|sp_cursoroption|sp_cursorprepare|sp_cursorunprepare|sp_execute|sp_prepare|sp_unprepare|sp_createorphan|sp_droporphans|sp_reset_connection|sp_sdidebug)\b/gi;
	str = str.replace(re,"<font color=\"#800000\">$1</font>");
	// 函数变为紫色
	re = /\b(ASCII|SOUNDEX|PATINDEX|SPACE|CHARINDEX|REPLACE|STR|DIFFERENCE|QUOTENAME|STUFF|LEFT|REPLICATE|SUBSTRING|LEN|REVERSE|UNICODE|LOWER|RIGHT|UPPER|LTRIM|RTRIM|DATEADD|DATEDIFF|DATENAME|DATEPART|DAY|GETDATE|GETUTCDATE|MONTH|YEAR|ABS|DEGREES|RAND|ACOS|EXP|ROUND|ASIN|FLOOR|SIGN|ATAN|LOG|SIN|ATN2|LOG10|SQUARE|CEILING|PI|SQRT|COS|POWER|TAN|COT|RADIANS|AVG|COUNT|SUM|APP_NAME|CASE|CAST|CONVERT|COALESCE|COLLATIONPROPERTY|CURRENT_TIMESTAMP|CURRENT_USER|DATALENGTH|@@ERROR|FORMATMESSAGE|HOST_NAME|IDENT_CURRENT|IDENT_INCR|IDENT_SEED|@@IDENTITY|ISDATE|ISNULL|ISNUMERIC|NEWID|NULLIF|PARSENAME|PERMISSIONS|@@ROWCOUNT|SCOPE_IDENTITY|SERVERPROPERTY|SESSIONPROPERTY|SESSION_USER|STATS_DATE|SYSTEM_USER|@@TRANCOUNT|USER_NAME|@@DATEFIRST|@@OPTIONS|@@DBTS|@@REMSERVER|@@LANGID|@@SERVERNAME|@@LANGUAGE|@@SERVICENAME|@@LOCK_TIMEOUT|@@SPID|@@MAX_CONNECTIONS|@@TEXTSIZE|@@MAX_PRECISION|@@VERSION|@@NESTLEVEL|@@CURSOR_ROWS|CURSOR_STATUS|@@FETCH_STATUS|COL_LENGTH|COL_NAME|FULLTEXTCATALOGPROPERTY|COLUMNPROPERTY|FULLTEXTSERVICEPROPERTY|DATABASEPROPERTY|INDEX_COL|DATABASEPROPERTYEX|INDEXKEY_PROPERTY|DB_ID|INDEXPROPERTY|DB_NAME|OBJECT_ID|FILE_ID|OBJECT_NAME|FILE_NAME|OBJECTPROPERTY|FILEGROUP_ID|@@PROCID|FILEGROUP_NAME|SQL_VARIANT_PROPERTY|FILEGROUPPROPERTY|TYPEPROPERTY|FILEPROPERTY|IS_SRVROLEMEMBER|SUSER_SID|SUSER_SNAME|USER_ID|USER|IS_MEMBER|@@CONNECTIONS|@@PACK_RECEIVED|@@CPU_BUSY|@@PACK_SENT|@@TIMETICKS|@@IDLE|@@TOTAL_ERRORS|@@IO_BUSY|@@TOTAL_READ|@@PACKET_ERRORS|@@TOTAL_WRITE|PATINDEX|TEXTPTR|TEXTVALID|@@LANGUAGE)\b/gi;
	str = str.replace(re,"<font color=\"#FF00FF\">$1</font>");
	// 系统表名称变为绿色
	re = /\b(sysaltfiles|syscacheobjects|syscharsets|syscolumns|syscomments|sysconfigures|syscurconfigs|syscursorcolumns|syscursorrefs|syscursors|syscursortables|sysdatabases|sysdepends|sysdevices|sysfilegroups|sysfiles|sysfiles1|sysforeignkeys|sysfulltextcatalogs|sysfulltextnotify|sysindexes|sysindexkeys|syslanguages|syslockinfo|syslocks|sysmembers|sysmessages|sysobjects|sysperfinfo|syspermissions|sysprocesses|sysproperties|sysprotects|sysreferences|SYSREMOTE_CATALOGS|SYSREMOTE_COLUMN_PRIVILEGES|SYSREMOTE_COLUMNS|SYSREMOTE_FOREIGN_KEYS|SYSREMOTE_INDEXES|SYSREMOTE_PRIMARY_KEYS|SYSREMOTE_PROVIDER_TYPES|SYSREMOTE_SCHEMATA|SYSREMOTE_STATISTICS|SYSREMOTE_TABLE_PRIVILEGES|SYSREMOTE_TABLES|SYSREMOTE_VIEWS|sysservers|systypes|sysusers|sysxlogins)\b/gi;
	str = str.replace(re,"<font color=\"#008000\">$1</font>");
	// 值变为红色
		str = str.replace(/('.*?')/gi,
		function() {
			return ("<font color=\"#FF0000\">"+arguments[1].replace(/<.*?>/g,"")+"</font>");
		});
		
	str = FortmatCodeRemark_SQL(str);
		
	return (str);
}

//SQL注释替换为绿色
function FortmatCodeRemark_SQL(str)
{
    str = str.replace(/(\/\*)([\s\S]*?)(\*\/)/g,
			function() {
					var s = arguments[1];
					if (arguments[2] != "")
						s = "<font style=\"color:#008080\">"+s+ClearColorTag(arguments[2])+arguments[3]+"</font>";
					else
						s += arguments[3];
					return(s);
				});	
	str = str.replace(/([^\-])(\-{2})(.*)/g,
			function() {
					var s;
					if (arguments[3].substr(0,1) != "")
						s = "<font style=\"color:#008080\">"+arguments[2]+ClearColorTag(arguments[3])+"</font>";
					else
						s = arguments[2]+arguments[3];
					return(arguments[1]+s);
				});
	return(str);
}

//---------------------------------------   公共函数   ----------------------------------------
// 获取可折叠的行头(文字之前的空白，收缩时显示的文字，要收缩的控件名称，默认是否折叠，是否显示为ExpandedBlockStart.gif)
function GetHeader(blank,text,control,canCollapse,isTopImage)
{
	return (text);
	var CodeRegionStyle = "color: #808080;BORDER: #808080 1px solid; PADDING: 0px; BACKGROUND-COLOR: #FFFFFF;";
	if (canCollapse)
	{
		var ExpandedImageStyle = "display:none;";
		var ContractedImageStyle = "display:inline;";
	}
	else
	{
		var ExpandedImageStyle = "display:inline;";
		var ContractedImageStyle = "display:none;";
	}
	if (isTopImage)
	{
		var ImageName = "Block";
	}
	else
	{
		var ImageName = "SubBlock";
	}
	var rndnum = Math.floor((Math.random()*1000000)).toString().substr(0,4);
//***img	return ("<IMG src=\"Expanded"+ImageName+"Start.gif\" name=\""+control+rndnum+"_expand_img\" align=\"top\" onclick=\""+control+rndnum+"_shrink_img.style.display='inline';"+control+rndnum+"_expand_img.style.display='none';"+control+rndnum+"_expand_text.style.display='none';"+control+rndnum+"_shrink_text.style.display='inline'\" style=\""+ExpandedImageStyle+"\"><IMG src=\"Contracted"+ImageName+".gif\" name=\""+control+rndnum+"_shrink_img\" align=\"top\" onclick=\""+control+rndnum+"_shrink_img.style.display='none';"+control+rndnum+"_expand_img.style.display='inline';"+control+rndnum+"_expand_text.style.display='inline';"+control+rndnum+"_shrink_text.style.display='none';\" style=\""+ContractedImageStyle+"\">"+blank+"<span id=\""+control+rndnum+"_shrink_text\" style=\""+CodeRegionStyle+ContractedImageStyle+"\">"+text+"</span><span id=\""+control+rndnum+"_expand_text\" style=\""+ExpandedImageStyle+"\">");
}

// 给代码加上行号
function AddLineNumber(str)
{
	var i = 0;
	var arr = str.match(/\n/g);
	arrlen = (arr != null) ? arr.length+1 : 1;
	var rowCount = arrlen.toString().length;
	str = str.replace(/(^|\n)/g,
			function(){
					i++;
					var blankstr = "0000".substr(0,rowCount-i.toString().length);
					var s = (blankstr=="") ? "" : "<font color=\""+CodeDivBgColor+"\">"+blankstr+"</font>";
					return(arguments[1]+s+"<font color=\"#008080\">"+i+"</font> ");
				});
	return(str);
}

// 格式化函数代码注释//和/**/
function FormatCodeRemark(str)
{
	// 所有注释被绿色
	str = str.replace(/([^\/])(\/{2})(.*)/g,
			function() {
					var s;
					if (arguments[3].substr(0,1) != "/")
						s = "<font color=\"#008000\">"+arguments[2]+ClearColorTag(arguments[3])+"</font>";
					else
						s = arguments[2]+arguments[3];
					return(arguments[1]+s);
				});
	str = str.replace(/(\/\*)([\s\S]*?)(\*\/)/g,
			function() {
					var s = arguments[1];
					if (arguments[2] != "")
						s = "<font color=\"#008000\">"+s+ClearColorTag(arguments[2])+arguments[3]+"</font>";
					else
						s += arguments[3];
					return(s);
				});
	return(str);
}

// 格式化值
function FormatValue(str)
{
    // 所有值（双引号或单引号之间的字符串）变为棕色
	str = str.replace(/(@?)(&quot;)(.*?)\2/g,
	function() {
		var s = arguments[3].replace(/<.*?>/g,"");
		return("<font color=\"#800000\">"+arguments[1]+arguments[2]+s+arguments[2]+"</font>");
	});
	return (str);
}

// 清除字符串中所有的颜色标签
function ClearColorTag(str)
{
    str = str.replace(/<\/?font.*?>/g,"");
    return (str);
}

//---------------------------------------   格式化VB.NET代码   ----------------------------------------
// 格式化VB.NET代码
function FormatVBDOTNET(str,canCollapse)
{	
    // 值变为棕色
    str = FormatValue(str);
    str = FormatCodeRemark_VBDOTNET(str);  //首先要格式化注释，否则会把GetHeader函数中的'也替换掉
	if (str.match(/Imports/g)!=null)//格式化Imports
		str = FormatImports(str,canCollapse);
	//格式化函数头
	str = FormatFunctionRemark_VBDOTNET(str);
	//格式化函数
    str = FormatBrace_VBDOTNET(str);
    //格式化Region窗体
    str = FormatRegion_VBDOTNET(str,canCollapse);
    // 给所有没有收缩功能的行的行头加图片
//***img	str = str.replace(/(^|\n)([^<])/g,"$1<IMG src=\"InBlock.gif\" align=\"top\">$2");
	// 所有关键字变成蓝色
	var re = /\b(And|As|ByRef|Call|Case|Class|Const|Dim|Do|Each|Else|ElseIf|Empty|End|Eqv|Erase|Execute|ExecuteGlobal|Exit|Explicit|False|For|Get|Goto|If|Imp|In|Is|Let|Loop|Mod|Next|Not|Nothing|Null|On|Option|Or|Private|Public|Randomize|ReDim|Resume|Select|Set|Stop|Then|To|True|Until|Wend|While|With|Xor|Sub|Len|Right|Function|IsNull|IsEmpty|Left|Cint|Instr|Cstr|Chr|Error|Trim|Mid|Instrrev|LCase|UCase|Hex|Imports|Inherits|Protected|WithEvents|ByVal|Handles|MyBase|New|String|IsNothing|IsDbNull|Optional|Integer|Date|Overloads|Overrides|Friend|Me)\b/gi;
	str = str.replace(re,"<font color=\"#0000FF\">$1</font>");	
    //字符串中关键字颜色不变
    str = FormatKeyWords(str);
    //替换收缩图片
    str = FormatImage(str);
    return (str);
}

// 格式化Imports
function FormatImports(str)
{
	// 给Imports和正式代码之间的行的行头加上空白图片
	str = str.replace(/^([\s\S]*?)/g,
			function() {
				var s = arguments[1].replace(/(\n)([^I])/g,"$1<IMG src=\"None.gif\" align=\"top\">$2");
				s = s.replace(/(\n)([^I<])/g,"$1<IMG src=\"None.gif\" align=\"top\">$2");
				return(s);
			});
	// Imports加一个收缩功能
	str = str.replace(/^([\s\S]*?)\b(Imports\s)/gi,
			function() {
//原有				var s = arguments[1].replace(/(.*)([^\n]*)$/g,"$2")
//						+GetHeader(arguments[1].replace(/(.*)([^\n]*)$/g,"$2")+arguments[2],"...","CodeImports",false,true);
				var s = arguments[1].replace(/(.*)([^\n]*)$/g,"$2")
						+GetHeader(arguments[1].replace(/(.*)([^\n]*)$/g,"$2")+arguments[2],"","CodeImports",false,true);
				return(s);
			});	
	var arr = str.match(/.*Imports.*/gi);
	if (arr!=null)
//***img		str = str.replace(arr[arr.length-1],"<IMG src=\"ExpandedBlockEnd.gif\" align=\"top\">"+arr[arr.length-1]+"</span>");	
//	str = str.replace(/([\s\S]*\n)(Imports[\s\S]*?)\n/g,"$1<IMG src=\"ExpandedBlockEnd.gif\" align=\"top\">$2</span>");
	return(str);
}

// 格式化VB.NET的Region
function FormatRegion_VBDOTNET(str,canCollapse)
{
	// 替换Region处
	str = str.replace(/(.*)(#Region\s+)([^\r\n]*)/gi,	
		function() {				
				var s = GetHeader(arguments[1],arguments[3],"CodeRegion",canCollapse,false)
						+"<font color=\"#0000ff\">"+arguments[2]+"</font>"+arguments[3];
				return(s);
			});
	// 替换End Region处
//***img	str = str.replace(/(.*)(#End Region)/gi,"<IMG src=\"ExpandedSubBlockEnd.gif\" align=\"top\"/>$1<font color=\"#0000ff\">$2</font></span>");
		
	return(str);
}


// 格式化VB.NET函数代码注释rem和'
function FormatCodeRemark_VBDOTNET(str)
{
    
	// 注释变为绿色
	str = str.replace(/('.*)/g,
			function() {
				return ("<font color=\"#008000\">" + arguments[1].replace(/<.*?>/g,"") + "</font>");
			});				
	str = str.replace(/(Rem\s.*)/gi,
			function() {
					return ("<font color=\"#008000\">" + arguments[1].replace(/<.*?>/g,"") + "</font>");
				});	
	return(str);
}

// 格式化VB.NET函数头注释
function FormatFunctionRemark_VBDOTNET(str)
{
	// 函数头注释处的<summary>值变绿色
	str = str.replace(/(\'{3}\s{0,}&lt;summary&gt;.*?\n)([\s\S]*?)(\'{3}\s{0,}&lt;\/summary&gt;)/gi,
			function() {
				str = arguments[2].replace(/(\'{3})([\s\S]*?)(\n)/g,"$1<font color=\"#008000\">$2</font>$3");
				return(arguments[1]+str+arguments[3]); 
			});
	// <param>值变为绿色
	str = str.replace(/(\'{3}\s{0,}&lt;param([\s\S]*?)&gt;)([\s\S]*?)(&lt;\/param&gt;)/gi,"$1<font color=\"#008000\">$3</font>$4");
	// <returns><example><remarks><value>值变为绿色
	str = str.replace(/(\'{3}\s{0,}&lt;(returns|example|remarks|value)&gt;)([\s\S]*?)(&lt;\/\2&gt;)/gi,
		"$1<font color=\"#008000\">$3</font>$4");
	// 函数头注释处其它字符变为灰色
	str = str.replace(/(\'{3})([\s\S]*?)(<\/SPAN>|\n|$)/gi,"<font color=\"#808080\">$1$2</font>$3");
	return(str);
}

// 格式化VB.NET函数
function FormatBrace_VBDOTNET(str)
{
	// 替换函数头
	str = str.replace(/(.*?)\b(Public|Protected|Private|Function|Sub)\b(.*?)(\()/gi,
		function() {
				var s = GetHeader(arguments[1]+arguments[2],arguments[3]+arguments[4]+")","CodeFunction",false,false)
						+arguments[3]+arguments[4];
				return(s);
			});
	// 替换函数尾	
//***img	str = str.replace(/(.*\b(End Function|End Sub)\b)/gi,"<IMG src=\"ExpandedSubBlockEnd.gif\" align=\"top\"/>$1</span>"); 
	
	return(str);
}

//替换收缩图片
function FormatImage(str)
{
	return(str);
    // 展开和收缩在同一行时，去掉ExpandedSubBlockEnd.gif
//	str = str.replace(/(<IMG src="ContractedSubBlock.gif.*?>)<IMG src="ExpandedSubBlockEnd.gif.*?>/gi,"$1");
/***img	str = str.replace(/(<IMG src="Contracted(Sub)?Block.gif)([\s\S]*?)(\n)/gi,
		function() {
			var s = arguments[3].replace(/<IMG src="Expanded(Sub)?BlockEnd.gif.*?>/gi,"");
			return(arguments[1]+s+arguments[4]);
		});
	// 替换第一个收缩图片为ExpandedBlockStart.gif，并替换第一个收缩图片前的全部InBlock.gif图片为None.gif
	str = str.replace(/([\s\S]*?)(<IMG src="Expanded)(?:Sub)(BlockStart.gif)/i,
			function() {
				var s = arguments[1].replace(/(<IMG src=")(InBlock)(.gif".*?>)/gi,"$1None$3");
				s += arguments[2]+arguments[3];
				return (s);
			});
	str = str.replace(/(<IMG src="Contracted)(?:Sub)(Block.gif)/i,"$1$2");
	// 替换最后一个收缩图片为images/editer/ExpandedBlockEnd.gif，并替换最后一个收缩图片后的全部InBlock.gif图片为None.gif
	str = str.replace(/([\s\S]*)(<IMG src=.*?Expanded)(?:Sub)(BlockEnd.gif)([\s\S]*?)$/i,
			function() {
				var s = arguments[1]+arguments[2]+arguments[3];
				s += arguments[4].replace(/(<IMG src=")(InBlock)(.gif".*?>)/gi,"$1None$3");
				return (s);
			});
			
	str = str.replace(/<IMG src="ExpandedSubBlockEnd.gif" align="top"><IMG src="ExpandedSubBlockStart.gif[\s\S]*?><IMG src="ContractedSubBlock.gif[\s\S]*?>/gi,"<IMG src=\"InBlock.gif\" align=\"top\">");
***img
***/
}

//替换字符串中关键字
function FormatKeyWords(str)
{
	// 字符串值中关键字不变色
	str = str.replace(/(&quot;.*?&quot;)/g,
			function() {
				return (ClearColorTag(arguments[1]));
			});
	return(str);
}
//编辑器插入代码结束


function KindDrawDateEnd()
{
	var range;
	var lang = KE_DATE_DOCUMENT.getElementById('LanguageDropDownList').value;
	var textcode = KE_DATE_DOCUMENT.getElementById('txtCode').value;
	KE_DATE_DOCUMENT.getElementById('txtCode').value="";
	textcode = textcode.replace(/\</g,"&lt;");
	textcode = textcode.replace(/\>/g,"&gt;");
	if (textcode.length <= 0 ) {
		alert(KE_LANG['INPUT_CODE']);
		return false;
	}
	KindEditorForm.focus();
	KindSelect();
	var element = document.createElement("div");
	element.innerHTML = FormateCode(textcode,lang,false,false,"");

	KindInsertItem(element);
	KindDisableMenu();
}
function KindSelection()
{
	if (KE_BROWSER == 'IE') {
		KE_SELECTION = KE_EDITFORM_DOCUMENT.selection;
		KE_RANGE = KE_SELECTION.createRange();
		KE_RANGE_TEXT = KE_RANGE.text;
	} else {
		KE_SELECTION = document.getElementById("KindEditorForm").contentWindow.getSelection();
        KE_RANGE = KE_SELECTION.getRangeAt(0);
		KE_RANGE_TEXT = KE_RANGE.toString();
	}
}
function KindSelect()
{
	if (KE_BROWSER == 'IE') {
		KE_RANGE.select();
	}
}
function KindInsertItem(insertNode)
{
	if (KE_BROWSER == 'IE') {
		if (KE_SELECTION.type.toLowerCase() == 'control') {
			KE_RANGE.item(0).outerHTML = insertNode.outerHTML;
		} else {
			KE_RANGE.pasteHTML(insertNode.outerHTML);
		}
	} else {
        KE_SELECTION.removeAllRanges();
		KE_RANGE.deleteContents();
        var startRangeNode = KE_RANGE.startContainer;
        var startRangeOffset = KE_RANGE.startOffset;
        var newRange = document.createRange();
		if (startRangeNode.nodeType == 3 && insertNode.nodeType == 3) {
            startRangeNode.insertData(startRangeOffset, insertNode.nodeValue);
            newRange.setEnd(startRangeNode, startRangeOffset + insertNode.length);
            newRange.setStart(startRangeNode, startRangeOffset + insertNode.length);
        } else {
            var afterNode;
            if (startRangeNode.nodeType == 3) {
                var textNode = startRangeNode;
                startRangeNode = textNode.parentNode;
                var text = textNode.nodeValue;
                var textBefore = text.substr(0, startRangeOffset);
                var textAfter = text.substr(startRangeOffset);
                var beforeNode = document.createTextNode(textBefore);
                var afterNode = document.createTextNode(textAfter);
                startRangeNode.insertBefore(afterNode, textNode);
                startRangeNode.insertBefore(insertNode, afterNode);
                startRangeNode.insertBefore(beforeNode, insertNode);
                startRangeNode.removeChild(textNode);
            } else {
				if (startRangeNode.tagName.toLowerCase() == 'html') {
					startRangeNode = startRangeNode.childNodes[0].nextSibling;
					afterNode = startRangeNode.childNodes[0];
				} else {
					afterNode = startRangeNode.childNodes[startRangeOffset];
				}
				startRangeNode.insertBefore(insertNode, afterNode);
            }
            newRange.setEnd(afterNode, 0);
            newRange.setStart(afterNode, 0);
        }
        KE_SELECTION.addRange(newRange);
	}
}
function KindExecuteValue(cmd, value)
{
	KE_EDITFORM_DOCUMENT.execCommand(cmd, false, value);
}
function KindSimpleExecute(cmd)
{
	KindEditorForm.focus();
	KE_EDITFORM_DOCUMENT.execCommand(cmd, false, null);
	KindDisableMenu();
}
function KindExecute(cmd, value)
{
	switch (cmd)
	{
		case 'KE_SOURCE':
			var length = document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src.length - 10;
			var image = document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src.substr(length,10);
			if (image == 'source.gif') {
				document.getElementById("KindCodeForm").value = KindHtmlToXhtml(KE_EDITFORM_DOCUMENT.body.innerHTML);
				document.getElementById("KindEditorIframe").style.display = 'none';
				document.getElementById("KindEditTextarea").style.display = 'block';
				KindDisableToolbar(true);
			} else {
				KE_EDITFORM_DOCUMENT.body.innerHTML = KindClearScriptTag(document.getElementById("KindCodeForm").value);
				document.getElementById("KindEditTextarea").style.display = 'none';
				document.getElementById("KindEditorIframe").style.display = 'block';
				KindDisableToolbar(false);
			}
			KindDisableMenu();
			break;
		case 'KE_PRINT':
			KindSimpleExecute('print');
			break;
		case 'KE_UNDO':
			KindSimpleExecute('undo');
			break;
		case 'KE_REDO':
			KindSimpleExecute('redo');
			break;
		case 'KE_CUT':
			KindSimpleExecute('cut');
			break;
		case 'KE_COPY':
			KindSimpleExecute('copy');
			break;
		case 'KE_PASTE':
			KindSimpleExecute('paste');
			break;
		case 'KE_SELECTALL':
			KindSimpleExecute('selectall');
			break;
		case 'KE_SUBSCRIPT':
			KindSimpleExecute('subscript');
			break;
		case 'KE_SUPERSCRIPT':
			KindSimpleExecute('superscript');
			break;
		case 'KE_BOLD':
			KindSimpleExecute('bold');
			break;
		case 'KE_ITALIC':
			KindSimpleExecute('italic');
			break;
		case 'KE_UNDERLINE':
			KindSimpleExecute('underline');
			break;
		case 'KE_STRIKE':
			KindSimpleExecute('strikethrough');
			break;
		case 'KE_JUSTIFYLEFT':
			KindSimpleExecute('justifyleft');
			break;
		case 'KE_JUSTIFYCENTER':
			KindSimpleExecute('justifycenter');
			break;
		case 'KE_JUSTIFYRIGHT':
			KindSimpleExecute('justifyright');
			break;
		case 'KE_JUSTIFYFULL':
			KindSimpleExecute('justifyfull');
			break;
		case 'KE_NUMBEREDLIST':
			KindSimpleExecute('insertorderedlist');
			break;
		case 'KE_UNORDERLIST':
			KindSimpleExecute('insertunorderedlist');
			break;
		case 'KE_INDENT':
			KindSimpleExecute('indent');
			break;
		case 'KE_OUTDENT':
			KindSimpleExecute('outdent');
			break;
		case 'KE_REMOVE':
			KindSimpleExecute('removeformat');
			break;
		case 'KE_ZOOM':
			KindDisplayMenu(cmd);
			break;
		case 'KE_ZOOM_END':
			KindEditorForm.focus();
			KE_EDITFORM_DOCUMENT.body.style.zoom = value;
			KindDisableMenu();
			break;
		case 'KE_TITLE':
			KindDisplayMenu(cmd);
			break;
		case 'KE_TITLE_END':
			KindEditorForm.focus();
			value = '<' + value + '>';
			KindSelect();
			KindExecuteValue('FormatBlock', value);
			KindDisableMenu();
			break;
		case 'KE_FONTNAME':
			KindDisplayMenu(cmd);
			break;
		case 'KE_FONTNAME_END':
			KindEditorForm.focus();
			KindSelect();
			KindExecuteValue('fontname', value);
			KindDisableMenu();
			break;
		case 'KE_FONTSIZE':
			KindDisplayMenu(cmd);
			break;
		case 'KE_FONTSIZE_END':
			KindEditorForm.focus();
			//value = value.substr(1);
			KindSelect();
			KindExecuteValue('fontsize', value);
			KindDisableMenu();
			break;
		case 'KE_TEXTCOLOR':
			KindDisplayMenu(cmd);
			break;
		case 'KE_TEXTCOLOR_END':
			KindEditorForm.focus();
			KindSelect();
			KindExecuteValue('ForeColor', value);
			KindDisableMenu();
			break;
		case 'KE_BGCOLOR':
			KindDisplayMenu(cmd);
			break;
		case 'KE_BGCOLOR_END':
			KindEditorForm.focus();
			if (KE_BROWSER == 'IE') {
				KindSelect();
				KindExecuteValue('BackColor', value);
			} else {
				var startRangeNode = KE_RANGE.startContainer;
				if (startRangeNode.nodeType == 3) {
					var parent = startRangeNode.parentNode;
					var element = document.createElement("font");
					element.style.backgroundColor = value;
					element.appendChild(KE_RANGE.extractContents());
					var startRangeOffset = KE_RANGE.startOffset;
					var newRange = document.createRange();
					var afterNode;
					var textNode = startRangeNode;
					startRangeNode = textNode.parentNode;
					var text = textNode.nodeValue;
					var textBefore = text.substr(0, startRangeOffset);
					var textAfter = text.substr(startRangeOffset);
					var beforeNode = document.createTextNode(textBefore);
					var afterNode = document.createTextNode(textAfter);
					startRangeNode.insertBefore(afterNode, textNode);
					startRangeNode.insertBefore(element, afterNode);
					startRangeNode.insertBefore(beforeNode, element);
					startRangeNode.removeChild(textNode);
					newRange.setEnd(afterNode, 0);
					newRange.setStart(afterNode, 0);
					KE_SELECTION.addRange(newRange);
				}
			}
			KindDisableMenu();
			break;
		case 'KE_ICON':
			KindDisplayMenu(cmd);
			break;
		case 'KE_ICON_END':
			KindEditorForm.focus();
			var element = document.createElement("img");
			element.src = value;
			element.border = 0;
			element.alt = "";
			KindSelect();
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_IMAGE':
			KindDisplayMenu(cmd);
			
			break;
		case 'KE_FLASH':
			KindDisplayMenu(cmd);
			KindFlashIframe.focus();
			KE_FLASH_DOCUMENT.getElementById(cmd+'submitButton').focus();
			break;
		case 'KE_MEDIA':
			KindDisplayMenu(cmd);
			KindMediaIframe.focus();
			KE_MEDIA_DOCUMENT.getElementById(cmd+'submitButton').focus();
			break;
		case 'KE_REAL':
			KindDisplayMenu(cmd);
			KindRealIframe.focus();
			KE_REAL_DOCUMENT.getElementById(cmd+'submitButton').focus();
			break;
		case 'KE_LINK':
			KindDisplayMenu(cmd);
			KindLinkIframe.focus();
			KE_LINK_DOCUMENT.getElementById(cmd+'submitButton').focus();
			break;
		case 'KE_UNLINK':
			KindSimpleExecute('unlink');
			break;
		case 'KE_SPECIALCHAR':
			KindDisplayMenu(cmd);
			break;
		case 'KE_SPECIALCHAR_END':
			KindEditorForm.focus();
			KindSelect();
			var element = document.createElement("span");
			element.appendChild(document.createTextNode(value));
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_LAYER':
			KindDisplayMenu(cmd);
			break;
		case 'KE_LAYER_END':
			KindEditorForm.focus();
			var element = document.createElement("div");
			element.style.padding = "5px";
			element.style.border = "1px solid #AAAAAA";
			element.style.backgroundColor = value;
			var childElement = document.createElement("div");
			childElement.innerHTML = KE_LANG['INPUT_CONTENT'];
			element.appendChild(childElement);
			KindSelect();
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_TABLE':
			KindDisplayMenu(cmd);
			break;
		case 'KE_TABLE_END':
			KindEditorForm.focus();
			var location = value.split(',');
			var element = document.createElement("table");
			element.cellPadding = 0;
			element.cellSpacing = 0;
			element.border = 1;
			element.style.width = "100px";
			element.style.height = "100px";
			for (var i = 0; i < location[0]; i++) {
				var rowElement = element.insertRow(i);
				for (var j = 0; j < location[1]; j++) {
					var cellElement = rowElement.insertCell(j);
					cellElement.innerHTML = "&nbsp;";
				}
			}
			KindSelect();
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_HR':
			KindDisplayMenu(cmd);
			break;
		case 'KE_HR_END':
			KindEditorForm.focus();
			var element = document.createElement("hr");
			element.width = "100%";
			element.color = value;
			element.size = 1;
			KindSelect();
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_DATE':
			KindDisplayMenu(cmd);
			KindDateIframe.focus();
			KE_DATE_DOCUMENT.getElementById(cmd+'submitButton').focus();
			break;
		case 'KE_TIME':
			KindEditorForm.focus();
			KindSelection();
			var date = new Date();
			var hour = date.getHours().toString(10);
			hour = hour.length < 2 ? '0' + hour : hour;
			var minute = date.getMinutes().toString(10);
			minute = minute.length < 2 ? '0' + minute : minute;
			var second = date.getSeconds().toString(10);
			second = second.length < 2 ? '0' + second : second;
			var value = hour + ':' + minute + ':' + second;
			var element = document.createElement("span");
			element.appendChild(document.createTextNode(value));
			KindInsertItem(element);
			KindDisableMenu();
			break;
		case 'KE_PREVIEW':
			eval(KE_OBJ_NAME).data();
			var newWin = window.open('', 'kindPreview','width=800,height=600,left=30,top=30,resizable=yes,scrollbars=yes');
			KindWriteFullHtml(newWin.document, document.getElementsByName(eval(KE_OBJ_NAME).hiddenName)[0].value);
			KindDisableMenu();
			break;
		case 'KE_ABOUT':
			KindDisplayMenu(cmd);
			break;
		default: 
			break;
	}
}
function KindDisableToolbar(flag)
{
	if (flag == true) {
		document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src = KE_SKIN_PATH + 'design.gif';
		for (i = 0; i < KE_TOOLBAR_ICON.length; i++) {
			var el = document.getElementById(KE_TOOLBAR_ICON[i][0]);
			if (KE_TOOLBAR_ICON[i][0] == 'KE_SOURCE' || KE_TOOLBAR_ICON[i][0] == 'KE_PREVIEW' || KE_TOOLBAR_ICON[i][0] == 'KE_ABOUT') {
				continue;
			}
			el.style.visibility = 'hidden';
		}
	} else {
		document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src = KE_SKIN_PATH + 'source.gif';
		for (i = 0; i < KE_TOOLBAR_ICON.length; i++) {
			var el = document.getElementById(KE_TOOLBAR_ICON[i][0]);
			el.style.visibility = 'visible';
			KE_EDITFORM_DOCUMENT.designMode = 'On';
		}
	}
}
function KindCreateIcon(icon)
{
	var str = '<div><img id="'+ icon[0] +'" src="' + KE_SKIN_PATH + icon[1] + '" alt="' + icon[2] + '" title="' + icon[2] + 
			'" align="absmiddle" style="border:1px solid ' + KE_TOOLBAR_BG_COLOR +';cursor:pointer;height:20px;';
	str += '" onclick="javascript:KindExecute(\''+ icon[0] +'\');" '+
			'onmouseover="javascript:this.style.border=\'1px solid ' + KE_MENU_BORDER_COLOR + '\';" ' +
			'onmouseout="javascript:this.style.border=\'1px solid ' + KE_TOOLBAR_BG_COLOR + '\';" ';
	str += '></div>';
	return str;
}
function KindCreateToolbar()
{
	var htmlData = '<table cellpadding="0" cellspacing="0" border="0" height="26"><tr>';
	if (KE_EDITOR_TYPE == 'full') {
		for (i = 0; i < KE_TOP_TOOLBAR_ICON.length; i++) {
			htmlData += '<td style="padding:2px;">' + KindCreateIcon(KE_TOP_TOOLBAR_ICON[i]) + '</td>';
		}
		htmlData += '</tr></table><table cellpadding="0" cellspacing="0" border="0" height="26"><tr>';
		for (i = 0; i < KE_BOTTOM_TOOLBAR_ICON.length; i++) {
			htmlData += '<td style="padding:2px;">' + KindCreateIcon(KE_BOTTOM_TOOLBAR_ICON[i]) + '</td>';
		}
	} else {
		for (i = 0; i < KE_SIMPLE_TOOLBAR_ICON.length; i++) {
			htmlData += '<td style="padding:2px;">' + KindCreateIcon(KE_SIMPLE_TOOLBAR_ICON[i]) + '</td>';
		}
	}
	htmlData += '</tr></table>';
	return htmlData;
}
function KindWriteFullHtml(documentObj, content)
{
	var editHtmlData = '';
	editHtmlData += '<html>\r\n<head>\r\n<title>KindEditor</title>\r\n';
	editHtmlData += '<link href="'+KE_CSS_PATH+'" rel="stylesheet" type="text/css">\r\n</head>\r\n<body>\r\n';
	editHtmlData += content;
	editHtmlData += '\r\n</body>\r\n</html>\r\n';
	documentObj.open();
	documentObj.write(editHtmlData);
	documentObj.close();
}
function KindEditor(objName,objgroupid) 
{
	this.objName = objName;
	this.hiddenName = objName;
	this.groupid = objgroupid;
	this.siteDomain;
	this.editorType;
	this.safeMode;
	this.uploadMode;
	this.editorWidth;
	this.editorHeight;
	this.skinPath;
	this.iconPath;
	this.imageAttachPath;
	this.imageUploadCgi;
	this.cssPath;
	this.menuBorderColor;
	this.menuBgColor;
	this.menuTextColor;
	this.menuSelectedColor;
	this.toolbarBorderColor;
	this.toolbarBgColor;
	this.formBorderColor;
	this.formBgColor;
	this.buttonColor;
	this.init = function()
	{
		if (this.siteDomain) KE_SITE_DOMAIN = this.siteDomain;
		if (this.editorType) KE_EDITOR_TYPE = this.editorType.toLowerCase();
		if (this.safeMode) KE_SAFE_MODE = this.safeMode;
		if (this.uploadMode) KE_UPLOAD_MODE = this.uploadMode;
		if (this.editorWidth) KE_WIDTH = this.editorWidth;
		if (this.editorHeight) KE_HEIGHT = this.editorHeight;
		if (this.skinPath) KE_SKIN_PATH = this.skinPath;
		if (this.iconPath) KE_ICON_PATH = this.iconPath;
		if (this.imageAttachPath) KE_IMAGE_ATTACH_PATH = this.imageAttachPath;
		if (this.groupid) KE_IMAGE_UPLOAD_CGI = "/editor/upload.php?groupid="+this.groupid;
		if (this.cssPath) KE_CSS_PATH = this.cssPath;
		if (this.menuBorderColor) KE_MENU_BORDER_COLOR = this.menuBorderColor;
		if (this.menuBgColor) KE_MENU_BG_COLOR = this.menuBgColor;
		if (this.menuTextColor) KE_MENU_TEXT_COLOR = this.menuTextColor;
		if (this.menuSelectedColor) KE_MENU_SELECTED_COLOR = this.menuSelectedColor;
		if (this.toolbarBorderColor) KE_TOOLBAR_BORDER_COLOR = this.toolbarBorderColor;
		if (this.toolbarBgColor) KE_TOOLBAR_BG_COLOR = this.toolbarBgColor;
		if (this.formBorderColor) KE_FORM_BORDER_COLOR = this.formBorderColor;
		if (this.formBgColor) KE_FORM_BG_COLOR = this.formBgColor;
		if (this.buttonColor) KE_BUTTON_COLOR = this.buttonColor;
		KE_OBJ_NAME = this.objName;
		KE_BROWSER = KindGetBrowser();
		KE_TOOLBAR_ICON = Array();
		for (var i = 0; i < KE_TOP_TOOLBAR_ICON.length; i++) {
			KE_TOOLBAR_ICON.push(KE_TOP_TOOLBAR_ICON[i]);
		}
		for (var i = 0; i < KE_BOTTOM_TOOLBAR_ICON.length; i++) {
			KE_TOOLBAR_ICON.push(KE_BOTTOM_TOOLBAR_ICON[i]);
		}
	}
	this.show = function()
	{
		this.init();
		var widthStyle = 'width:' + KE_WIDTH + ';';
		var widthArr = KE_WIDTH.match(/(\d+)([px%]{1,2})/);
		var iframeWidthStyle = 'width:' + (parseInt(widthArr[1]) - 2).toString(10) + widthArr[2] + ';';
		var heightStyle = 'height:' + KE_HEIGHT + ';';
		var heightArr = KE_HEIGHT.match(/(\d+)([px%]{1,2})/);
		var iframeHeightStyle = 'height:' + (parseInt(heightArr[1]) - 3).toString(10) + heightArr[2] + ';';
		if (KE_BROWSER == '') {
			var htmlData = '<div id="KindEditTextarea" style="' + widthStyle + heightStyle + '">' +
			'<textarea name="KindCodeForm" id="KindCodeForm" style="' + widthStyle + heightStyle + 
			'padding:0;margin:0;border:1px solid '+ KE_FORM_BORDER_COLOR + 
			';font-size:12px;line-height:16px;font-family:'+KE_FONT_FAMILY+';background-color:'+ 
			KE_FORM_BG_COLOR +';">' + document.getElementsByName(this.hiddenName)[0].value + '</textarea></div>';
			document.open();
			document.write(htmlData);
			document.close();
			return;
		}
		var htmlData = '<div style="font-family:'+KE_FONT_FAMILY+';">';
		htmlData += '<div style="'+widthStyle+';border:1px solid ' + KE_TOOLBAR_BORDER_COLOR + ';background-color:'+ KE_TOOLBAR_BG_COLOR +'">';
		htmlData += KindCreateToolbar();
		htmlData += '</div><div id="KindEditorIframe" style="' + widthStyle + heightStyle + 
			'border:1px solid '+ KE_FORM_BORDER_COLOR +';border-top:0;">' +
			'<iframe name="KindEditorForm" id="KindEditorForm" frameborder="0" style="' + iframeWidthStyle + iframeHeightStyle + 
			'padding:0;margin:0;border:0;"></iframe></div>';
		if (KE_EDITOR_TYPE == 'full') {
			htmlData += '<div id="KindEditTextarea" style="' + widthStyle + heightStyle + 
				'border:1px solid '+ KE_FORM_BORDER_COLOR +';background-color:'+ 
				KE_FORM_BG_COLOR +';border-top:0;display:none;">' +
				'<textarea name="KindCodeForm" id="KindCodeForm" style="' + iframeWidthStyle + iframeHeightStyle + 
				'padding:0;margin:0;border:0;font-size:12px;line-height:16px;font-family:'+KE_FONT_FAMILY+';background-color:'+ 
				KE_FORM_BG_COLOR +';" onclick="javascirit:parent.KindDisableMenu();"></textarea></div>';
		}
		htmlData += '</div>';
		for (var i = 0; i < KE_POPUP_MENU_TABLE.length; i++) {
			if (KE_POPUP_MENU_TABLE[i] == 'KE_IMAGE') {
				htmlData += '<span id="InsertIframe">';
			}
			htmlData += KindPopupMenu(KE_POPUP_MENU_TABLE[i]);
			if (KE_POPUP_MENU_TABLE[i] == 'KE_REAL') {
				htmlData += '</span>';
			}
		}
		document.open();
		document.write(htmlData);
		document.close();
		if (KE_BROWSER == 'IE') {
			KE_EDITFORM_DOCUMENT = document.frames("KindEditorForm").document;
		} else {
			KE_EDITFORM_DOCUMENT = document.getElementById('KindEditorForm').contentDocument;
		}
		KindDrawIframe('KE_IMAGE');
		KindDrawIframe('KE_FLASH');
		KindDrawIframe('KE_MEDIA');
		KindDrawIframe('KE_REAL');
		KindDrawIframe('KE_LINK');
		KindDrawIframe('KE_DATE');
		KE_EDITFORM_DOCUMENT.designMode = 'On';
		KindWriteFullHtml(KE_EDITFORM_DOCUMENT, document.getElementsByName(eval(KE_OBJ_NAME).hiddenName)[0].value);
		var el = KE_EDITFORM_DOCUMENT.body;
		if (KE_EDITFORM_DOCUMENT.addEventListener){
			KE_EDITFORM_DOCUMENT.addEventListener('click', KindDisableMenu, false); 
		} else if (el.attachEvent){
			el.attachEvent('onclick', KindDisableMenu);
		}
	}
	this.data = function()
	{
		var htmlResult;
		if (KE_BROWSER == '') {
			htmlResult = document.getElementById("KindCodeForm").value;
		} else {
			if (KE_EDITOR_TYPE == 'full') {
				var length = document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src.length - 10;
				var image = document.getElementById(KE_TOP_TOOLBAR_ICON[0][0]).src.substr(length,10);
				if (image == 'source.gif') {
					htmlResult = KE_EDITFORM_DOCUMENT.body.innerHTML;
				} else {
					htmlResult = document.getElementById("KindCodeForm").value;
				}
			} else {
				htmlResult = KE_EDITFORM_DOCUMENT.body.innerHTML;
			}
		}
		KindDisableMenu();
		htmlResult = KindHtmlToXhtml(htmlResult);
		htmlResult = KindClearScriptTag(htmlResult);
		document.getElementsByName(this.hiddenName)[0].value = htmlResult;
		return htmlResult;
	}
}