odoo.define('student_portal.range_widget', function (require) {
"use strict";

var FieldInteger = require('web.basic_fields').FieldInteger;
var field_registry = require('web.field_registry');

var RangeWidget = FieldInteger.extend({

    _renderEdit: function ()  {
    	this._super.apply(this, arguments);
    	this.$el.attr('type', 'range');
    },
});

field_registry.add('range', RangeWidget);

return RangeWidget

});
