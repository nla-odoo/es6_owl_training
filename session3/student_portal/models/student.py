# -*- coding: utf-8 -*-
from odoo import models, fields


class student(models.Model):
    _name = 'student.student'
    # _rec_name = 'name'

    name = fields.Char(string="Student Name")
    marks = fields.Integer(string="Student Marks")
