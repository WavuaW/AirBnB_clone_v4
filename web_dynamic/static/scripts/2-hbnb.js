$(document).ready(function(){
    $('input[type=checkbox]').change(function() {
        const my_dict = {};
       if  (this.checked) {
        my_dict[this.data-set.name] = this.data-set.id;
       }
       else {
        delete this.data-set.id
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
    
})