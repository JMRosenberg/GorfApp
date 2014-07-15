function init() {
    var startpoint = new google.maps.LatLng(42.4073, -71.1195);
    var myOptions = {
	zoom: 18,
	center: startpoint,
	mapTypeId: google.maps.MapTypeId.HYBRID
    };

    map = new google.maps.Map(document.getElementById("gorfMap"), myOptions);
    map.setTilt(0);
    
    drawHoles();
}

function drawHoles() {
    for(i in holes) {
	if(holes[i].startPos == undefined) {
	    continue;
	}
	// Create the markers
	var markers = [];
	var line = [];
	var startMarker = new google.maps.Marker({
	    position: holes[i].startPos,
	    title: "<h3>Hole " + i + "</h3>"
	});
	startMarker.setMap(map);
	markers.push(startMarker);
	line.push(holes[i].startPos);
	if(holes[i].pivotPos) {
	    /*var pivotMarker = new google.maps.Marker({
		position: holes[i].pivotPos
	    });
	    pivotMarker.setMap(map);
	    markers.push(pivotMarker);*/
	    line.push(holes[i].pivotPos);
	}
	/*var endMarker = new google.maps.Marker({
	    position: holes[i].endPos
	});
	endMarker.setMap(map);
	markers.push(endMarker);*/
	line.push(holes[i].endPos);
	
	// Draw the polyline
	var flightPath = new google.maps.Polyline({
	    path: line,
	    geodesic: true,
	    strokeColor: colors[i],
	    strokeOpacity: 1.0,
	    strokeWeight: 2
	});
	flightPath.setMap(map);
    }
}



holes = [
    {
	par: 3,
	distance: 299,
	startPos: new google.maps.LatLng(42.408149,-71.12075),
	pivotPos: undefined,
	endPos: new google.maps.LatLng(42.407807,-71.119743)
    },
    {
	par: 4,
	distance: 364,
	startPos: new google.maps.LatLng(42.407793,-71.119761),
	pivotPos: new google.maps.LatLng(42.407485, -71.118899),
	endPos: new google.maps.LatLng(42.407363,-71.119252)
    },
    {
	par: 4,
	distance: 433,
	startPos: new google.maps.LatLng(42.407342,-71.11927),
	pivotPos: new google.maps.LatLng(42.406888, -71.118334),
	endPos: new google.maps.LatLng(42.406594,-71.118055)
    },
    {
	par: 4,
	distance: 389,
	startPos: new google.maps.LatLng(42.406619,-71.118055),
	pivotPos: undefined,
	endPos: new google.maps.LatLng(42.407485,-71.118899)
    },
    {
	par: 4,
	distance: 415,
	startPos: new google.maps.LatLng(42.407562,-71.118799),
	pivotPos: undefined,
	endPos: new google.maps.LatLng(42.406596,-71.119617)
    },
    {
	par: 3,
	distance: 344,
	startPos: new google.maps.LatLng(42.406574,-71.119626),
	pivotPos: undefined,
	endPos: new google.maps.LatLng(42.406409,-71.120879)
    },
    {
	par: 4,
	distance: 365,
	startPos: new google.maps.LatLng(42.406424,-71.120836),
	pivotPos: undefined,
	endPos: new google.maps.LatLng(42.407314,-71.120215)
    },
    {
	par: 4,
	distance: 428,
	startPos: new google.maps.LatLng(42.407249,-71.11997),
	pivotPos: new google.maps.LatLng(42.407439, -71.119862),
	endPos: new google.maps.LatLng(42.408156,-71.120745)
    },
    {
    }
];

var colors = [
    '#000000',
    '#0000FF',
    '#00FFFF',
    '#00FF00',
    '#FFFF00',
    '#FFFFFF',
    '#FF00FF',
    '#FF0000'
];
