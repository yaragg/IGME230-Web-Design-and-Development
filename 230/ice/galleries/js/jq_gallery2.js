"use strict";

var index = 0;
var captions = ["A fireworks display","A cup of black coffee","A red, red rose","The famous clock"];
var images = ["images/fireworks.jpg","images/coffee.jpg","images/rose.jpg","images/bigben.jpg"];  
var clicked = false;

var fireworks = '<img src="images/fireworks.jpg" alt="A fireworks display">';
var concept = '<img src="images/concept.jpg" alt="A 3d concept">';
var conceptDesc = '<p>I made this in MS Paint with a broken mouse</p>';

$(document).ready(function(){
	$("#flipbox1").flippy({
		verso: fireworks,
		depth: 1
	});

	$("#next").on("click", function(e){
		index++;

		if(index>=images.length)
			index=0;

		showImage();
	});

	$("#previous").on("click", function(e){
		index--;

		if(index<0)
			index=images.length-1;
		
		showImage();
	});

	$("#flipbox2").flippy({
		verso: concept,
		depth: 1
	});

	$("#flipbox2").on("click", function(e){
		if(!clicked){
			clicked = true;

			$("#flipbox2").flippy({
				color_target: '#28b9df',
				verso: conceptDesc,
				depth: 1
			});
		}
		else{
			clicked = false;

			$("#flipbox2").flippy({
				verso: concept,
				depth: 1
			});
		}
	});
});

function showImage(){
	var img = document.createElement("img");
	var caption = captions[index];

	img.src = images[index];
	img.setAttribute("alt", caption);

	img.onload = function(){
		$("#description").text(caption);

		$("#flipbox1").flippy({
			verso: img,
			depth: 1
		});
	}
}