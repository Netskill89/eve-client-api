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
    describe('GetCorporationsCorporationIdStarbases200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdStarbases200Ok();
      });

      it('should create an instance of GetCorporationsCorporationIdStarbases200Ok', function() {
        // TODO: update the code to test GetCorporationsCorporationIdStarbases200Ok
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdStarbases200Ok);
      });

      it('should have the property moon_id (base name: "moon_id")', function() {
        // TODO: update the code to test the property moon_id
        expect(instance).to.have.property('moon_id');
        // expect(instance.moon_id).to.be(expectedValueLiteral);
      });

      it('should have the property onlined_since (base name: "onlined_since")', function() {
        // TODO: update the code to test the property onlined_since
        expect(instance).to.have.property('onlined_since');
        // expect(instance.onlined_since).to.be(expectedValueLiteral);
      });

      it('should have the property reinforced_until (base name: "reinforced_until")', function() {
        // TODO: update the code to test the property reinforced_until
        expect(instance).to.have.property('reinforced_until');
        // expect(instance.reinforced_until).to.be(expectedValueLiteral);
      });

      it('should have the property starbase_id (base name: "starbase_id")', function() {
        // TODO: update the code to test the property starbase_id
        expect(instance).to.have.property('starbase_id');
        // expect(instance.starbase_id).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property system_id (base name: "system_id")', function() {
        // TODO: update the code to test the property system_id
        expect(instance).to.have.property('system_id');
        // expect(instance.system_id).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

      it('should have the property unanchor_at (base name: "unanchor_at")', function() {
        // TODO: update the code to test the property unanchor_at
        expect(instance).to.have.property('unanchor_at');
        // expect(instance.unanchor_at).to.be(expectedValueLiteral);
      });

    });
  });

}));
