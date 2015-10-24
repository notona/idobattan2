'use strict';

var notifier = require('node-notifier');
var path = require("path");

var NotifiyUtil = {
	notify: function(title, message, icon) {
		notifier.notify({
			title: title,
			message: message,
			icon: icon, // absolute path (not balloons)
			sound: false, // Only Notification Center or Windows Toasters
			wait: false // wait with callback until user action is taken on notification
		}, function (err, response) {
		// response is response from notification
		});
	}
}
module.exports = NotifiyUtil;
