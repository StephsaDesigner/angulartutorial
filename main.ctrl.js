//This is the controller
//This is where the business logic goes

/*We first retrieve the app module we created early and then use
the controller function to instantiate a new controller. The controller
function takes two parameters. The first is the controller name and the second is a function where we will place our controlling code.*/
angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
      {
            title: 'Game of Thrones',
            year: 2011,
            favorite: true
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];
    vm.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }
  ];
  vm.order = vm.orders[0];
  //Add data to form
  //The code declares an object called new which the form uses to store its
  //input values denoted by the ngModel value (i.e. ng-model="main.new.year").
  vm.new = {};
  vm.addShow = function() {
    vm.shows.push(vm.new);
    vm.new = {};
  };
});
