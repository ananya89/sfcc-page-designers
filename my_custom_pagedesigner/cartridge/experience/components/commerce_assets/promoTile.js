'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var PromotionMgr = require('dw/campaign/PromotionMgr');

/**
 * Render logic for storefront.productTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();

    var content = context.content;
    var promoID = context.content.promotion;
    var promotion = PromotionMgr.getPromotion(promoID);

    model.promotion = promotion;

    return new Template('experience/components/commerce_assets/promoTile').render(model).text;
};
