from odoo import fields, models, api, _


class TrainingSession(models.Model):
    _name = "training.session"
    _description = "Training Session"

    int_id = fields.Integer(string="Int Value");