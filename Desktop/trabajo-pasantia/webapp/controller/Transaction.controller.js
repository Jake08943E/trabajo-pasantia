sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Transaction", {
        onInit: function () {
            var oData = {
                orderNumber: "",
                date: new Date(),
                amount: "",
                currency: "EUR",
                positions: [
                    {
                        documentNumber: "10223882001820",
                        company: "Jologa",
                        contactPerson: "Denise Smith",
                        postingDate: "11/15/21",
                        amount: "12,897.00"
                    },
                    {
                        documentNumber: "10223882002198",
                        company: "Exotic Liquids",
                        contactPerson: "Paul Blevins",
                        postingDate: "11/18/21",
                        amount: "234,197.00"
                    },
                    {
                        documentNumber: "21718318237193",
                        company: "Lyngbysild",
                        contactPerson: "Candice Brown",
                        postingDate: "11/21/21",
                        amount: "11,865.99"
                    }
                ]
            };
            
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});