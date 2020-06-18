# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'NEM owl training Application',
    'summary': 'owl widget training',
    'sequence': 100,
    'license': 'OEEL-1',
    'website': 'https://www.odoo.com',
    'version': '1.0',
    'author': 'Odoo Inc',
    'description': """
NEM: owl widget training
==================
    """,
    'category': 'Custom Development',
    'depends': ['base'],
    'data': [

        'security/ir.model.access.csv',
        
        'views/training_views.xml',
        'views/asserts.xml',
        
    ],
    'demo': [],
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}
