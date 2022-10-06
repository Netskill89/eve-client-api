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
    describe('GetCorporationsCorporationIdStarbasesStarbaseIdOk', function() {
      beforeEach(function() {
        instance = new EveApi.GetCorporationsCorporationIdStarbasesStarbaseIdOk();
      });

      it('should create an instance of GetCorporationsCorporationIdStarbasesStarbaseIdOk', function() {
        // TODO: update the code to test GetCorporationsCorporationIdStarbasesStarbaseIdOk
        expect(instance).to.be.a(EveApi.GetCorporationsCorporationIdStarbasesStarbaseIdOk);
      });

      it('should have the property allow_alliance_members (base name: "allow_alliance_members")', function() {
        // TODO: update the code to test the property allow_alliance_members
        expect(instance).to.have.property('allow_alliance_members');
        // expect(instance.allow_alliance_members).to.be(expectedValueLiteral);
      });

      it('should have the property allow_corporation_members (base name: "allow_corporation_members")', function() {
        // TODO: update the code to test the property allow_corporation_members
        expect(instance).to.have.property('allow_corporation_members');
        // expect(instance.allow_corporation_members).to.be(expectedValueLiteral);
      });

      it('should have the property anchor (base name: "anchor")', function() {
        // TODO: update the code to test the property anchor
        expect(instance).to.have.property('anchor');
        // expect(instance.anchor).to.be(expectedValueLiteral);
      });

      it('should have the property attack_if_at_war (base name: "attack_if_at_war")', function() {
        // TODO: update the code to test the property attack_if_at_war
        expect(instance).to.have.property('attack_if_at_war');
        // expect(instance.attack_if_at_war).to.be(expectedValueLiteral);
      });

      it('should have the property attack_if_other_security_status_dropping (base name: "attack_if_other_security_status_dropping")', function() {
        // TODO: update the code to test the property attack_if_other_security_status_dropping
        expect(instance).to.have.property('attack_if_other_security_status_dropping');
        // expect(instance.attack_if_other_security_status_dropping).to.be(expectedValueLiteral);
      });

      it('should have the property attack_security_status_threshold (base name: "attack_security_status_threshold")', function() {
        // TODO: update the code to test the property attack_security_status_threshold
        expect(instance).to.have.property('attack_security_status_threshold');
        // expect(instance.attack_security_status_threshold).to.be(expectedValueLiteral);
      });

      it('should have the property attack_standing_threshold (base name: "attack_standing_threshold")', function() {
        // TODO: update the code to test the property attack_standing_threshold
        expect(instance).to.have.property('attack_standing_threshold');
        // expect(instance.attack_standing_threshold).to.be(expectedValueLiteral);
      });

      it('should have the property fuel_bay_take (base name: "fuel_bay_take")', function() {
        // TODO: update the code to test the property fuel_bay_take
        expect(instance).to.have.property('fuel_bay_take');
        // expect(instance.fuel_bay_take).to.be(expectedValueLiteral);
      });

      it('should have the property fuel_bay_view (base name: "fuel_bay_view")', function() {
        // TODO: update the code to test the property fuel_bay_view
        expect(instance).to.have.property('fuel_bay_view');
        // expect(instance.fuel_bay_view).to.be(expectedValueLiteral);
      });

      it('should have the property fuels (base name: "fuels")', function() {
        // TODO: update the code to test the property fuels
        expect(instance).to.have.property('fuels');
        // expect(instance.fuels).to.be(expectedValueLiteral);
      });

      it('should have the property offline (base name: "offline")', function() {
        // TODO: update the code to test the property offline
        expect(instance).to.have.property('offline');
        // expect(instance.offline).to.be(expectedValueLiteral);
      });

      it('should have the property online (base name: "online")', function() {
        // TODO: update the code to test the property online
        expect(instance).to.have.property('online');
        // expect(instance.online).to.be(expectedValueLiteral);
      });

      it('should have the property unanchor (base name: "unanchor")', function() {
        // TODO: update the code to test the property unanchor
        expect(instance).to.have.property('unanchor');
        // expect(instance.unanchor).to.be(expectedValueLiteral);
      });

      it('should have the property use_alliance_standings (base name: "use_alliance_standings")', function() {
        // TODO: update the code to test the property use_alliance_standings
        expect(instance).to.have.property('use_alliance_standings');
        // expect(instance.use_alliance_standings).to.be(expectedValueLiteral);
      });

    });
  });

}));