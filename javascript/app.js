function lotteryCtrl2($scope)
{
    $scope.lotteryModel = [{
            ProductName: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.',
            age: 1
        }, {
            ProductName: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.',
            age: 2
        }, {
            ProductName: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.',
            age: 3
        }
    ]
    $scope.selection = [];
    $scope.toggleSelection = function toggleSelection(ProductName){
        var idx = $scope.selection.indexOf(ProductName);
        console.log(idx)
        if(idx > -1)
        {
            $scope.selection.splice(idx, 1);
        }
        else
        {
            $scope.selection.push(ProductName);
        }
    }
    $scope.selection2 = [];
    $scope.radioSelection = function radioSelection(ProductName){
        var x = $scope.selection2.indexOf(ProductName);
            $scope.selection2.splice(x,1);  
            $scope.selection2.push(ProductName);            
        console.log(x);
        console.log($scope.selection2.splice(1, x));
    }
    $scope.inputext = function inptext(){
        $scope.text= '';
        
    }

}