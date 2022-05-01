let isim = prompt("İsminizi Giriniz");
const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

document.getElementById("myName").innerText = isim;
document.getElementById("myName").setAttribute("data-before",isim);

function showTime(){
    let tarih = new Date();
    let saat = tarih.getHours();
    if(saat < 10){
        saat = "0" + saat;
    }
    let dakika = tarih.getMinutes();
    if(dakika < 10){
        dakika = "0" + dakika;
    }
    let saniye = tarih.getSeconds();
    if(saniye < 10){
        saniye = "0" + saniye;
    }
    let gun = tarih.getDay();
    let yazilacak = `${saat}:${dakika}:${saniye} ${gunler[gun]}`;
    document.getElementById("myClock").innerHTML = yazilacak;
    setTimeout(showTime,1000);
}