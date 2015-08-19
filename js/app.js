/**
* Main Module
*/
var app = angular.module("app", ["gettext", "ui.utils.masks"]);


/**
* mainController
* description: control the languages of the page
**/
app.controller("mainController", function($scope, $http, gettextCatalog){

	/* Arrays */
	$scope.languages = ['en', 'pt_BR', 'es_AR'];
	$scope.nationalities = [];
	$scope.states = [];
	$scope.cities = [];
	
	/* Objects */
	$scope.countries = {};
	$scope.address = {};
	$scope.info = {};

	/* Strings */
	$scope.lang = 'en';
	$scope.info.name = "";
	$scope.info.email = "";
	$scope.info.nationality = "";
	$scope.info.gender = "";
	$scope.info.cpf = 0;
	$scope.info.birth="";

	$scope.address.country = "";
	$scope.address.state = "";
	$scope.address.city = "";

	/* Boolean */
	$scope.sent = false;

	/* It's another way to bring values */
	$http.get('js/config/nationalities.json').success (function(data){
		$scope.nationalityEn = angular.fromJson(data.en[0].nationalities);
		$scope.nationalityBr = angular.fromJson(data.pt_BR[0].nationalities);
		$scope.nationalityAr = angular.fromJson(data.es_AR[0].nationalities);
		
		$scope.countryEn = angular.fromJson(data.en[0].countries);
		$scope.countryBr = angular.fromJson(data.pt_BR[0].countries);
		$scope.countryAr = angular.fromJson(data.es_AR[0].countries);
		
		$scope.nationalities = $scope.nationalityEn;
		$scope.countries = $scope.countryEn;
	});

	/* Change the languages/ update the scope */
	$scope.changeLanguage = function(){
		gettextCatalog.currentLanguage = $scope.lang;
		gettextCatalog.setCurrentLanguage($scope.lang);
	};

	$scope.sendData = function(){
		$scope.sent = !$scope.sent;
		var myEl = angular.element( document.querySelector( '.jumbotron.success' ) );
		myEl.removeClass('hidden'); 
	};

	/* Control of nationalities and countries */
	$scope.$watch('lang', function(newLang) {
		switch (newLang) {
			case 'en':
				$scope.nationalities = $scope.nationalityEn;
				$scope.countries = $scope.countryEn;
			break;
			case 'pt_BR':
				$scope.nationalities = $scope.nationalityBr;
				$scope.countries = $scope.countryBr;
			break;
			case 'es_AR':
				$scope.nationalities = $scope.nationalityAr;
				$scope.countries = $scope.countryAr;
			break;
			default:
				$scope.countries = $scope.countryEn;
		}
	});

	/* Control of address.states */
	$scope.$watch('address.country', function(newCountry){
		console.log(newCountry);
		switch (newCountry) {
			case 'DE':
				$scope.states = [
					{name:'Hamburgo', code: 'HA'},
					{name: 'Bremem', code: 'BE'},
					{name: 'Sarre', code: 'SA'},
					{name: 'Saxónia', code: 'SX'}
				];
			break;
			case 'AR':
				$scope.states = [
					{name:'Buenos Aires', code: 'BA'},
					{name: 'Códoba', code: 'CD'},
					{name: 'Rosário', code: 'RO'},
					{name: 'La Plata', code: 'LP'}
				];
			break;
			case 'AU':
				$scope.states = [
					{name:'Adelaide', code: 'AD'},
					{name: 'Albany', code: 'AL'},
					{name: 'Canberra', code: 'CA'},
					{name: 'Sydney', code: 'SY'}
				];
			break;
			case 'BR':
				$scope.states = [
					{name:'Acre', code: 'AC'},
					{name: 'Bahia', code: 'BH'},
					{name: 'Goiás', code: 'GO'},
					{name: 'Rio de Janeiro', code: 'RJ'}
				];
			break;
		}
	});

	/* Control of address.cities */
	$scope.$watch('address.state', function(newState){
		switch (newState) {
			/* Brasil */
			case 'AC':
				$scope.cities = [
					{name:'Jordão', code: 'JO'},
					{name: 'Feijo', code: 'FE'}
				];
			break;
			case 'BH':
				$scope.cities = [
					{name:'Mirante', code: 'MI'},
					{name: 'Salvador', code: 'SA'}
				];
			break;
			case 'GO':
				$scope.cities = [
					{name:'Araçu', code: 'AU'},
					{name: 'Aruanã', code: 'AR'}
				];
			break;
			case 'RJ':
				$scope.cities = [
					{name:'Pavuna', code: 'PA'},
					{name: 'Ipanema', code: 'IP'}
				];
			break;
			/* Austrália */
			case 'AD':
				$scope.cities = [
					{name:'Victoria', code: 'VC'},
					{name: 'Tasmania', code: 'TI'}
				];
			break;
			case 'AL':
				$scope.cities = [
					{name:'Yakamia', code: 'YK'},
					{name: 'West', code: 'WT'}
				];
			break;
			case 'CA':
				$scope.cities = [
					{name:'Burley', code: 'BY'},
					{name: 'Griffin', code: 'GR'}
				];
			break;
			case 'SY':
				$scope.cities = [
					{name:'Rose bay', code: 'RB'},
					{name: 'Surry hills', code: 'SH'}
				];
			break;
			/* Argentina */
			case 'BA':
				$scope.cities = [
					{name:'Trujui', code: 'TJ'},
					{name: 'Lanús', code: 'LU'}
				];
			break;
			case 'CD':
				$scope.cities = [
					{name:' San Francisco', code: 'SF'},
					{name: 'La Carlota', code: 'LC'}
				];
			break;
			case 'RO':
				$scope.cities = [
					{name:'Loreto', code: 'LR'},
					{name: 'Oberá', code: 'OA'}
				];
			break;
			case 'LP':
				$scope.cities = [
					{name:'La Rioja', code: 'LJ'},
					{name: 'Alba Posse', code: 'AP'}
				];
			break;
			/* Alemanha */
			case 'HA':
				$scope.cities = [
					{name:'Wedel', code: 'WL'},
					{name: 'Glinde', code: 'GL'}
				];
			break;
			case 'BE':
				$scope.cities = [
					{name:'Oyten', code: 'OY'},
					{name: 'Hude', code: 'HU'}
				];
			break;
			case 'SA':
				$scope.cities = [
					{name:'Harz', code: 'HZ'},
					{name: 'BurgerLand', code: 'BL'}
				];
			break;
			case 'SX':
				$scope.cities = [
					{name:'Witterberg', code: 'WT'},
					{name: 'Stendal', code: 'SL'}
				];
			break;
		}
	});
	
});


/**
* gettextCatalog
* description: initiate the page with the language specified
**/
app.run(function(gettextCatalog) {
	gettextCatalog.currentLanguage = 'en';
	gettextCatalog.debug = true;
});
