AngularJS
side:

//Load Deals
//init array
$scope.ArrayDeals = [];
GetStuffAPI.GetDeals().then(function (d) {
    $scope.ArrayDeals = d.data;
    //init people
    $scope.ArrayPeople = [];
    //init cars
    $scope.ArrayCars = [];
    //load people
    GetStuffAPI.GetPeople().then(function (d) {
        $scope.ArrayPeople = d.data;
        //load cars
        GetStuffAPI.GetCars().then(function (d) {
            $scope.ArrayCars = d.data;

            angular.forEach($scope.ArrayDeals, function (DealsValue, DealsKey) {

                if (DealsValue) //make sure to skip undefined
                {
                    angular.forEach($scope.ArrayPeople, function (PeopleValue, PeopleKey) {

                        if (PeopleValue && PeopleValue.DealID == DealsValue.DealID) //make sure to skip undefined
                        {
                            $scope.ArrayDeals[DealsKey].people.push(value); //adding all the people to that deal
                        }
                    })
                    angular.forEach($scope.ArrayCars, function (CarsValue, CarsKey) {
                        if (CarsValue && CarsValue.DealID == DealsValue.DealID) //make sure to skip undefined
                        {
                            $scope.ArrayDeals[DealsKey].cars.push(value); //adding all cars to that deal
                        }
                    })

                }
            });

        })

    });

});



