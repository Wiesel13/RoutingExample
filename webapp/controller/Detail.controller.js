sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox"
], function (Controller, History, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("RoutingExample.RoutingExample.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf RoutingExample.RoutingExample.view.Detail
		 */
		onInit: function () {

		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},

		/**
		 * Shows the selected item on the detail page
		 * On phones a additional history entry is created
		 * @param {sap.m.ObjectListItem} oItem selected Item
		 * @private
		 */
		_showDetail: function (oItem) {
			// var bReplace = !Device.system.phone;
			// set the layout property of FCL control to show two columns
			this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
			this.getRouter().navTo("object", {
				objectId: oItem.getBindingContext().getProperty("Kundennr")
			});
		},

		_onTableItemPress: function (oEvent) {
			var sPath = "/ZKUNDE_ENTITYTYPESet" + oEvent.getParameter("arguments").path;
			this.getView().bindElement({
				path: sPath
			});

			// var oRow = oEvent.getParameter("row");
			// var oItem = oEvent.getParameter("item");
			// MessageToast.show("Item " + (oItem.getText() || oItem.getType()) + " pressed for product with id " +
			// 	this.getView().getModel().getProperty("Kundennr", oRow.getBindingContext()));

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf RoutingExample.RoutingExample.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf RoutingExample.RoutingExample.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf RoutingExample.RoutingExample.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});