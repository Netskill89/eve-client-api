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
    describe('GetUniverseSchematicsSchematicIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetUniverseSchematicsSchematicIdOk();
      });

      it('should create an instance of GetUniverseSchematicsSchematicIdOk', function() {
        // TODO: update the code to test GetUniverseSchematicsSchematicIdOk
        expect(instance).to.be.a(EveApi.GetUniverseSchematicsSchematicIdOk);
      });

      it('should have the property cycle_time (base name: "cycle_time")', function() {
        // TODO: update the code to test the property cycle_time
        expect(instance).to.have.property('cycle_time');
        // expect(instance.cycle_time).to.be(expectedValueLiteral);
      });

      it('should have the property schematic_name (base name: "schematic_name")', function() {
        // TODO: update the code to test the property schematic_name
        expect(instance).to.have.property('schematic_name');
        // expect(instance.schematic_name).to.be(expectedValueLiteral);
      });

    });
  });

}));