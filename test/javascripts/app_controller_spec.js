describe('AppController', function() {
  var ctrl,
      scope;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('AppController', { $scope: scope });
  }));

  describe('makeGuess', function() {

    beforeEach(function() {
      scope.title = { value: "This is a test title", real: "false" }
    });

    it('sets answered to true', function() {
      scope.makeGuess(false);
      expect(scope.answered).toBe(true);
    });

    it('sets the result as `correct` if the answer is right'), function() {
      scope.makeGuess(false);
      expect(scope.result).toBe("Correct");
    }

    it('sets the result as `incorrect` if the answer is wrong', function() {
      scope.makeGuess(true);
      expect(scope.result).toBe('Incorrect');
    })
  })
});