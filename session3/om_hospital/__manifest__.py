# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'Hospital Management',
    'summary': 'Manageing hospital',
    'sequence': 10,
    'license': 'OEEL-1',
    'website': 'https://www.odoo.com',
    'version': '1.0',
    'author': 'Lavish Chhatwani',
    'description': """
HEL: odoo basic training session
================================
* back-end training session
* front-end training session
    """,
    'category': 'Extra tool',
    'depends': ['base','mail'],
    
    'data': 
    [

    'data/sequence.xml',

    #security
    'security/ir.model.access.csv',
    #views
    'views/AgeRange.xml',
    'views/patient.xml',



    ],

    # 'qweb': [],
    'installable': True,
    'application': True,
    'auto_install': False,
}
