from odoo import models, fields


class RangeField(models.Model):

	_name = 'widget.field'

	new_integer = fields.Integer(string="New Integer")