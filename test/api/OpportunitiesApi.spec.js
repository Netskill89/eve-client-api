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
    instance = new EveApi.OpportunitiesApi();
  });

  describe('(package)', function() {
    describe('OpportunitiesApi', function() {
      describe('getCharactersCharacterIdOpportunities', function() {
        it('should call getCharactersCharacterIdOpportunities successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdOpportunities call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdOpportunities(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdOpportunities200Ok);
              expect(data.completed_at).to.be.a(Date);
              expect(data.completed_at).to.be(new Date());
              expect(data.task_id).to.be.a('number');
              expect(data.task_id).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesGroups', function() {
        it('should call getOpportunitiesGroups successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesGroups call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getOpportunitiesGroups(opts, function(error, data, response) {
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
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesGroupsGroupId', function() {
        it('should call getOpportunitiesGroupsGroupId successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesGroupsGroupId call and complete the assertions
          /*
          var group_id = 56;
          var opts = {};
          opts.Accept_Language = "en";
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.language = "en";

          instance.getOpportunitiesGroupsGroupId(group_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetOpportunitiesGroupsGroupIdOk);
            {
              let dataCtr = data.connected_groups;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.group_id).to.be.a('number');
            expect(data.group_id).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.notification).to.be.a('string');
            expect(data.notification).to.be("");
            {
              let dataCtr = data.required_tasks;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesTasks', function() {
        it('should call getOpportunitiesTasks successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesTasks call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getOpportunitiesTasks(opts, function(error, data, response) {
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
              expect(data).to.be.a('number');
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOpportunitiesTasksTaskId', function() {
        it('should call getOpportunitiesTasksTaskId successfully', function(done) {
          // TODO: uncomment, update parameter values for getOpportunitiesTasksTaskId call and complete the assertions
          /*
          var task_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getOpportunitiesTasksTaskId(task_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetOpportunitiesTasksTaskIdOk);
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.notification).to.be.a('string');
            expect(data.notification).to.be("");
            expect(data.task_id).to.be.a('number');
            expect(data.task_id).to.be(0);

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
