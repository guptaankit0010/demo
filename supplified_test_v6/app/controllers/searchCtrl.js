/**
 * Created by ankit on 20/4/16.
 */

(function() {

    angular.module("app").controller("searchCtrl", ["definitionSuccess","getDefinitionsSvc","$localStorage","$scope","calBookmarkCount","hideMenu","checkLocalStorage",searchCtrl]);

    function searchCtrl(definitionSuccess,getDefinitionsSvc,$localStorage,$scope,calBookmarkCount,hideMenu,checkLocalStorage) {

        vm=this;
        vm.noUserInput=true;
        vm.isBookmarksAvailable=false;
        vm.isResultAvailable=false;
        vm.isBookmarkSelected=false;
        vm.showBookmarks=false;
        vm.isBookmarked=false;
        vm.isMenuOpen=false;
        vm.isError=false;
        vm.allDefinitions=[];

       checkLocalStorage.check();

        vm.searchWord=function(word){
            getDefinitionsSvc.getDefinitions(word)
                .then(getDefinitionsSuccess,null,getBooksNotification)
                .catch(handleError)
                .finally(getDefinitionsComplete);

            function getDefinitionsSuccess(definitionList){
                vm.isError=false;
                definitionSuccess.success(definitionList);
            }
            function getBooksNotification(notification){
                console.log("Promise notification : "+ notification);
            }
            function handleError(reason){
                vm.isError=true;
                vm.isResultAvailable=false;
                vm.error="No results available";
            }
            function getDefinitionsComplete(){
                console.log("get All books.json has completed");
            }
        };

        vm.calBookmarkCount=function(){
            vm.bookmarkCount=calBookmarkCount.calCount();
        };

        vm.calBookmarkCount();

        vm.hideMenu=function(){
            hideMenu.hide();
        }

    }
})();