$(document).ready(function(){


var mymap = L.map('mapid').setView([52.96341, 14.438142], 17);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
  }).addTo(mymap);
  var markers = L.icon({
    iconUrl: '_assets/marker.png',

    iconSize:     [48, 85], 
    iconAnchor:   [22, 94],
	popupAnchor:  [-65, -115]
});
	$(".result_box").hover(
	function(){
	$(".leaflet-popup-content").animate({
		width:"280px",
		height:"330px",
	},1500);
	 $(".leaflet-popup-close-button").css("display","block")
	 	 $(".leaflet-popup-pane").css('display','block')
	var topic_active =$(this).find(".name").text()
		$("topic").text(topic_active);
	var type_active =$(this).find(".type").text()
		$("type").text(type_active)
	var city_active=$(this).find(".city").text()
		$("city").text(city_active)
		}
	);
  var marker = L.marker([52.960688, 14.437359], 
  {icon: markers})
  .addTo(mymap)
  .bindPopup("<img src='_img/logo_borsuk.jpg'/><br>"+"<topic></topic><type></type><circle></circle><city></city><stars_container><star_ico>")


  .openPopup();
  

  $("city").append("<li><span>kraków</span</li>")
  $("circle").addClass("circle")
  $("stars_container").addClass("stars_map")
  $("star_ico").append('<i class="fas fa-star"></i>')
  $("star_ico").append('<i class="fas fa-star"></i>')
  $("star_ico").append('<i class="fas fa-star"></i>')
  $("star_ico").append('<i class="fas fa-star"></i>')
  $("star_ico").append('<i class="fas fa-star-half-alt"></i>')
  $(".leaflet-popup-close-button").text('X') 
  $(".leaflet-popup-close-button").css("top","10px").css("right","10px").css("border-style","solid").css("border-radius","50%").css("width","26px").css("height","27px").css("padding","3px 0px 0 0").css("display","none")
  $(".leaflet-popup-tip").css("padding","76px 50px 21px 50px").css("margin","-67px auto 0").css("transform","rotate(-45deg)")
  $(".leaflet-popup-tip-container").css("width","124px").css("height","54px").css("left","38%").css("margin-left","-20px")
	 $(".leaflet-popup-content").css("width","0px").css("height","0px")		
	 $(".leaflet-popup-pane").css('display','none')
});