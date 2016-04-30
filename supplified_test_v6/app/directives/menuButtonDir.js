/**
 * Created by Ankit Gupta on 4/21/2016.
 */
/**
 * Created by Ankit Gupta on 4/21/2016.
 */
(function(){

    angular.module("app").directive("menuButton",function() {

        return {

            restrict: 'AE',
            templateUrl: 'app/templates/menuButtonView.html',
            scope:true,
            link: function (scope) {
                scope.displayBookmarks=function(){
                        $("bookmark-area").addClass("resMenu");
                        vm.isMenuOpen=true;
                };

            }

        }
    })

})();