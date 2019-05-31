/** set some background colors -- probably overkill, but i dig it :-) */
$('header').css('background-color', 'rgba(255, 0, 0, 0.04)');
$('body').css('background-color', 'rgba(255, 0, 0, 0.04)');
$('section').css('background-color', 'rgba(255, 0, 0, 0.04)');
$('footer').css('background-color', 'rgba(255, 0, 0, 0.5)');

/** load the image as a chrome extension resource */
var iconURL = chrome.extension.getURL("./leafly-icon.png");

/** set the image as the favicon in the head section */
$('<link id="favicon" type="image/x-icon" rel="shortcut icon" href="' + iconURL + '" />').appendTo('head');
