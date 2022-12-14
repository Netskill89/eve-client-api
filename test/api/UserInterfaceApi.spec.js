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
    instance = new EveApi.UserInterfaceApi();
  });

  describe('(package)', function() {
    describe('UserInterfaceApi', function() {
      describe('postUiAutopilotWaypoint', function() {
        it('should call postUiAutopilotWaypoint successfully', function(done) {
          // TODO: uncomment, update parameter values for postUiAutopilotWaypoint call
          /*
          var add_to_beginning = false;
          var clear_other_waypoints = false;
          var destination_id = 789;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postUiAutopilotWaypoint(add_to_beginning, clear_other_waypoints, destination_id, opts, function(error, data, response) {
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
      describe('postUiOpenwindowContract', function() {
        it('should call postUiOpenwindowContract successfully', function(done) {
          // TODO: uncomment, update parameter values for postUiOpenwindowContract call
          /*
          var contract_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postUiOpenwindowContract(contract_id, opts, function(error, data, response) {
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
      describe('postUiOpenwindowInformation', function() {
        it('should call postUiOpenwindowInformation successfully', function(done) {
          // TODO: uncomment, update parameter values for postUiOpenwindowInformation call
          /*
          var target_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postUiOpenwindowInformation(target_id, opts, function(error, data, response) {
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
      describe('postUiOpenwindowMarketdetails', function() {
        it('should call postUiOpenwindowMarketdetails successfully', function(done) {
          // TODO: uncomment, update parameter values for postUiOpenwindowMarketdetails call
          /*
          var type_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postUiOpenwindowMarketdetails(type_id, opts, function(error, data, response) {
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
      describe('postUiOpenwindowNewmail', function() {
        it('should call postUiOpenwindowNewmail successfully', function(done) {
          // TODO: uncomment, update parameter values for postUiOpenwindowNewmail call
          /*
          var new_mail = new EveApi.PostUiOpenwindowNewmailNewMail();
          new_mail.body = "";
          new_mail.recipients = [0];
          new_mail.subject = "";
          new_mail.to_corp_or_alliance_id = 0;
          new_mail.to_mailing_list_id = 0;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postUiOpenwindowNewmail(new_mail, opts, function(error, data, response) {
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
    });
  });

}));
