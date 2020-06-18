odoo.define('industry_fsm_sale.fsm_product_quantity', function (require) {
"use strict";

var FieldInteger = require('web.basic_fields').FieldInteger;

var core = require('web.core');
var field_registry = require('web.field_registry');




var AgeRange = FieldInteger.extend({
  _renderEdit: function () {
        this._super.apply(this, arguments);
        this.$el.attr('type', 'range');
    }
});

field_registry.add('AgeRange', AgeRange);

return {
    AgeRange: AgeRange,
};

});
