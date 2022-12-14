/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.12
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EveApi);
  }
}(this, function(expect, EveApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetCharactersCharacterIdOrdersHistory200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdOrdersHistory200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdOrdersHistory200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdOrdersHistory200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdOrdersHistory200Ok);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property escrow (base name: "escrow")', function() {
        // TODO: update the code to test the property escrow
        expect(instance).to.have.property('escrow');
        // expect(instance.escrow).to.be(expectedValueLiteral);
      });

      it('should have the property is_buy_order (base name: "is_buy_order")', function() {
        // TODO: update the code to test the property is_buy_order
        expect(instance).to.have.property('is_buy_order');
        // expect(instance.is_buy_order).to.be(expectedValueLiteral);
      });

      it('should have the property is_corporation (base name: "is_corporation")', function() {
        // TODO: update the code to test the property is_corporation
        expect(instance).to.have.property('is_corporation');
        // expect(instance.is_corporation).to.be(expectedValueLiteral);
      });

      it('should have the property issued (base name: "issued")', function() {
        // TODO: update the code to test the property issued
        expect(instance).to.have.property('issued');
        // expect(instance.issued).to.be(expectedValueLiteral);
      });

      it('should have the property location_id (base name: "location_id")', function() {
        // TODO: update the code to test the property location_id
        expect(instance).to.have.property('location_id');
        // expect(instance.location_id).to.be(expectedValueLiteral);
      });

      it('should have the property min_volume (base name: "min_volume")', function() {
        // TODO: update the code to test the property min_volume
        expect(instance).to.have.property('min_volume');
        // expect(instance.min_volume).to.be(expectedValueLiteral);
      });

      it('should have the property order_id (base name: "order_id")', function() {
        // TODO: update the code to test the property order_id
        expect(instance).to.have.property('order_id');
        // expect(instance.order_id).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property range (base name: "range")', function() {
        // TODO: update the code to test the property range
        expect(instance).to.have.property('range');
        // expect(instance.range).to.be(expectedValueLiteral);
      });

      it('should have the property region_id (base name: "region_id")', function() {
        // TODO: update the code to test the property region_id
        expect(instance).to.have.property('region_id');
        // expect(instance.region_id).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

      it('should have the property volume_remain (base name: "volume_remain")', function() {
        // TODO: update the code to test the property volume_remain
        expect(instance).to.have.property('volume_remain');
        // expect(instance.volume_remain).to.be(expectedValueLiteral);
      });

      it('should have the property volume_total (base name: "volume_total")', function() {
        // TODO: update the code to test the property volume_total
        expect(instance).to.have.property('volume_total');
        // expect(instance.volume_total).to.be(expectedValueLiteral);
      });

    });
  });

}));
