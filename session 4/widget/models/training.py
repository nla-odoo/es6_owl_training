# -*- coding: utf-8 -*-

from odoo import fields, models, api, _


class TrainingSession(models.Model):
    _name = "training.session"
    _description = "Training Session"

    name_id = fields.Integer(string="Name Id")