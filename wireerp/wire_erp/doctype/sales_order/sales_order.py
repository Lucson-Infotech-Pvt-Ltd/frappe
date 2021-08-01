# Copyright (c) 2021, Lucson and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SalesOrder(Document):
	def on_submit(self):
		self.customerData = frappe.get_doc("Customer",self.customer)
		self.customerData.current_credit_amount += self.total_amount
		self.customerData.current_credit_scrap += self.total_scrap
		self.customerData.save()
		
		self.Event_doc=frappe.new_doc("Transection Entry")
		self.Event_doc.amount=self.total_amount
		self.Event_doc.transection_type = 'Credit'
		self.Event_doc.customer = self.customer
		self.Event_doc.save()

		for d in self.get('items'):
			self.updatedStock = frappe.get_doc("Stock",d.item)
			self.updatedStock.quantity -= d.item_quantity 
			self.updatedStock.save()