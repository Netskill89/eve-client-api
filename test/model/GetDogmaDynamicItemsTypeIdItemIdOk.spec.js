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
    describe('GetDogmaDynamicItemsTypeIdItemIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetDogmaDynamicItemsTypeIdItemIdOk();
      });

      it('should create an instance of GetDogmaDynamicItemsTypeIdItemIdOk', function() {
        // TODO: update the code to test GetDogmaDynamicItemsTypeIdItemIdOk
        expect(instance).to.be.a(EveApi.GetDogmaDynamicItemsTypeIdItemIdOk);
      });

      it('should have the property created_by (base name: "created_by")', function() {
        // TODO: update the code to test the property created_by
        expect(instance).to.have.property('created_by');
        // expect(instance.created_by).to.be(expectedValueLiteral);
      });

      it('should have the property dogma_attributes (base name: "dogma_attributes")', function() {
        // TODO: update the code to test the property dogma_attributes
        expect(instance).to.have.property('dogma_attributes');
        // expect(instance.dogma_attributes).to.be(expectedValueLiteral);
      });

      it('should have the property dogma_effects (base name: "dogma_effects")', function() {
        // TODO: update the code to test the property dogma_effects
        expect(instance).to.have.property('dogma_effects');
        // expect(instance.dogma_effects).to.be(expectedValueLiteral);
      });

      it('should have the property mutator_type_id (base name: "mutator_type_id")', function() {
        // TODO: update the code to test the property mutator_type_id
        expect(instance).to.have.property('mutator_type_id');
        // expect(instance.mutator_type_id).to.be(expectedValueLiteral);
      });

      it('should have the property source_type_id (base name: "source_type_id")', function() {
        // TODO: update the code to test the property source_type_id
        expect(instance).to.have.property('source_type_id');
        // expect(instance.source_type_id).to.be(expectedValueLiteral);
      });

    });
  });

}));