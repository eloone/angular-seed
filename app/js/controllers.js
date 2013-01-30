'use strict';

/* Controllers */


function CtrlUne($scope, $http) {
    $http.get('data/une.json').success(function(query) {
        $scope.elements = query;
    });
}


function CtrlRubrique($scope, $http, $routeParams) {
    $http.get('data/' + $routeParams.rubriqueId + '.json').success(function(data) {
        $scope.rubrique = data;
    });
}

function CtrlSite($scope, $location){
    $scope.menu = [
        {
            "nom" : "Home",
            "url" : ""
        },
        {
            "nom" : "International",
            "url" : "international"
        },
        {   "nom" : "Politique",
            "url" : "politique"
        },
        {   "nom" : "Economie",
            "url" : "economie"
        },
        {   "nom" : "Style",
            "url" : "style"
        }
    ];
    
    $scope.goNext = function(){
        var nextUrl,
            nextIndex = $scope.currentIndex + 1 ;
            
            if( nextIndex < $scope.menu.length){
                nextUrl = $scope.menu[nextIndex].url;
                $location.path('/'+nextUrl);
                $scope.currentIndex ++;
            }
    }
    
    $scope.goPrevious = function(){
        var prevUrl,
            prevIndex = $scope.currentIndex - 1 ;
            
            if( prevIndex >= 0){
                prevUrl = $scope.menu[prevIndex].url;
                $location.path('/'+prevUrl);
                $scope.currentIndex --;
            }
    }

    function indexFromCurrentUrl(url){
        var currentRoute = $location.path().replace(/^\//,'');
        
        for(var i = 0;i < $scope.menu.length;i++){
            if($scope.menu[i].url == currentRoute){
                return i;
            }
        }
    }
    
    $scope.currentIndex = indexFromCurrentUrl();

}
