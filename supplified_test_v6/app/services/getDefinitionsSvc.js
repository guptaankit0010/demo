/**
 * Created by ankit on 20/4/16.
 */
/**
 * Created by ankit on 08-04-2016.
 */
(function () {

    angular.module("app").factory("getDefinitionsSvc",["$q","$timeout","$http",getDefinitionsSvc]);

    function getDefinitionsSvc($q,$timeout,$http){

        function getDefinitions(word){

            return $http({

                method:"GET",
                url:"https://mashape-community-urban-dictionary.p.mashape.com/define",
                params:{term:word},
                headers:{

                    "X-Mashape-Key": "VrZBZyMZUWmshpR4iecrjq6XQCmnp1Oar7QjsnbknMXfI5U2IS",
                     Accept : "application/json"
                }
            })
                .then(sendResponseData)
                .catch(sendGetDefinitionsError);
        }
        function sendResponseData(response){

            return {
                list:response.data.list,
                word:response.data.list[0].word
            };
        }
        function sendGetDefinitionsError(response){

            return $q.reject("Error retrieving Word ( HTTP status : "+ response.status+"}");
        }
        return {

            getDefinitions: getDefinitions

        }
    }
})();