'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


<!DOCTYPE html>
<html>

  <head>
    <script data-require="angular.js@*" data-semver="1.3.0-beta.5" src="https://code.angularjs.org/1.3.0-beta.5/angular.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body>
    <h1>Tipster</h1><!-- Tipster Title-->
    <form name="Calc">
      <table border="1">
        <tr>
        <td> 
           <h1>Total Price</h1><!-- total price Text Title-->
          <input type="text" name="priceOfMeat" size="16" /> <!-- This is the total price textbox-->
        </td>
        </tr>
        
        <tr>
        <td>
         <h1>Number of people</h1><!-- total price Text Title-->
          <input type="text" name="numOfPeople" size="16" /> <!-- This is the total number of people-->
        </td>
        </tr>
        
        <tr>
        <td>
        
        <h1>Percentage of tip</h1><!-- total price Text Title-->
          <input type="text" name="percentOfTip" size="16" /> <!-- This is the percentage of tip textbox-->
        </td>
        </tr>
        
        <tr>
        <td> 
       <button type="button">Calculate!</button>
        </td>
        </tr>
        
        <tr>
        <td>
        <h1>Tip price</h1><!-- total price Text Title-->
          <input type="text" name="tipFinalPrice" size="16" /> <!-- This is the tip final price-->
        </td>
        </tr>
        
        <tr>
        <td>
        <h1>Total price</h1><!-- total price Text Title-->
          <input type="text" name="finalPrice" size="16" /> <!-- This is the  final price-->
        </td>
        </tr>
        
         <tr>
        <td>
        <h1>Total price per person</h1><!-- total price Text Title-->
          <input type="text" name="finalPricePerPerson" size="16" /> <!-- This is the  final price per person-->
        </td>
        </tr>
        
        
      </table>
    </form>
  </body>

</html>
