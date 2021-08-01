# Copyright (c) 2021, Lucson and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Payment(Document):
	def on_submit(self):
		self.customerData = frappe.get_doc("Customer",self.customer)
		self.customerData.current_credit_amount -= self.total_number
		self.customerData.current_credit_scrap -= self.scrap_in_kg
		self.customerData.save()

		self.Event_doc=frappe.new_doc("Transection Entry")
		self.Event_doc.scrap=self.scrap_in_kg
		self.Event_doc.amount = self.total_number
		self.Event_doc.transection_type = 'Debit'
		self.Event_doc.customer = self.customer
		self.Event_doc.save()
