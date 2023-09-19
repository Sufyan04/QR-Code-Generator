function generateQR(){
    document.querySelector("#qr-image").style.display="block";
    let QR=document.querySelector("#text").value;
    if(QR.trim().length==0){
        document.querySelector("#qr-image .error").innerHTML="Please Enter text";
        document.querySelector("#img").style.display="none";
    }
    else{
        document.querySelector("#img").style.display="block";
        document.querySelector("#qr-image .error").innerHTML="";
        document.querySelector("#img").src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QR;
    }

}