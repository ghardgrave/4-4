
$(function(){


/* displays current exchange*/
showLive();
  
$('#datepicker').datepicker({
    dateFormat: "yy-mm-dd",
    inline : true,
    altField : '#hiddenFieldID',
    onSelect : function(){
        var olddate = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yyyy' }).val();
        console.log(olddate);
        getRequest(olddate);
    }
});


});   
     



function showLive(){
// set endpoint and your access key


// get the most recent exchange rates via the "live" endpoint:
  $.ajax({
    url: 'http://apilayer.net/api/live?access_key=bd09618e70168a850cdd4823ad353816',   
    dataType: 'jsonp',
    success: function(json) {

    $(".live").append("<p>"+json.quotes.USDTWD+"</p>");

    }
  });

}


function getRequest(olddate) {

$.ajax({
    url: 'http://apilayer.net/api/historical?access_key=bd09618e70168a850cdd4823ad353816&date='+olddate,   
    dataType: 'jsonp',
    success: function(json) {

    $(".histrate").html("<p>"+json.quotes.USDTWD+"</p>");

        
    }
})
}           

function showResults(results){
 
}

