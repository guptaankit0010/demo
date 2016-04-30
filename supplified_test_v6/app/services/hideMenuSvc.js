/**
 * Created by Ankit Gupta on 4/22/2016.
 */
/**
 * Created by ankit on 20/4/16.
 */

(function () {

    angular.module("app").factory("hideMenu",["$localStorage",hideMenu]);

    function hideMenu($localStorage){

        function hide() {

                $("bookmark-area").removeClass("resMenu");
                vm.isMenuOpen=false;

        }
        return {

           hide: hide
        }
    }
})();