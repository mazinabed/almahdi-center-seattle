
  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.slider').slider({full_width: true});

});

var date = new Date(); // today
	var times = prayTimes.getTimes(date, [47.608013, -122.335167], -8);
	var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr','Sunset', 'Maghrib', 'Isha'];

	var html = '<table id="timetable">';
	html +=  date.toLocaleDateString();
	for(var i in list)	{
		html += '<tr><td>'+ list[i]+ '</td>';
		html += '<td>'+ times[list[i].toLowerCase()]+ '</td></tr>';
	}
	html += '</table>';
	document.getElementById('table').innerHTML = html;
    