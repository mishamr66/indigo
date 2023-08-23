"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IndegoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndegoModule = void 0;
const common_1 = require("@nestjs/common");
const indego_controller_1 = require("./indego.controller");
const indego_service_1 = require("./indego.service");
let IndegoModule = IndegoModule_1 = class IndegoModule {
};
IndegoModule = IndegoModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [indego_controller_1.IndegoController],
        providers: [indego_service_1.IndegoService],
        exports: [IndegoModule_1]
    })
], IndegoModule);
exports.IndegoModule = IndegoModule;
//# sourceMappingURL=indego.module.js.map