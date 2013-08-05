var request = require('request'); // lets you connect to web pages

var cheerio = require('cheerio'); // cheerio mimics the DOM and jQuery/CSS style selectors


for(counter=10;counter<30;counter=counter+10){
	var url = 'http://www.rightmove.co.uk/property-for-sale/Edinburgh.html?index=' + counter;
	console.log(url);
	request(url, function(err, resp, body) {

	if (err)

		throw err;

		$ = cheerio.load(body);

		$('.address.bedrooms a:contains()').each(function() {

		console.log ($(this).attr('href'));

		request ('http://www.rightmove.co.uk' + $(this).attr('href'), function(err,resp,body) {

			$ = cheerio.load(body);
			
			console.log ('Title: ' + $('#propertyAddress h1').text());
			console.log ('Address: ' + $('#addresscontainer h2').text());
			console.log ('Price: ' + $('#propertyprice').text());
			console.log ('Description: ' + $('.propertyDetailDescription').text());
			console.log ('Images: ' + $('meta[property="og:image"]').attr('content'));


		});
	});
});
}
