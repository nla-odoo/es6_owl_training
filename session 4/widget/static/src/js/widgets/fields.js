odoo.define('widget.fields_widget', function (require) {
"use strict";

    var basic_fields = require('web.basic_fields');
    var field_registry = require('web.field_registry');
    var view_registry = require('web.view_registry');
    var FieldInteger = basic_fields.FieldInteger;
    var Registry = require('web.Registry');

    var RangeIntegerField = FieldInteger.extend({
        _renderEdit: function () {
            this._super.apply(this, arguments);
            this.$el.attr({'type': 'range'});
        }
    });
    field_registry.add('RangeIntegerField',RangeIntegerField);

    return RangeIntegerField;

});