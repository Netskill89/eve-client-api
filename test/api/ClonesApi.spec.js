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
    instance = new EveApi.ClonesApi();
  });

  describe('(package)', function() {
    describe('ClonesApi', function() {
      describe('getCharactersCharacterIdClones', function() {
        it('should call getCharactersCharacterIdClones successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdClones call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdClones(character_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetCharactersCharacterIdClonesOk);
            expect(data.home_location).to.be.a(EveApi.GetCharactersCharacterIdClonesHomeLocation);
                  expect(data.home_location.location_id).to.be.a('number');
              expect(data.home_location.location_id).to.be("0");
              expect(data.home_location.location_type).to.be.a('string');
              expect(data.home_location.location_type).to.be("station");
            {
              let dataCtr = data.jump_clones;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveApi.GetCharactersCharacterIdClonesJumpClone);
                {
                  let dataCtr = data.implants;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                expect(data.jump_clone_id).to.be.a('number');
                expect(data.jump_clone_id).to.be(0);
                expect(data.location_id).to.be.a('number');
                expect(data.location_id).to.be("0");
                expect(data.location_type).to.be.a('string');
                expect(data.location_type).to.be("station");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.last_clone_jump_date).to.be.a(Date);
            expect(data.last_clone_jump_date).to.be(new Date());
            expect(data.last_station_change_date).to.be.a(Date);
            expect(data.last_station_change_date).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdImplants', function() {
        it('should call getCharactersCharacterIdImplants successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdImplants call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdImplants(character_id, opts, function(error, data, response) {
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
    });
  });

}));