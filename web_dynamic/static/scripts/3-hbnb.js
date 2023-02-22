$(document).ready(function(){
    $('input[type=checkbox]').change(function() {
        const my_dict = {};
       if  (this.checked) {
        my_dict[this.dataset.name] = this.dataset.id;
       }
       else {
        delete this.dataset.id
       }

       $('.amenities h4').text(Object.keys(my_dict)).sort().join(", ")
    })
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data, message) {
        if (data) {
            $("div#api_status").addClass(available)
        }
        else {
            $("div#api_status").removeClass(available)
        }
    })

    $.post({
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        headers: {
            "Content-Type": application/json
        },
        data: {},
        success: function(data) {
            data.foreach(function(place) {
               $("section.places").html(`
               <article>
               <div class="title_box">
               <h2>{{ place.name }}</h2>
               <div class="price_by_night">$${ place.price_by_night }</div>
             </div>
             <div class="information">
               <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
                   <div class="number_rooms">${ place.number_rooms } Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
                   <div class="number_bathrooms">${ place.number_bathrooms } Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
             </div>
             <div class="user">
                   <b>Owner:</b> ${ place.user.first_name } ${ place.user.last_name }
                 </div>
                 <div class="description">
               ${ place.description | safe }
                 </div>
               </article>`) 
            } )
        }

    })
    
})