
var date = new Date(); // today

makeTable();

function makeTable() {		
    var items = { fajr: 'Fajr', sunrise: 'Sunrise', 
                dhuhr: 'Dhuhr',
               //   asr: 'Asr',
                  sunset: 'Sunset', 
                maghrib: 'Maghrib',
               //   isha: 'Isha'
           };
           var times = prayTimes.getTimes(date, [47.608013, -122.335167], -8);
           var tbody = document.createElement('table');
           
           tbody.appendChild(makeTableRow(items, items, 'head-row'));
           

           
        //    var klass = date ? 'today-row' : '';
           tbody.appendChild(makeTableRow(times, items));
           removeAllChild($('table'));
           $('table').appendChild(tbody);
        };

        function makeTableRow(data, items) {
            var row = document.createElement('tr');
            
            for (var i in items) {
                var cell = document.createElement('td');
                cell.setAttribute("style", " color:blue; font-weight: bold;  text-align: center;background: white; padding: 2px; ");
                cell.innerHTML = data[i];
                cell.style.width = i=='day' ? '2.5em' : '3.7em';
                row.appendChild(cell);
            }
            // row.className = klass;
            return row;		
        }
        function removeAllChild(node) {
            if (node == undefined || node == null)
                return;
       
            while (node.firstChild)
                node.removeChild(node.firstChild);
        }

	// var times = prayTimes.getTimes(date, [47.608013, -122.335167], -8);
	// var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr','Sunset', 'Maghrib', 'Isha'];

	// var html = document.createElement('tbody');
	// html +=  date.toLocaleDateString();
	// for(var i in list)	{
	// 	html += '<tr><td>'+ list[i]+ '</td>';
	// 	html += '<td>'+ times[list[i].toLowerCase()]+ '</td></tr>';
	// }
	// html += '</table>';
	// document.getElementById('table').innerHTML = html;
    function $(id) {
        return document.getElementById(id);
    };