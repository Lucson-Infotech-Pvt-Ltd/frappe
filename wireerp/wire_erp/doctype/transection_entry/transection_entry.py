# Copyright (c) 2021, Lucson and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TransectionEntry(Document):
	def validate(self):
		self.customerData = frappe.get_doc("Customer",self.customer)
		self.customerData.current_credit_amount += self.amount
		self.customerData.current_credit_scrap += self.scrap
		self.customerData.save()
		
