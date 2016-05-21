
$(function(){
      getRequest();
});


function getRequest() {

var auth = {
             
                consumerKey : "flINaTdzYOcnVhg_o4HxKQ",
                consumerSecret : "3vSMRGbweP2eKouZs7LG0ADBjoo",
                accessToken : "ykDPbThrMozb-oG-36ETSksJ3gDNtFrn",
                accessTokenSecret : "dtLQD6jiQKbIqQ1pXYaTK2wGSoA",
                serviceProvider : {
                    signatureMethod : "HMAC-SHA1"
                }
            };

            var terms = 'food';
            var near = 'San+Francisco';

            var accessor = {
                consumerSecret : auth.consumerSecret,
                tokenSecret : auth.accessTokenSecret
            };
            parameters = [];
            parameters.push(['term', terms]);
            parameters.push(['location', near]);
            parameters.push(['callback', 'cb']);
            parameters.push(['oauth_consumer_key', auth.consumerKey]);
            parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
            parameters.push(['oauth_token', auth.accessToken]);
            parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

            var message = {
                'action' : 'http://api.yelp.com/v2/search',
                'method' : 'GET',
                'parameters' : parameters
            };

            OAuth.setTimestampAndNonce(message);
            OAuth.SignatureMethod.sign(message, accessor);

            var parameterMap = OAuth.getParameterMap(message.parameters);
            console.log(parameterMap);

            $.ajax({
                'url' : message.action,
                'data' : parameterMap,
                'dataType' : 'jsonp',
                'jsonpCallback' : 'cb',
                'success' : function(data, textStats, XMLHttpRequest) {
                    console.log(data);
                    //$("body").append(output);
                }
            });


 
}

            