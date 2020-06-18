odoo.define('session3.range_widget', function (require) {
"use strict";

var FieldInteger = require('web.basic_fields').FieldInteger;
var field_registry = require('web.field_registry');

var rangewidget = FieldInteger.extend({
    _renderEdit: function () {
        this._super.apply(this, arguments);
        this.$el.attr('type', 'range');
    }
});

field_registry.add('rangewidget', rangewidget);

return {
    RangeWidget,
};
});
