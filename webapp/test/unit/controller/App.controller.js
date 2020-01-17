/*global QUnit*/

sap.ui.define([
	"br/com/namespace/deploy-sapui5-fiori-onpremisse/controller/App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});