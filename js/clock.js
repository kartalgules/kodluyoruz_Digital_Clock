const name =prompt("Lütfen isminizi giriniz..");
document.getElementById("myName").innerHTML = name;
const image = document.querySelector("img");
image.style.marginTop = "120px";
image.style.width = "17%";
document.body.style.fontFamily = "Cambria, sans serif";
document.body.style.textAlign = "center";
document.body.style.color = "#e98208";
document.body.style.letterSpacing = "7px";
document.body.style.position = "relative";

function Time(){
   let timeZone = new Date();
   var hourCheck = timeZone.getHours();
   var hour = (hourCheck<10) ? "0" + hourCheck : hourCheck;
   var minuteCheck = timeZone.getMinutes();
   var minute = (minuteCheck<10) ? "0" + minuteCheck : minuteCheck;
   var secondCheck = timeZone.getSeconds();
   var second = (secondCheck<10) ? "0" + secondCheck : secondCheck;
   var dayCheck = timeZone.getDay();
   var day = "";
   if(dayCheck == 1){
       day = "Pazartesi";
   }else if (dayCheck == 2){
       day = "Salı";
   }else if (dayCheck == 3){
       day = "Çarşamba";
   }else if (dayCheck == 4){
       day = "Perşembe";
   }else if (dayCheck == 5){
       day = "Cuma";
   }else if (dayCheck == 6){
       day = "Cumartesi";
   }else if (dayCheck == 7){
       day = "Pazar";
   }
   document.getElementById("clk").innerHTML = hour + "." + minute  + "." + second +" " + day;
};
setInterval(function(){Time()},1000)

