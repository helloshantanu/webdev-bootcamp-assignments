const request = require('request');
request('http://www.omdbapi.com/?apikey=c6972b66&i=tt1285016', function(error, response, body){
    console.error('error', error);
    console.log('response', response&&response.statuscode);
    var parsedData= JSON.parse(body);
    var display = parsedData.Ratings[0].Source ;
    console.log(display);
});


