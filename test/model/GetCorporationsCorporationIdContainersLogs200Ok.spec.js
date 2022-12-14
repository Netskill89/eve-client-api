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
    describe('GetCorporationsCorporationIdContainersLogs200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdContainersLogs200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdContainersLogs200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdContainersLogs200Ok
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdContainersLogs200Ok);
      });

      it('should have the property action (base name: "action")', function() {
        // TODO: update the code to test the property action
        expect(instance).to.have.property('action');
        // expect(instance.action).to.be(expectedValueLiteral);
      });

      it('should have the property character_id (base name: "character_id")', function() {
        // TODO: update the code to test the property character_id
        expect(instance).to.have.property('character_id');
        // expect(instance.character_id).to.be(expectedValueLiteral);
      });

      it('should have the property container_id (base name: "container_id")', function() {
        // TODO: update the code to test the property container_id
        expect(instance).to.have.property('container_id');
        // expect(instance.container_id).to.be(expectedValueLiteral);
      });

      it('should have the property container_type_id (base name: "container_type_id")', function() {
        // TODO: update the code to test the property container_type_id
        expect(instance).to.have.property('container_type_id');
        // expect(instance.container_type_id).to.be(expectedValueLiteral);
      });

      it('should have the property location_flag (base name: "location_flag")', function() {
        // TODO: update the code to test the property location_flag
        expect(instance).to.have.property('location_flag');
        // expect(instance.location_flag).to.be(expectedValueLiteral);
      });

      it('should have the property location_id (base name: "location_id")', function() {
        // TODO: update the code to test the property location_id
        expect(instance).to.have.property('location_id');
        // expect(instance.location_id).to.be(expectedValueLiteral);
      });

      it('should have the property logged_at (base name: "logged_at")', function() {
        // TODO: update the code to test the property logged_at
        expect(instance).to.have.property('logged_at');
        // expect(instance.logged_at).to.be(expectedValueLiteral);
      });

      it('should have the property new_config_bitmask (base name: "new_config_bitmask")', function() {
        // TODO: update the code to test the property new_config_bitmask
        expect(instance).to.have.property('new_config_bitmask');
        // expect(instance.new_config_bitmask).to.be(expectedValueLiteral);
      });

      it('should have the property old_config_bitmask (base name: "old_config_bitmask")', function() {
        // TODO: update the code to test the property old_config_bitmask
        expect(instance).to.have.property('old_config_bitmask');
        // expect(instance.old_config_bitmask).to.be(expectedValueLiteral);
      });

      it('should have the property password_type (base name: "password_type")', function() {
        // TODO: update the code to test the property password_type
        expect(instance).to.have.property('password_type');
        // expect(instance.password_type).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
