/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/namespace/deploy-sapui5-fiori-onpremisse/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});