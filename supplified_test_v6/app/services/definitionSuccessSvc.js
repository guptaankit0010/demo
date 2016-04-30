/**
 * Created by Ankit Gupta on 4/22/2016.
 */
/**
 * Created by ankit on 20/4/16.
 */

(function () {

    angular.module("app").factory("definitionSuccess",["$localStorage",definitionSuccess]);

    function definitionSuccess($localStorage){

        function success(definitionList) {

            if(vm.word){
                vm.noUserInput=false;
            }
            vm.allDefinitions=[];
            //limiting the results view to 3 definitions
            if(definitionList.list.length > 3){
                for(var i=0;i<3;i++){
                    vm.allDefinitions.push(definitionList.list[i].definition);
                }
            }
            else
                for(var x=0;x<definitionList.list.length;x++){
                    vm.allDefinitions.push(definitionList.list[x].definition);
                }
            if(vm.word)
                vm.wordSearched=definitionList.word;
            else
                vm.wordSearched="null";
            //boolean conditions for rendering results view
            vm.isResultAvailable=true;
            vm.isBookmarked=false;
        }
        return {

            success: success
        }
    }
})();
