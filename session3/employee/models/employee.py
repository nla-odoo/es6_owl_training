# -*- coding: utf-8 -*-

from odoo import fields, models

class Employee(models.Model):
    _name = 'employee.employee'

    name = fields.Char(string="Name")
    working_hours = fields.Integer(string="Working Hours")