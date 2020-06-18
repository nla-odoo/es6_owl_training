from odoo import fields, models, api, _
from odoo.exceptions import ValidationError

class HospitalPatient(models.Model):
	_name= 'hospital.patients'
	_inherit=['mail.thread','mail.activity.mixin']
	_description= "patient records"
	_rec_name='patient_name'

	gender=fields.Selection([('male','Male'),('fe_male','Female'),],default='male', string="Gender")
	age_group=fields.Selection([('major','Major'),('minor','Minor'),], string='Age Group', compute='set_age_group')
	patient_name= fields.Char(string='Name', required=True)
	patient_age=fields.Integer(string='Age')
	notes=fields.Text(string='Notes')
	image=fields.Binary(string="Image")
	name_seq=fields.Char(string='Order Reference', required=True, copy=False, 
							readonly=True,index=True,default=lambda self:_('New'))


	@api.constrains('patient_age')
	def check_age(self):
		if self.patient_age<5:
			raise  ValidationError(_('age must be grater then 5'))




	@api.depends('patient_age')
	def set_age_group(self):
		for rec in self:
			if rec.patient_age<18:
				rec.age_group='minor'
			else:
				rec.age_group='major'

	# @api.multi
	# def open_patient_appointments(self):
	# 	return {
	# 				'name':_('Appointments'),
	# 				'domain':[],
	# 				'view_type':'form',
	# 				'res_model':'appointment.patients',
	# 				'view_id':False,
	# 				'view_mode':'tree,form',
	# 				'type':'ir.action.act_window',
	# 			}


	@api.model
	def create(self, vals):
		if vals.get('name_seq',_('New'))==_('New'):
			vals['name_seq']=self.env['ir.sequence'].next_by_code('hospital.patients.sequence') or _('New')
		result= super(HospitalPatient, self).create(vals)
		print("result..............",_('New'))
		return result





class AppointmentPatient(models.Model):
	_name= 'appointment.patients'
	_description= "patient appointment records"
	_rec_name='name_seq'
	_order="id desc"

	def _get_default_note(self):
		return "task is going good.."

	name_seq=fields.Char(string='Appointment ID', required=True, copy=False, 
							readonly=True,index=True,default=lambda self:_('New'))
	patient_id=fields.Many2one('hospital.patients',string='Patient', required=True)
	patient_age=fields.Integer(string='Age')
	notes=fields.Text(string='Registration Notes', default=_get_default_note)
	appointment_date=fields.Date(string='Date',required=True)




	@api.model
	def create(self, vals):
		if vals.get('name_seq',_('New'))==_('New'):
			vals['name_seq']=self.env['ir.sequence'].next_by_code('appointment.patients.sequence') or _('New')
		result= super(AppointmentPatient, self).create(vals)
		print("result..............",_('New'))
		return result


