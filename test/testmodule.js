describe('Services', function () {
  beforeEach(module('legacyOwls.factory'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('SavedArticles Factory', function () {
    var $httpBackend, SavedArticles;

    beforeEach(inject(function (_$httpBackend_, _SavedArticles_) {
      $httpBackend = _$httpBackend_;
      SavedArticles = _SavedArticles_;
    }));

    it('should exist', function () {
      expect(SavedArticles).to.exist;
    });

    it('should have a method `getArticlesFromDB`', function () {
      expect(SavedArticles.getArticlesFromDB).to.be.a('function');
    });

  });

});

describe('Articles', function () {
  beforeEach(module('legacyOwls.factory'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('Articles Factory', function () {
    var $httpBackend, Articles;

    beforeEach(inject(function (_$httpBackend_, _Articles_) {
      $httpBackend = _$httpBackend_;
      Articles = _Articles_;
    }));

    it('should exist', function () {
      expect(Articles).to.exist;
    });

    it('should have a method `getLatest`', function () {
      expect(Articles.getLatest).to.be.a('function');
    });

  });

});

describe('AuthService', function () {
  beforeEach(module('legacyOwls.factory'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('AuthService Factory', function () {
    var $httpBackend, Articles;

    beforeEach(inject(function (_$httpBackend_, _AuthService_) {
      $httpBackend = _$httpBackend_;
      AuthService = _AuthService_;
    }));

    it('should exist', function () {
      expect(AuthService).to.exist;
    });

    it('should have a method `login`', function () {
      expect(AuthService.login).to.be.a('function');
    });

    it('should have a method `logout`', function () {
      expect(AuthService.logout).to.be.a('function');
    });

    it('should have a method `register`', function () {
      expect(AuthService.register).to.be.a('function');
    });

  });

});