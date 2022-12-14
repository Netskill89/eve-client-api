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
    describe('GetOpportunitiesGroupsGroupIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetOpportunitiesGroupsGroupIdOk();
      });

      it('should create an instance of GetOpportunitiesGroupsGroupIdOk', function() {
        // TODO: update the code to test GetOpportunitiesGroupsGroupIdOk
        expect(instance).to.be.a(EveApi.GetOpportunitiesGroupsGroupIdOk);
      });

      it('should have the property connected_groups (base name: "connected_groups")', function() {
        // TODO: update the code to test the property connected_groups
        expect(instance).to.have.property('connected_groups');
        // expect(instance.connected_groups).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property group_id (base name: "group_id")', function() {
        // TODO: update the code to test the property group_id
        expect(instance).to.have.property('group_id');
        // expect(instance.group_id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property notification (base name: "notification")', function() {
        // TODO: update the code to test the property notification
        expect(instance).to.have.property('notification');
        // expect(instance.notification).to.be(expectedValueLiteral);
      });

      it('should have the property required_tasks (base name: "required_tasks")', function() {
        // TODO: update the code to test the property required_tasks
        expect(instance).to.have.property('required_tasks');
        // expect(instance.required_tasks).to.be(expectedValueLiteral);
      });

    });
  });

}));
