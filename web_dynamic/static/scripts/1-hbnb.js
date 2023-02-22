$(document).ready(function(){
    $('input[type=checkbox]').change(function() {
        const my_dict = {};
       if  (this.checked) {
        my_dict[this.data-set.name] = this.data-set.id;
       }
       else {
        delete this.data-set.id
       }

       $('.amenities h4').text(Objects.key[my_dict]).sort().join(", ")
    })
})