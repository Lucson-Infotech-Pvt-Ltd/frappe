// Copyright (c) 2021, Lucson and contributors
// For license information, please see license.txt

frappe.ui.form.on('Transection Entry', {
	validate: function(frm) {
        // calculate incentives for each person on the deal
        frm.doc.amount = -frm.doc.amount;
		frm.doc.scrap = -frm.doc.scrap;
    } 
});
