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
    describe('GetCorporationsCorporationIdBookmarksItem', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdBookmarksItem();
      });

      it('should create an instance of GetCorporationsCorporationIdBookmarksItem', function() {
        // TODO: update the code to test GetCorporationsCorporationIdBookmarksItem
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdBookmarksItem);
      });

      it('should have the property item_id (base name: "item_id")', function() {
        // TODO: update the code to test the property item_id
        expect(instance).to.have.property('item_id');
        // expect(instance.item_id).to.be(expectedValueLiteral);
      });

      it('should have the property type_id (base name: "type_id")', function() {
        // TODO: update the code to test the property type_id
        expect(instance).to.have.property('type_id');
        // expect(instance.type_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
