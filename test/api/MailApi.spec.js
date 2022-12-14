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
    instance = new EveApi.MailApi();
  });

  describe('(package)', function() {
    describe('MailApi', function() {
      describe('deleteCharactersCharacterIdMailLabelsLabelId', function() {
        it('should call deleteCharactersCharacterIdMailLabelsLabelId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCharactersCharacterIdMailLabelsLabelId call
          /*
          var character_id = 56;
          var label_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteCharactersCharacterIdMailLabelsLabelId(character_id, label_id, opts, function(error, data, response) {
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
      describe('deleteCharactersCharacterIdMailMailId', function() {
        it('should call deleteCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteCharactersCharacterIdMailMailId call
          /*
          var character_id = 56;
          var mail_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.deleteCharactersCharacterIdMailMailId(character_id, mail_id, opts, function(error, data, response) {
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
      describe('getCharactersCharacterIdMail', function() {
        it('should call getCharactersCharacterIdMail successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMail call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.labels = [3.4];
          opts.last_mail_id = 56;
          opts.token = "token_example";

          instance.getCharactersCharacterIdMail(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdMail200Ok);
              expect(data.from).to.be.a('number');
              expect(data.from).to.be(0);
              expect(data.is_read).to.be.a('boolean');
              expect(data.is_read).to.be(false);
              {
                let dataCtr = data.labels;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.mail_id).to.be.a('number');
              expect(data.mail_id).to.be(0);
              {
                let dataCtr = data.recipients;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailRecipient);
                  expect(data.recipient_id).to.be.a('number');
                  expect(data.recipient_id).to.be(0);
                  expect(data.recipient_type).to.be.a('string');
                  expect(data.recipient_type).to.be("alliance");
  
                        }
              }
              expect(data.subject).to.be.a('string');
              expect(data.subject).to.be("");
              expect(data.timestamp).to.be.a(Date);
              expect(data.timestamp).to.be(new Date());
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailLabels', function() {
        it('should call getCharactersCharacterIdMailLabels successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailLabels call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailLabels(character_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailLabelsOk);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailLabelsLabel);
                expect(data.color).to.be.a('string');
                expect(data.color).to.be("#0000fe");
                expect(data.label_id).to.be.a('number');
                expect(data.label_id).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.unread_count).to.be.a('number');
                expect(data.unread_count).to.be(0);

                      }
            }
            expect(data.total_unread_count).to.be.a('number');
            expect(data.total_unread_count).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailLists', function() {
        it('should call getCharactersCharacterIdMailLists successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailLists call and complete the assertions
          /*
          var character_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailLists(character_id, opts, function(error, data, response) {
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
              expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailLists200Ok);
              expect(data.mailing_list_id).to.be.a('number');
              expect(data.mailing_list_id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getCharactersCharacterIdMailMailId', function() {
        it('should call getCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for getCharactersCharacterIdMailMailId call and complete the assertions
          /*
          var character_id = 56;
          var mail_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.If_None_Match = "If_None_Match_example";
          opts.token = "token_example";

          instance.getCharactersCharacterIdMailMailId(character_id, mail_id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailMailIdOk);
            expect(data.body).to.be.a('string');
            expect(data.body).to.be("");
            expect(data.from).to.be.a('number');
            expect(data.from).to.be(0);
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            expect(data.read).to.be.a('boolean');
            expect(data.read).to.be(false);
            {
              let dataCtr = data.recipients;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(EveApi.GetCharactersCharacterIdMailMailIdRecipient);
                expect(data.recipient_id).to.be.a('number');
                expect(data.recipient_id).to.be(0);
                expect(data.recipient_type).to.be.a('string');
                expect(data.recipient_type).to.be("alliance");

                      }
            }
            expect(data.subject).to.be.a('string');
            expect(data.subject).to.be("");
            expect(data.timestamp).to.be.a(Date);
            expect(data.timestamp).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdMail', function() {
        it('should call postCharactersCharacterIdMail successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdMail call and complete the assertions
          /*
          var character_id = 56;
          var mail = new EveApi.PostCharactersCharacterIdMailMail();
          mail.approved_cost = "0";
          mail.body = "";
          mail.recipients = [new EveApi.PostCharactersCharacterIdMailRecipient()];
          mail.recipients[0].recipient_id = 0;
          mail.recipients[0].recipient_type = "alliance";
          mail.subject = "";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdMail(character_id, mail, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('number');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postCharactersCharacterIdMailLabels', function() {
        it('should call postCharactersCharacterIdMailLabels successfully', function(done) {
          // TODO: uncomment, update parameter values for postCharactersCharacterIdMailLabels call and complete the assertions
          /*
          var character_id = 56;
          var label = new EveApi.PostCharactersCharacterIdMailLabelsLabel();
          label.color = "#0000fe";
          label.name = "";
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.postCharactersCharacterIdMailLabels(character_id, label, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('number');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('putCharactersCharacterIdMailMailId', function() {
        it('should call putCharactersCharacterIdMailMailId successfully', function(done) {
          // TODO: uncomment, update parameter values for putCharactersCharacterIdMailMailId call
          /*
          var character_id = 56;
          var contents = new EveApi.PutCharactersCharacterIdMailMailIdContents();
          contents.labels = [0];
          contents.read = false;
          var mail_id = 56;
          var opts = {};
          opts.datasource = "tranquility";
          opts.token = "token_example";

          instance.putCharactersCharacterIdMailMailId(character_id, contents, mail_id, opts, function(error, data, response) {
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
