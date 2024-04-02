// ==UserScript==
// @name		AlliedModders Remove Deleted thread.
// @include		*://forums.alliedmods.net/forumdisplay.php*
// @include		*://forums.alliedmods.net/showthread.php*
// @include		*://forums.alliedmods.net/showpost.php*
// @version		0.1
// @date		2024-04-02
// @creator		Aoi.Kagase
// @require		http://code.jquery.com/jquery-latest.min.js
// @description	Remove all posts ignored users
// ==/UserScript==
$('tbody[id^=threadbits_forum_] td[class=alt2]').each(function() {
	var name = ($(this).find("div[class=smallfont]").text());
	if (name.indexOf("Thread deleted by") !== -1)
	{
		$(this).parent().hide();
		console.log("Found " + name);
	}
});
