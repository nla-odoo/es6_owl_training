odoo.define('widget_demo.range_field_integer', function (require) {
'use strict';

var core = require('web.core');
var field_registry = require('web.field_registry');
var FieldInteger = require('web.basic_fields').FieldInteger;


var IntegerRange = FieldInteger.extend({

   _renderEdit: function ()  {
       this._super.apply(this, arguments);
       this.$el.attr('type', 'range');
   },
});

field_registry.add('range', IntegerRange);

return IntegerRange;
});