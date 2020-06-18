# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'Ani owl Training Session',
    'summary': 'owl basic training session',
    'sequence': 100,
    'license': 'OEEL-1',
    'website': 'https://www.odoo.com',
    'version': '3.0',
    'author': 'Tiny Erp pvt ltd',
    'description': """
ANI: odoo basic training session
================================
* back-end training session
* front-end training session
    """,
    'category': 'Training',
    'depends': ['base'],
    'data': [
        # security
        'security/ir.model.access.csv',


        # wizard

        # views
        'views/training_views.xml',
        'views/asserts.xml',

        # report
    ],
    'demo': [
    ],
    'qweb': [],
    'installable': True,
    'application': False,
    'auto_install': False,
}
