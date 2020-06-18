odoo.define('student_portal.rangewidget', function (require) {
"use strict";

var FieldInteger = require('web.basic_fields').FieldInteger;
var field_registry = require('web.field_registry');

var rangewidget = FieldInteger.extend({
   _renderEdit: function () {
       this._super.apply(this, arguments);
       this.$el.attr('type', 'range');
   }
});

field_registry.add('range', rangewidget);

return rangewidget

});