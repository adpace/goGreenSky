'use strict';

describe('gsApp.version module', function() {
  beforeEach(module('gsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
