var Controllers = angular.module("App.controllers",[]);

//CONTROLLERS--------------------------------------------------------------------
Controllers.controller('CFC',function($scope,$http){
  $scope.tabels=["ADDRESS","BANKACCOUNT","CERTIFICATES","DRIVINGLICENSE","MEMBERSHIP","PASSPORT","RATIONCARD","VOTERID"];
  $scope.checkbox="srikar-test from partners Controller";
  $scope.name=" ";
  $scope.uniqueid=" ";
  $scope.selectedName=" ";

 $scope.Details=function()
  {
  var inputdata={table: $scope.selectedName,Unique_Id:$scope.uniqueid};
 console.log(inputdata)
 $http({
        method : "GET",
        url : "/records",
        params: inputdata,
        headers:[{
          "Content-Type":"application/json"
        }]
}).then(function mySuccess(response) {
        $scope.ldata = response.data;
     }, function errorCallback(response) {
       $scope.ldata = failed;
});

}


}).config(function($interpolateProvider) {
$interpolateProvider.startSymbol('//').endSymbol('//');
});
