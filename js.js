function laungue() {
    document.getElementById('menu').style.visibility = 'visible';
	document.getElementById('button').style.visibility = 'hidden';
}
//while(true) {
//    let translated_status=document.getElementsByTagName("html")[0].getAttribute("class")
//    if (translated_status == "translated-ltr"){
//        console.log("True");
//        document.getElementById('menu').style.visibility = 'hidden';
//	    document.getElementById('button').style.visibility = 'hidden';
//        break;
//    }else{
//        console.log("False")
//    }
//}
function kategoriiX(){
    document.getElementById('jenreAndYears').style.height = '0px';
    document.getElementById('jenreAndYears').style.overflow = 'hidden';
}
function kategories(){
    document.getElementById('jenreAndYears').style.height = '530px';
    document.getElementById('jenreAndYears').style.overflow = 'visible'
}