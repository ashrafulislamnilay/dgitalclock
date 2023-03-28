
setInterval(() => {
    let a = new Date();
    let hour =a.getHours();
    let minutes = a.getMinutes();
    let Seconds = a.getSeconds();
    
        document.getElementById("Hour").innerHTML = hour;
        if(hour<=9){
            document.getElementById("Hour").innerHTML = "0"+hour;
        }
        document.getElementById("minutes").innerHTML = minutes;
        if(minutes<=9){
            document.getElementById("minutes").innerHTML = "0"+minutes;
        }
        document.getElementById("seconds").innerHTML = Seconds;
        if(Seconds<=9){
            document.getElementById("seconds").innerHTML = "0"+Seconds;
        }
    //    24hour to 12 hour set 
        if (hour==0) {
            document.getElementById("Hour").innerHTML = "12";    
        }
        if (hour==13) {
            document.getElementById("Hour").innerHTML = "01";    
        }
        if (hour==14) {
            document.getElementById("Hour").innerHTML = "02";    
        }
        if (hour==14) {
            document.getElementById("Hour").innerHTML = "03";    
        }
        if (hour==16) {
            document.getElementById("Hour").innerHTML = "04";    
        }
        if (hour==17) {
            document.getElementById("Hour").innerHTML = "05";    
        }
        if (hour==18) {
            document.getElementById("Hour").innerHTML = "06";    
        }
        if (hour==19) {
            document.getElementById("Hour").innerHTML = "07";    
        }
        if (hour==20) {
            document.getElementById("Hour").innerHTML = "08";    
        }
        if (hour==21) {
            document.getElementById("Hour").innerHTML = "09";    
        }
        if (hour==22) {
            document.getElementById("Hour").innerHTML = "10";    
        }
        if (hour==23) {
            document.getElementById("Hour").innerHTML = "11";    
        }
        /*Am Pm Set */
        if (hour<=11){
            document.getElementById("ampm").innerHTML = "AM" ;
        }
        else{
            document.getElementById("ampm").innerHTML = "PM" ;       
        }



//*Day */
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[a.getDay()];
document.getElementById("day").innerHTML = day +",";
/*Current Date */
let currentDate = a.getDate();
document.getElementById("date").innerHTML = currentDate +",";
/*Month */
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let Month = month[a.getMonth()];
document.getElementById("month").innerHTML = Month;
/**Year */

let Year =a.getFullYear();
document.getElementById("year").innerHTML = Year ;

},1000);



