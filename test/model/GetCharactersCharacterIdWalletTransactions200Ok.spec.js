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
    describe('GetCharactersCharacterIdWalletTransactions200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdWalletTransactions200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdWalletTransactions200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdWalletTransactions200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdWalletTransactions200Ok);
      });

      it('should have the property client_id (base name: "client_id")', function() {
        // TODO: update the code to test the property client_id
        expect(instance).to.have.property('client_id');
        // expect(instance.client_id).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property is_buy (base name: "is_buy")', function() {
        // TODO: update the code to test the property is_buy
        expect(instance).to.have.property('is_buy');
        // expect(instance.is_buy).to.be(expectedValueLiteral);
      });

      it('should have the property is_personal (base name: "is_personal")', function() {
        // TODO: update the code to test the property is_personal
        expect(instance).to.have.property('is_personal');
        // expect(instance.is_personal).to.be(expectedValueLiteral);
      });

      it('should have the property journal_ref_id (base name: "journal_ref_id")', function() {
        // TODO: update the code to test the property journal_ref_id
        expect(instance).to.have.property('journal_ref_id');
        // expect(instance.journal_ref_id).to.be(expectedValueLiteral);
      });

      it('should have the property location_id (base name: "location_id")', function() {
        // TODO: update the code to test the property location_id
        expect(instance).to.have.property('location_id');
        // expect(instance.location_id).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property transaction_id (base name: "transaction_id")', function() {
        // TODO: update the code to test the property transaction_id
        expect(instance).to.have.property('transaction_id');
        // expect(instance.transaction_id).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

      it('should have the property unit_price (base name: "unit_price")', function() {
        // TODO: update the code to test the property unit_price
        expect(instance).to.have.property('unit_price');
        // expect(instance.unit_price).to.be(expectedValueLiteral);
      });

    });
  });

}));
