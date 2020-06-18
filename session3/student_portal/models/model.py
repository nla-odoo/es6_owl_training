# -*- coding: utf-8 -*-
from odoo import fields, models

class student(models.Model):
	_name = 'student.student'

	name = fields.Char(string="Name")
	marks = fields.Integer(string="Marks")
