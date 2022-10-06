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
    describe('GetDogmaAttributesAttributeIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetDogmaAttributesAttributeIdOk();
      });

      it('should create an instance of GetDogmaAttributesAttributeIdOk', function() {
        // TODO: update the code to test GetDogmaAttributesAttributeIdOk
        expect(instance).to.be.a(EveApi.GetDogmaAttributesAttributeIdOk);
      });

      it('should have the property attribute_id (base name: "attribute_id")', function() {
        // TODO: update the code to test the property attribute_id
        expect(instance).to.have.property('attribute_id');
        // expect(instance.attribute_id).to.be(expectedValueLiteral);
      });

      it('should have the property default_value (base name: "default_value")', function() {
        // TODO: update the code to test the property default_value
        expect(instance).to.have.property('default_value');
        // expect(instance.default_value).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property display_name (base name: "display_name")', function() {
        // TODO: update the code to test the property display_name
        expect(instance).to.have.property('display_name');
        // expect(instance.display_name).to.be(expectedValueLiteral);
      });

      it('should have the property high_is_good (base name: "high_is_good")', function() {
        // TODO: update the code to test the property high_is_good
        expect(instance).to.have.property('high_is_good');
        // expect(instance.high_is_good).to.be(expectedValueLiteral);
      });

      it('should have the property icon_id (base name: "icon_id")', function() {
        // TODO: update the code to test the property icon_id
        expect(instance).to.have.property('icon_id');
        // expect(instance.icon_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property published (base name: "published")', function() {
        // TODO: update the code to test the property published
        expect(instance).to.have.property('published');
        // expect(instance.published).to.be(expectedValueLiteral);
      });

      it('should have the property stackable (base name: "stackable")', function() {
        // TODO: update the code to test the property stackable
        expect(instance).to.have.property('stackable');
        // expect(instance.stackable).to.be(expectedValueLiteral);
      });

      it('should have the property unit_id (base name: "unit_id")', function() {
        // TODO: update the code to test the property unit_id
        expect(instance).to.have.property('unit_id');
        // expect(instance.unit_id).to.be(expectedValueLiteral);
      });

    });
  });

}));
