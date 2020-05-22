$(document).ready(function () {
    var weatherReportOriginalContent = $("#weather-report-text").html();
    var weatherReportNewContent = '<h4 class="text-center">technologies used</h4>\
	<p class="text-center">\
	<ul class="list-inline-two text-center">\
            <li><i class="devicon-html5-plain-wordmark"></i></li>\
            <li><i class="devicon-css3-plain-wordmark"></i></li>\
            <li><i class="devicon-javascript-plain"></i></li>\
            <li><i class="devicon-jquery-plain-wordmark"></i></li>\
            <li><i class="devicon-bootstrap-plain-wordmark"></i></li>\
          </ul>\
          <br>\
          <a class="btn btn-primary sharp center-block" href="weather-report" target="_blank">visit site</a>\
	</p>';
    $("#weather-report-div").hover(function () {
        $("#weather-report-text").hide().html(weatherReportNewContent).fadeIn(400);
    }, function () {
        $("#weather-report-text").hide().html(weatherReportOriginalContent).fadeIn(400);
    });

    var dioOriginalContent = $("#dio-text").html();
    var dioNewContent = '<h4 class="text-center">technologies used</h4>\
	<p>\
	<ul class="list-inline-two text-center">\
            <li><i class="devicon-html5-plain-wordmark"></i></li>\
            <li><i class="devicon-css3-plain-wordmark"></i></li>\
            <li><i class="devicon-javascript-plain"></i></li>\
            <li><i class="devicon-jquery-plain-wordmark"></i></li>\
            <li><i class="devicon-bootstrap-plain-wordmark"></i></li>\
          </ul>\
          <br>\
          <a class="btn btn-primary sharp center-block" href="ronnie-james-dio-quote-generator" target="_blank">visit site</a>\
	</p>';
    $("#dio-div").hover(function () {
        $("#dio-text").hide().html(dioNewContent).fadeIn(400);
    }, function () {
        $("#dio-text").hide().html(dioOriginalContent).fadeIn(400);
    });

    var spazOriginalContent = $("#spaz-text").html();
    var spazNewContent = '<h4 class="text-center">technologies used</h4>\
	<p>\
	<ul class="list-inline-two text-center">\
            <li><i class="devicon-html5-plain-wordmark"></i></li>\
            <li><i class="devicon-css3-plain-wordmark"></i></li>\
            <li><i class="devicon-jquery-plain-wordmark"></i></li>\
            <li><i class="devicon-bootstrap-plain-wordmark"></i></li>\
            <li><i class="devicon-photoshop-plain"></i></li>\
          </ul>\
          <br>\
          <a class="btn btn-primary sharp center-block" href="http://itsumo-online.net/lemon/spaz" target="_blank">visit site</a>\
	</p>';
    $("#spaz-div").hover(function () {
        $("#spaz-text").hide().html(spazNewContent).fadeIn(400);
    }, function () {
        $("#spaz-text").hide().html(spazOriginalContent).fadeIn(400);
    });

    var cantOriginalContent = $("#cant-text").html();
    var cantNewContent = '<h4 class="text-center">technologies used</h4>\
	<p>\
	<ul class="list-inline-two text-center">\
            <li><i class="devicon-javascript-plain"></i></li>\
            <li><i class="devicon-nodejs-plain"></i></li>\
            <li><i class="devicon-heroku-plain-wordmark"></i></li>\
            <li><i class="devicon-git-plain"></i></li>\
          </ul>\
          <br>\
          <a class="btn btn-primary sharp center-block" href="http://twitter.com/canterburytwts" target="_blank">visit site</a>\
	</p>';
    $("#cant-div").hover(function () {
        $("#cant-text").hide().html(cantNewContent).fadeIn(400);
    }, function () {
        $("#cant-text").hide().html(cantOriginalContent).fadeIn(400);
    });

    var ctOriginalContent = $("#ct-text").html();
    var ctNewContent = '<h4 class="text-center">technologies used</h4>\
	<p>\
	<ul class="list-inline-two text-center">\
            <li><i class="devicon-html5-plain-wordmark"></i></li>\
            <li><i class="devicon-css3-plain-wordmark"></i></li>\
			<li><i class="devicon-wordpress-plain-wordmark"></i>\
			<li><i class="devicon-php-plain"></i></li>\
			<li><i class="devicon-photoshop-plain"></i></li>\
          </ul>\
          <br>\
          <a class="btn btn-primary sharp center-block" href="http://colosseumthesis.com" target="_blank">visit site</a>\
	</p>';
    $("#ct-div").hover(function () {
        $("#ct-text").hide().html(ctNewContent).fadeIn(400);
    }, function () {
        $("#ct-text").hide().html(ctOriginalContent).fadeIn(400);
    });

    var wikiOriginalContent = $("#wiki-text").html();
    var wikiNewContent = '<h4 class="text-center">technologies used</h4>\
    <p class="text-center">\
    <ul class="list-inline-two text-center">\
                <li><i class="devicon-html5-plain-wordmark"></i></li>\
                <li><i class="devicon-css3-plain-wordmark"></i></li>\
                <li><i class="devicon-javascript-plain"></i></li>\
                <li><i class="devicon-jquery-plain-wordmark"></i></li>\
                <li><i class="devicon-bootstrap-plain-wordmark"></i></li>\
            </ul>\
            <br>\
            <a class="btn btn-primary sharp center-block" href="wikipedia-viewer" target="_blank">visit site</a>\
    </p>';
    $("#wiki-div").hover(function () {
        $("#wiki-text").hide().html(wikiNewContent).fadeIn(400);
    }, function () {
        $("#wiki-text").hide().html(wikiOriginalContent).fadeIn(400);
    });

    var passgenOriginalContent = $("#passgen-text").html();
    var passgenNewContent = '<h4 class="text-center">technologies used</h4>\
        <p>\
        <ul class="list-inline-two text-center">\
                <li><i class="devicon-nodejs-plain"></i></li>\
                <li><i class="devicon-javascript-plain"></i></li>\
              </ul>\
              <br>\
              <a class="btn btn-primary sharp center-block" href="https://github.com/codelinde/student-password-generator" target="_blank">visit site</a>\
        </p>';
    $("#passgen-div").hover(function () {
        $("#passgen-text").hide().html(passgenNewContent).fadeIn(400);
    }, function () {
        $("#passgen-text").hide().html(passgenOriginalContent).fadeIn(400);
    });

    var markOriginalContent = $("#mark-text").html();
    var markNewContent = '<h4 class="text-center">technologies used</h4>\
        <p>\
        <ul class="list-inline-two text-center">\
                <li><i class="devicon-html5-plain"></i></li>\
                <li><i class="devicon-css3-plain"></i></li>\
                <li><i class="devicon-javascript-plain"></i></li>\
                <li><i class="devicon-react-original-wordmark"></i></li>\
              </ul>\
              <br>\
              <a class="btn btn-primary sharp center-block" href="https://ryanlinde.com/markdown-previewer/" target="_blank">visit site</a>\
        </p>';
    $("#mark-div").hover(function () {
        $("#mark-text").hide().html(markNewContent).fadeIn(400);
    }, function () {
        $("#mark-text").hide().html(markOriginalContent).fadeIn(400);
    });

});
