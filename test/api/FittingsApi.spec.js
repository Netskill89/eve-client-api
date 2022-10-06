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
    instance = new EveApi.FittingsApi();
  });

  describe('(package)', function() {
    describe('FittingsApi', function() {
      describe('deleteCharactersCharacterIdFittingsFittingId', function() {
        it('should call deleteCharactersCharacterIdFittingsFittingId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCharactersCharacterIdFittingsFittingId call
          /*
          var character_id = 56;
          var fitting_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteCharactersCharacterIdFittingsFittingId(character_id, fitting_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdFittings', function() {
        it('should call getCharactersCharacterIdFittings successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdFittings call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdFittings(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdFittings200Ok);
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.fitting_id).to.be.a('number');
              expect(data.fitting_id).to.be(0);
              {
                let dataCtr = data.items;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveApi.GetCharactersCharacterIdFittingsItem);
                  expect(data.flag).to.be.a('string');
                  expect(data.flag).to.be("Cargo");
                  expect(data.quantity).to.be.a('number');
                  expect(data.quantity).to.be(0);
                  expect(data.type_id).to.be.a('number');
                  expect(data.type_id).to.be(0);
  
                        }
              }
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.ship_type_id).to.be.a('number');
              expect(data.ship_type_id).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdFittings', function() {
        it('should call postCharactersCharacterIdFittings successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdFittings call and complete the assertions
          /*
          var character_id = 56;
          var fitting = new EveApi.PostCharactersCharacterIdFittingsFitting();
          fitting.description = "";
          fitting.items = [new EveApi.PostCharactersCharacterIdFittingsItem()];
          fitting.items[0].flag = "Cargo";
          fitting.items[0].quantity = 0;
          fitting.items[0].type_id = 0;
          fitting.name = "";
          fitting.ship_type_id = 0;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdFittings(character_id, fitting, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.PostCharactersCharacterIdFittingsCreated);
            expect(data.fitting_id).to.be.a('number');
            expect(data.fitting_id).to.be(0);

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
