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
    instance = new EveApi.IndustryApi();
  });

  describe('(package)', function() {
    describe('IndustryApi', function() {
      describe('getCharactersCharacterIdIndustryJobs', function() {
        it('should call getCharactersCharacterIdIndustryJobs successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdIndustryJobs call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.include_completed = true;
          opts.token = "token_example";

          instance.getCharactersCharacterIdIndustryJobs(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdIndustryJobs200Ok);
              expect(data.activity_id).to.be.a('number');
              expect(data.activity_id).to.be(0);
              expect(data.blueprint_id).to.be.a('number');
              expect(data.blueprint_id).to.be("0");
              expect(data.blueprint_location_id).to.be.a('number');
              expect(data.blueprint_location_id).to.be("0");
              expect(data.blueprint_type_id).to.be.a('number');
              expect(data.blueprint_type_id).to.be(0);
              expect(data.completed_character_id).to.be.a('number');
              expect(data.completed_character_id).to.be(0);
              expect(data.completed_date).to.be.a(Date);
              expect(data.completed_date).to.be(new Date());
              expect(data.cost).to.be.a('number');
              expect(data.cost).to.be(0.0);
              expect(data.duration).to.be.a('number');
              expect(data.duration).to.be(0);
              expect(data.end_date).to.be.a(Date);
              expect(data.end_date).to.be(new Date());
              expect(data.facility_id).to.be.a('number');
              expect(data.facility_id).to.be("0");
              expect(data.installer_id).to.be.a('number');
              expect(data.installer_id).to.be(0);
              expect(data.job_id).to.be.a('number');
              expect(data.job_id).to.be(0);
              expect(data.licensed_runs).to.be.a('number');
              expect(data.licensed_runs).to.be(0);
              expect(data.output_location_id).to.be.a('number');
              expect(data.output_location_id).to.be("0");
              expect(data.pause_date).to.be.a(Date);
              expect(data.pause_date).to.be(new Date());
              expect(data.probability).to.be.a('number');
              expect(data.probability).to.be(0.0);
              expect(data.product_type_id).to.be.a('number');
              expect(data.product_type_id).to.be(0);
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.start_date).to.be.a(Date);
              expect(data.start_date).to.be(new Date());
              expect(data.station_id).to.be.a('number');
              expect(data.station_id).to.be("0");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("active");
              expect(data.successful_runs).to.be.a('number');
              expect(data.successful_runs).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMining', function() {
        it('should call getCharactersCharacterIdMining successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMining call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCharactersCharacterIdMining(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdMining200Ok);
              expect(data._date).to.be.a(Date);
              expect(data._date).to.be(new Date());
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be("0");
              expect(data.solar_system_id).to.be.a('number');
              expect(data.solar_system_id).to.be(0);
              expect(data.type_id).to.be.a('number');
              expect(data.type_id).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningExtractions', function() {
        it('should call getCorporationCorporationIdMiningExtractions successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningExtractions call and complete the assertions
          /*
          var corporation_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningExtractions(corporation_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCorporationCorporationIdMiningExtractions200Ok);
              expect(data.chunk_arrival_time).to.be.a(Date);
              expect(data.chunk_arrival_time).to.be(new Date());
              expect(data.extraction_start_time).to.be.a(Date);
              expect(data.extraction_start_time).to.be(new Date());
              expect(data.moon_id).to.be.a('number');
              expect(data.moon_id).to.be(0);
              expect(data.natural_decay_time).to.be.a(Date);
              expect(data.natural_decay_time).to.be(new Date());
              expect(data.structure_id).to.be.a('number');
              expect(data.structure_id).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningObservers', function() {
        it('should call getCorporationCorporationIdMiningObservers successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningObservers call and complete the assertions
          /*
          var corporation_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningObservers(corporation_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCorporationCorporationIdMiningObservers200Ok);
              expect(data.last_updated).to.be.a(Date);
              expect(data.last_updated).to.be(new Date());
              expect(data.observer_id).to.be.a('number');
              expect(data.observer_id).to.be("0");
              expect(data.observer_type).to.be.a('string');
              expect(data.observer_type).to.be("structure");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationCorporationIdMiningObserversObserverId', function() {
        it('should call getCorporationCorporationIdMiningObserversObserverId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationCorporationIdMiningObserversObserverId call and complete the assertions
          /*
          var corporation_id = 56;
          var observer_id = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationCorporationIdMiningObserversObserverId(corporation_id, observer_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCorporationCorporationIdMiningObserversObserverId200Ok);
              expect(data.character_id).to.be.a('number');
              expect(data.character_id).to.be(0);
              expect(data.last_updated).to.be.a(Date);
              expect(data.last_updated).to.be(new Date());
              expect(data.quantity).to.be.a('number');
              expect(data.quantity).to.be("0");
              expect(data.recorded_corporation_id).to.be.a('number');
              expect(data.recorded_corporation_id).to.be(0);
              expect(data.type_id).to.be.a('number');
              expect(data.type_id).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCorporationsCorporationIdIndustryJobs', function() {
        it('should call getCorporationsCorporationIdIndustryJobs successfully', function(done) {
          // TODO: uncomment, update parameter values for getCorporationsCorporationIdIndustryJobs call and complete the assertions
          /*
          var corporation_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.include_completed = false;
          opts.page = 1;
          opts.token = "token_example";

          instance.getCorporationsCorporationIdIndustryJobs(corporation_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCorporationsCorporationIdIndustryJobs200Ok);
              expect(data.activity_id).to.be.a('number');
              expect(data.activity_id).to.be(0);
              expect(data.blueprint_id).to.be.a('number');
              expect(data.blueprint_id).to.be("0");
              expect(data.blueprint_location_id).to.be.a('number');
              expect(data.blueprint_location_id).to.be("0");
              expect(data.blueprint_type_id).to.be.a('number');
              expect(data.blueprint_type_id).to.be(0);
              expect(data.completed_character_id).to.be.a('number');
              expect(data.completed_character_id).to.be(0);
              expect(data.completed_date).to.be.a(Date);
              expect(data.completed_date).to.be(new Date());
              expect(data.cost).to.be.a('number');
              expect(data.cost).to.be(0.0);
              expect(data.duration).to.be.a('number');
              expect(data.duration).to.be(0);
              expect(data.end_date).to.be.a(Date);
              expect(data.end_date).to.be(new Date());
              expect(data.facility_id).to.be.a('number');
              expect(data.facility_id).to.be("0");
              expect(data.installer_id).to.be.a('number');
              expect(data.installer_id).to.be(0);
              expect(data.job_id).to.be.a('number');
              expect(data.job_id).to.be(0);
              expect(data.licensed_runs).to.be.a('number');
              expect(data.licensed_runs).to.be(0);
              expect(data.location_id).to.be.a('number');
              expect(data.location_id).to.be("0");
              expect(data.output_location_id).to.be.a('number');
              expect(data.output_location_id).to.be("0");
              expect(data.pause_date).to.be.a(Date);
              expect(data.pause_date).to.be(new Date());
              expect(data.probability).to.be.a('number');
              expect(data.probability).to.be(0.0);
              expect(data.product_type_id).to.be.a('number');
              expect(data.product_type_id).to.be(0);
              expect(data.runs).to.be.a('number');
              expect(data.runs).to.be(0);
              expect(data.start_date).to.be.a(Date);
              expect(data.start_date).to.be(new Date());
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("active");
              expect(data.successful_runs).to.be.a('number');
              expect(data.successful_runs).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIndustryFacilities', function() {
        it('should call getIndustryFacilities successfully', function(done) {
          // TODO: uncomment, update parameter values for getIndustryFacilities call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getIndustryFacilities(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetIndustryFacilities200Ok);
              expect(data.facility_id).to.be.a('number');
              expect(data.facility_id).to.be("0");
              expect(data.owner_id).to.be.a('number');
              expect(data.owner_id).to.be(0);
              expect(data.region_id).to.be.a('number');
              expect(data.region_id).to.be(0);
              expect(data.solar_system_id).to.be.a('number');
              expect(data.solar_system_id).to.be(0);
              expect(data.tax).to.be.a('number');
              expect(data.tax).to.be(0.0);
              expect(data.type_id).to.be.a('number');
              expect(data.type_id).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getIndustrySystems', function() {
        it('should call getIndustrySystems successfully', function(done) {
          // TODO: uncomment, update parameter values for getIndustrySystems call and complete the assertions
          /*
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";

          instance.getIndustrySystems(opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetIndustrySystems200Ok);
              {
                let dataCtr = data.cost_indices;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveApi.GetIndustrySystemsCostIndice);
                  expect(data.activity).to.be.a('string');
                  expect(data.activity).to.be("copying");
                  expect(data.cost_index).to.be.a('number');
                  expect(data.cost_index).to.be(0.0);
  
                        }
              }
              expect(data.solar_system_id).to.be.a('number');
              expect(data.solar_system_id).to.be(0);
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
