var getMonth = [
  'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Julí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'
]
$.ajax({
  'url': 'https://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json',
  'error': function(response) {  $("#error").text("Ekki næst samband við vefþjónustu, vinsamlegast reynið aftur síðar");},
  'success': function(response) {
    console.log(response);
    var events = $("#g");
    for(var i = 0; i < response.results.length; i++){
    var event = $("<div class='event'> </div>");
    var concertDate=new Date(response.results[i].dateOfShow)
      event.append("<div>" + response.results[i].eventDateName + "</div>");
      event.append("<div>" + response.results[i].eventHallName + "</div>");
      event.append("<div>"+concertDate.getDate()+"."+getMonth[concertDate.getMonth()]+" "+concertDate.getFullYear()+" "+concertDate.getHours()+"."+concertDate.getMinutes()+"</div>");
      event.append("<div class='d'><img class='img-responsive' src='" + response.results[i].imageSource + "' alt='mynd viðburðar' ></img></div>");
      events.append(event);
    }
  }
});
/*response.results[0].eventDateName
response.restults[i].eventDateName
response.results[i].imageSource
response.results[i].dateOfShow
response.results[i].eventHallName*/

 //Þegar maður skrollar niður um 20px kemur takkinn upp á skjáinn
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
//Þegar ýtt er á "upp" takkann fer maður efst á síðuna
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}