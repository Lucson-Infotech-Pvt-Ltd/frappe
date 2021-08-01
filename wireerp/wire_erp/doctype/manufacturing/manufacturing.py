# Copyright (c) 2021, Lucson and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class manufacturing(Document):
	def on_submit(self):
		self.customerData = frappe.get_doc("Stock",self.out_product)
		self.customerData.quantity += self.out_product_quantity
		self.customerData.save()

	def before_save(self):
		self.customerData = frappe.get_doc("Stock",self.in_product)
		self.customerData.quantity -= self.in_product_quantity
		self.customerData.save()
		
		
		