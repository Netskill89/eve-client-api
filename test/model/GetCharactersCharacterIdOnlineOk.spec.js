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
    describe('GetCharactersCharacterIdOnlineOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetCharactersCharacterIdOnlineOk();
      });

      it('should create an instance of GetCharactersCharacterIdOnlineOk', function() {
        // TODO: update the code to test GetCharactersCharacterIdOnlineOk
        expect(instance).to.be.a(EveApi.GetCharactersCharacterIdOnlineOk);
      });

      it('should have the property last_login (base name: "last_login")', function() {
        // TODO: update the code to test the property last_login
        expect(instance).to.have.property('last_login');
        // expect(instance.last_login).to.be(expectedValueLiteral);
      });

      it('should have the property last_logout (base name: "last_logout")', function() {
        // TODO: update the code to test the property last_logout
        expect(instance).to.have.property('last_logout');
        // expect(instance.last_logout).to.be(expectedValueLiteral);
      });

      it('should have the property logins (base name: "logins")', function() {
        // TODO: update the code to test the property logins
        expect(instance).to.have.property('logins');
        // expect(instance.logins).to.be(expectedValueLiteral);
      });

      it('should have the property online (base name: "online")', function() {
        // TODO: update the code to test the property online
        expect(instance).to.have.property('online');
        // expect(instance.online).to.be(expectedValueLiteral);
      });

    });
  });

}));
