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
    instance = new EveApi.WarsApi();
  });

  describe('(package)', function() {
    describe('WarsApi', function() {
      describe('getWars', function() {
        it('should call getWars successfully', function(done) {
          // TODO: uncomment, update parameter values for getWars call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.max_war_id = 56;

          instance.getWars(opts, function(error, data, response) {
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
      describe('getWarsWarId', function() {
        it('should call getWarsWarId successfully', function(done) {
          // TODO: uncomment, update parameter values for getWarsWarId call and complete the assertions
          /*
          var war_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getWarsWarId(war_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetWarsWarIdOk);
            expect(data.aggressor).to.be.a(EveApi.GetWarsWarIdAggressor);
                  expect(data.aggressor.alliance_id).to.be.a('number');
              expect(data.aggressor.alliance_id).to.be(0);
              expect(data.aggressor.corporation_id).to.be.a('number');
              expect(data.aggressor.corporation_id).to.be(0);
              expect(data.aggressor.isk_destroyed).to.be.a('number');
              expect(data.aggressor.isk_destroyed).to.be(0.0);
              expect(data.aggressor.ships_killed).to.be.a('number');
              expect(data.aggressor.ships_killed).to.be(0);
            {
              let dataCtr = data.allies;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveApi.GetWarsWarIdAlly);
                expect(data.alliance_id).to.be.a('number');
                expect(data.alliance_id).to.be(0);
                expect(data.corporation_id).to.be.a('number');
                expect(data.corporation_id).to.be(0);

                      }
            }
            expect(data.declared).to.be.a(Date);
            expect(data.declared).to.be(new Date());
            expect(data.defender).to.be.a(EveApi.GetWarsWarIdDefender);
                  expect(data.defender.alliance_id).to.be.a('number');
              expect(data.defender.alliance_id).to.be(0);
              expect(data.defender.corporation_id).to.be.a('number');
              expect(data.defender.corporation_id).to.be(0);
              expect(data.defender.isk_destroyed).to.be.a('number');
              expect(data.defender.isk_destroyed).to.be(0.0);
              expect(data.defender.ships_killed).to.be.a('number');
              expect(data.defender.ships_killed).to.be(0);
            expect(data.finished).to.be.a(Date);
            expect(data.finished).to.be(new Date());
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.mutual).to.be.a('boolean');
            expect(data.mutual).to.be(false);
            expect(data.open_for_allies).to.be.a('boolean');
            expect(data.open_for_allies).to.be(false);
            expect(data.retracted).to.be.a(Date);
            expect(data.retracted).to.be(new Date());
            expect(data.started).to.be.a(Date);
            expect(data.started).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getWarsWarIdKillmails', function() {
        it('should call getWarsWarIdKillmails successfully', function(done) {
          // TODO: uncomment, update parameter values for getWarsWarIdKillmails call and complete the assertions
          /*
          var war_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.page = 1;

          instance.getWarsWarIdKillmails(war_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetWarsWarIdKillmails200Ok);
              expect(data.killmail_hash).to.be.a('string');
              expect(data.killmail_hash).to.be("");
              expect(data.killmail_id).to.be.a('number');
              expect(data.killmail_id).to.be(0);
            }

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
