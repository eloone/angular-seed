'use strict';

/* jasmine specs for controllers go here */

describe('CtrlUne', function(){
  var scope, ctrl, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/une.json').
          respond({data : [{ "titre" : "exemple"}], data_count :10});

    scope = $rootScope.$new();
    ctrl = $controller('CtrlUne', {$scope: scope});
  }));


  it('should get 10 elements from xhr', function() {
      expect(scope.elements).toBeUndefined();
      $httpBackend.flush();
      //dump(scope.elements);
      expect(scope.elements.data_count).toEqual(10);

  });
});


describe('CtrlRubrique', function(){
  var scope, ctrl, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $routeParams){
      
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/international.json').
          respond({data : [{ "titre" : "exemple"}], nom: "International", data_count :10});
      $routeParams.rubriqueId = 'international';
      
    scope = $rootScope.$new();
    ctrl = $controller('CtrlRubrique', {$scope: scope});
  }));


  it('should get 10 elements from xhr', function() {
      expect(scope.rubrique).toBeUndefined();
      $httpBackend.flush();
      //dump(scope.elements);
      expect(scope.rubrique.data_count).toEqual(10);
      expect(scope.rubrique.nom).toEqual("International");

  });
  
  it('should have a rubrique name', function() {
      expect(scope.rubrique).toBeUndefined();
      $httpBackend.flush();

      expect(scope.rubrique.nom).toEqual("International");

  });
  
});
