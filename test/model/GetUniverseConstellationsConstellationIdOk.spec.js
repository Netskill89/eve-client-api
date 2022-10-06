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
    describe('GetUniverseConstellationsConstellationIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetUniverseConstellationsConstellationIdOk();
      });

      it('should create an instance of GetUniverseConstellationsConstellationIdOk', function() {
        // TODO: update the code to test GetUniverseConstellationsConstellationIdOk
        expect(instance).to.be.a(EveApi.GetUniverseConstellationsConstellationIdOk);
      });

      it('should have the property constellation_id (base name: "constellation_id")', function() {
        // TODO: update the code to test the property constellation_id
        expect(instance).to.have.property('constellation_id');
        // expect(instance.constellation_id).to.be(expectedValueLiteral);
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

      it('should have the property region_id (base name: "region_id")', function() {
        // TODO: update the code to test the property region_id
        expect(instance).to.have.property('region_id');
        // expect(instance.region_id).to.be(expectedValueLiteral);
      });

      it('should have the property systems (base name: "systems")', function() {
        // TODO: update the code to test the property systems
        expect(instance).to.have.property('systems');
        // expect(instance.systems).to.be(expectedValueLiteral);
      });

    });
  });

}));
