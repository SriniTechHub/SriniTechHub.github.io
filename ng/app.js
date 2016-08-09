app = angular.module("myApp", [])

app.controller("mainCtrl", function ($scope, $http) {
    $scope.width = 500;
    $scope.height = 500;

    var svg = d3.select("svg");
    var color = d3.scale.category20()

    var force = d3.layout.force()
        .charge(-120)
        .linkDistance(80)
        .size([$scope.width, $scope.height]);
    $scope.$watch('strLable', function (newValue, oldValue, scope) {
        if (newValue) {
            $scope.mainString = scope.strLable;
            $scope.nodes[0].text = scope.strLable;
            $scope.links[0].text = scope.strLable;
        }

    });
    $scope.$watch('charLable', function (newValue, oldValue, scope) {
        var str = scope.charLable;

        if (str) {
            $scope.children = str.split("");
            for (var i = 0; i <= $scope.children.length - 1; i++) {
                $scope.nodes[i + 1].text = $scope.children[i];
                $scope.links[i + 1].text = $scope.children[i];
            }

        }
    });

    $http.get('miserables.json').success(function (graph) {

        $scope.nodes = graph.nodes;
        $scope.links = graph.links;

        for (var i = 0; i < $scope.links.length; i++) {
            $scope.links[i].strokeWidth = Math.round(Math.sqrt($scope.links[i].value))

        }
        for (var i = 0; i < $scope.nodes.length; i++) {
            $scope.nodes[i].color = color(i)
        }

        force.nodes($scope.nodes)
            .links($scope.links)
            .on("tick", function () {
                $scope.$apply()
            })
            .start();
    })
});