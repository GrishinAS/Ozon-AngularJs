ozonApp.factory( 'myData', [ '$scope','$http',  function($scope, $http) {
    var data = [];
    console.log('this: ', this);
    var request = {
        method: 'get',
        url: 'http://127.0.0.1:5500/db/db.json',
        dataType: 'json',
        contentType: "application/json"
    };

    
    return {
      get: function(offset, limit) {
        $http(request)
        .then(function (jsonData) {
        var items = jsonData.data;
        $scope.data = Array.from(items.goods);
        return data.slice( offset, offset+limit );
    
    }, function (error){
        console.log(error);
    });   
      },
      count: function() {
        return $scope.data.count();
      }
    };
  }]);

ozonApp.controller('mainCtrl', [ '$scope', 'myData', function mainCtrl($scope, myData){

    $scope.numPerPage = 5;
    $scope.noOfPages = Math.ceil(myData.count() / $scope.numPerPage);
    console.log('$scope.noOfPages: ', $scope.noOfPages);
    $scope.currentPage = 1;
    

    $scope.setPage = function () {
        $scope.goods = myData.get( $scope.currentPage * ($scope.numPerPage - 1), $scope.numPerPage );
        console.log('Scope data in function setPage of mainCtrl: ' + $scope.data);
        console.log('$scope.currentPage: ', $scope.currentPage);
        console.log('$scope.noOfPages: ', $scope.noOfPages);
    };
  
    $scope.$watch( 'currentPage', $scope.setPage );
}]);

