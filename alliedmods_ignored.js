// ==UserScript==
// @name		AlliedModders Remove Ignored UserPost
// @include		*://forums.alliedmods.net/forumdisplay.php*
// @include		*://forums.alliedmods.net/showthread.php*
// @include		*://forums.alliedmods.net/showpost.php*
// @version		0.4
// @creator		Aoi.Kagase
// @require		http://code.jquery.com/jquery-latest.min.js
// @description	Remove all posts ignored users
// ==/UserScript==

var ignored = [];
$.ajax({
	type: 'GET',
	dataType: 'text',
	scriptCharset: 'UTF-8',
	timeout: 10000,
	cache: false,
	url:'https://raw.githubusercontent.com/AoiKagase/AlliedModdersBlackListSystem/master/denylist.json',
}).done(function(data, status, xhr) {
	ignored = JSON.parse(data);
	$('td[id^=td_threadtitle_]').each(function() {
		var name = $.trim($(this).find("div[class=smallfont]").find("span").text());
		if ($.inArray(name,ignored) !== -1)
		{
			$(this).parent().hide();
			console.log("Found " + name);
		}
	});
	$('table[id^=post]').each(function() {
		var name = $.trim($(this).find("a[class=bigusername]").text());
		if ($.inArray(name,ignored) !== -1)
		{
			$(this).parent().parent().hide();
			console.log("Found " + name);
		}
	});
	$('table[id^=post]' + 'table[class=tborder]').each(function() {
		$(this).parent().parent().hide();
	});
});

