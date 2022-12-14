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

  beforeEach(function() {
    instance = new EveApi.SkillsApi();
  });

  describe('(package)', function() {
    describe('SkillsApi', function() {
      describe('getCharactersCharacterIdAttributes', function() {
        it('should call getCharactersCharacterIdAttributes successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdAttributes call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdAttributes(character_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetCharactersCharacterIdAttributesOk);
            expect(data.accrued_remap_cooldown_date).to.be.a(Date);
            expect(data.accrued_remap_cooldown_date).to.be(new Date());
            expect(data.bonus_remaps).to.be.a('number');
            expect(data.bonus_remaps).to.be(0);
            expect(data.charisma).to.be.a('number');
            expect(data.charisma).to.be(0);
            expect(data.intelligence).to.be.a('number');
            expect(data.intelligence).to.be(0);
            expect(data.last_remap_date).to.be.a(Date);
            expect(data.last_remap_date).to.be(new Date());
            expect(data.memory).to.be.a('number');
            expect(data.memory).to.be(0);
            expect(data.perception).to.be.a('number');
            expect(data.perception).to.be(0);
            expect(data.willpower).to.be.a('number');
            expect(data.willpower).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdSkillqueue', function() {
        it('should call getCharactersCharacterIdSkillqueue successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdSkillqueue call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdSkillqueue(character_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdSkillqueue200Ok);
              expect(data.finish_date).to.be.a(Date);
              expect(data.finish_date).to.be(new Date());
              expect(data.finished_level).to.be.a('number');
              expect(data.finished_level).to.be(0);
              expect(data.level_end_sp).to.be.a('number');
              expect(data.level_end_sp).to.be(0);
              expect(data.level_start_sp).to.be.a('number');
              expect(data.level_start_sp).to.be(0);
              expect(data.queue_position).to.be.a('number');
              expect(data.queue_position).to.be(0);
              expect(data.skill_id).to.be.a('number');
              expect(data.skill_id).to.be(0);
              expect(data.start_date).to.be.a(Date);
              expect(data.start_date).to.be(new Date());
              expect(data.training_start_sp).to.be.a('number');
              expect(data.training_start_sp).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdSkills', function() {
        it('should call getCharactersCharacterIdSkills successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdSkills call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdSkills(character_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetCharactersCharacterIdSkillsOk);
            {
              let dataCtr = data.skills;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveApi.GetCharactersCharacterIdSkillsSkill);
                expect(data.active_skill_level).to.be.a('number');
                expect(data.active_skill_level).to.be(0);
                expect(data.skill_id).to.be.a('number');
                expect(data.skill_id).to.be(0);
                expect(data.skillpoints_in_skill).to.be.a('number');
                expect(data.skillpoints_in_skill).to.be("0");
                expect(data.trained_skill_level).to.be.a('number');
                expect(data.trained_skill_level).to.be(0);

                      }
            }
            expect(data.total_sp).to.be.a('number');
            expect(data.total_sp).to.be("0");
            expect(data.unallocated_sp).to.be.a('number');
            expect(data.unallocated_sp).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
