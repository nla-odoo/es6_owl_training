from odoo import models, fields

class widgetfield(models.Model):
	_name = 'widget.field'

	name = fields.char(string="Employee name")
	salary = fields.Integer(string="Salary")