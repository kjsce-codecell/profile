var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

var test;

setInterval(updateGradient,10);
var getData = (function($){
	var URL = "https://api.github.com/repos/KJSCE-Codecell/profile/commits?per_page=200"
	$.get(URL,function(data,status){
			console.log(data);
			test = data;
			var img;
			var thumbnail_b = "<a class='thumbnail' target='_blank' href='";
			var thumbnail_m = "'>";
			var thumbnail_a = "</a>";
			var img_b = "<img src='";
			var img_a = "' alt='' class='img-responsive'>";
			var container_b = "<div class='col-md-3 col-xs-6 col-lg-3' id='author'><div class='container-fluid'>";
			var container_a = "</div>";	
			var caption_b =  "<div class='caption'>";
			var caption_a = "</div></div>";
			var h2_b = " <strong>"
			var h2_a = "</strong>"
			var commit_message_b = "<p>";
			var commit_message_a = "</p>";
			//console.log(template)
			var authors = [];
			data.forEach(function(d){
				author = d.author;
				if($.inArray(author.login,authors) != -1){
					return true;	
				} 
				authors.push(author.login);
				if(author==null){
					return true;
				}
				//console.log(d.commit.message);
				var mes = d.commit.message;
				var name = d.commit.author.name;
				if(name == ""){
					name = mes;
				}
				var date = d.commit.committer.date;

				if(mes=="Initial commit") {
					return true;
				}		
				console.log(date);
				// img = "<img src=" + author.avatar_url + "/>  <h2>" +author.login +"</h2> <h3>"+mes+"</h3>"
				var template = 
				container_b +
					thumbnail_b + d.author.html_url + thumbnail_m + 
						img_b + 
							author.avatar_url + 
						img_a +  
					thumbnail_a +
					caption_b +
						h2_b + 
							author.login +
						h2_a +
						commit_message_b +
							name+
						commit_message_a+
					caption_a +
				 container_a;
			$('#contrib').append(template);

			});
			
	});


})($);
