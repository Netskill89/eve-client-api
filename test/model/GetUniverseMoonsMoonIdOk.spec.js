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
    describe('GetUniverseMoonsMoonIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetUniverseMoonsMoonIdOk();
      });

      it('should create an instance of GetUniverseMoonsMoonIdOk', function() {
        // TODO: update the code to test GetUniverseMoonsMoonIdOk
        expect(instance).to.be.a(EveApi.GetUniverseMoonsMoonIdOk);
      });

      it('should have the property moon_id (base name: "moon_id")', function() {
        // TODO: update the code to test the property moon_id
        expect(instance).to.have.property('moon_id');
        // expect(instance.moon_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property system_id (base name: "system_id")', function() {
        // TODO: update the code to test the property system_id
        expect(instance).to.have.property('system_id');
        // expect(instance.system_id).to.be(expectedValueLiteral);
      });

    });
  });

}));