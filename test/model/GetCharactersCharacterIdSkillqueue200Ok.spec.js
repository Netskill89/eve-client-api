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
    describe('GetCharactersCharacterIdSkillqueue200Ok', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdSkillqueue200Ok();
      });

      it('should create an instance of GetCharactersCharacterIdSkillqueue200Ok', function() {
        // TODO: update the code to test GetCharactersCharacterIdSkillqueue200Ok
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdSkillqueue200Ok);
      });

      it('should have the property finish_date (base name: "finish_date")', function() {
        // TODO: update the code to test the property finish_date
        expect(instance).to.have.property('finish_date');
        // expect(instance.finish_date).to.be(expectedValueLiteral);
      });

      it('should have the property finished_level (base name: "finished_level")', function() {
        // TODO: update the code to test the property finished_level
        expect(instance).to.have.property('finished_level');
        // expect(instance.finished_level).to.be(expectedValueLiteral);
      });

      it('should have the property level_end_sp (base name: "level_end_sp")', function() {
        // TODO: update the code to test the property level_end_sp
        expect(instance).to.have.property('level_end_sp');
        // expect(instance.level_end_sp).to.be(expectedValueLiteral);
      });

      it('should have the property level_start_sp (base name: "level_start_sp")', function() {
        // TODO: update the code to test the property level_start_sp
        expect(instance).to.have.property('level_start_sp');
        // expect(instance.level_start_sp).to.be(expectedValueLiteral);
      });

      it('should have the property queue_position (base name: "queue_position")', function() {
        // TODO: update the code to test the property queue_position
        expect(instance).to.have.property('queue_position');
        // expect(instance.queue_position).to.be(expectedValueLiteral);
      });

      it('should have the property skill_id (base name: "skill_id")', function() {
        // TODO: update the code to test the property skill_id
        expect(instance).to.have.property('skill_id');
        // expect(instance.skill_id).to.be(expectedValueLiteral);
      });

      it('should have the property start_date (base name: "start_date")', function() {
        // TODO: update the code to test the property start_date
        expect(instance).to.have.property('start_date');
        // expect(instance.start_date).to.be(expectedValueLiteral);
      });

      it('should have the property training_start_sp (base name: "training_start_sp")', function() {
        // TODO: update the code to test the property training_start_sp
        expect(instance).to.have.property('training_start_sp');
        // expect(instance.training_start_sp).to.be(expectedValueLiteral);
      });

    });
  });

}));