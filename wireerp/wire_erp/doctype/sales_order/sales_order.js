// Copyright (c) 2021, Lucson and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Order', {
	validate: function(frm) {
        // calculate incentives for each person on the deal
        var total_incentive = 0
		var total_scrap = 0
        $.each(frm.doc.items,  function(i,  d) {
			total_incentive += flt(d.total)
			total_scrap += flt(d.scrap_to_take)
        });
        frm.doc.total_amount = total_incentive;
		frm.doc.total_scrap = total_scrap;
		
		
    } 
});

frappe.ui.form.on('sales order Items', {
	item_quantity: function(frm,cdt,cdn) {
	    
		let row = frappe.get_doc(cdt, cdn);
		row.scrap_to_take = row.item_quantity
		row.total = row.item_quantity * row.item_price
		frm.refresh_field('items')
		console.log(row.scrap_to_take)
		//msgprint('You can not select past date in From Date');
		
	
	},
	
	item_price: function(frm,cdt,cdn) {
	    
		let row = frappe.get_doc(cdt, cdn);
		row.scrap_to_take = row.item_quantity
		row.total = row.item_quantity * row.item_price
		frm.refresh_field('items')
		console.log(row.scrap_to_take)
		//msgprint('You can not select past date in From Date');
		
	
	}
	
	
})
