(function ($) {

    $(function () {
        $.fn.displayMarks = function (data) {
            document.getElementById("display_marks").innerHTML = data;
        }

        $.fn.diplaySave = function(data){
            document.getElementById('save_div').innerHTML = data;
        }
        
    });

})(jQuery);