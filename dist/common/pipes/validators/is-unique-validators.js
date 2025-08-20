"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = IsUnique;
const class_validator_1 = require("class-validator");
const is_unique_constraint_1 = require("./constraint/is-unique-constraint");
function IsUnique(options, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options.model, options.field, options.excludeIdField],
            validator: is_unique_constraint_1.IsUniqueConstraint,
        });
    };
}
//# sourceMappingURL=is-unique-validators.js.map