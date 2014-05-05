$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '32815517@N00'
		},
		itemTemplate: '<li><a rel="photostream" class="fancybox" title="{{title}}" href="{{image_b}}"><i class="icon-search"></i><div class="hover"></div></a><img src="{{image_s}}" alt="{{title}}" /></li>'
	});

});