function initModel() {
	var sUrl = "/sap/opu/odata/sap/Z_KUNDE3_SRV_01/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}