// Copyright (c) 2021, Lucson and contributors
// For license information, please see license.txt

frappe.ui.form.on('Purchase Order', {
	validate: function(frm) {
        // calculate incentives for each person on the deal
        var total_incentive = 0
		
        $.each(frm.doc.items,  function(i,  d) {
			total_incentive += flt(d.total)
			
        });
        frm.doc.total_amount = total_incentive;
		
    } 
});

frappe.ui.form.on('Purchase Order Item', {
	item_quantity: function(frm,cdt,cdn) {
	    
		let row = frappe.get_doc(cdt, cdn);
		row.total = row.item_quantity * row.item_price
		frm.refresh_field('items')
		
	
	},
	item_price: function(frm,cdt,cdn) {
	    
		let row = frappe.get_doc(cdt, cdn);
		row.total = row.item_quantity * row.item_price
		frm.refresh_field('items')
		
	
	}
})