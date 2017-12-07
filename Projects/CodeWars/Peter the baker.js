function cakes(recipe, available) {
    // TODO: insert code
    var cakes = 0;
    var amount = 0;
    var limit = 100000;

    for (var key in recipe) {

        for (var key2 in available) {
            if (key === key2) {
                if (key === 0) {
                    limit = 0
                } else {
                    amount = available[key2] / recipe[key]
                    if (amount < limit) {
                        limit = Math.floor(amount);
                    }
                }
            }
        }

    }

    return Math.floor(limit)
};


var recipe = { flour: 500, sugar: 200, eggs: 1 };
var available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
cakes(recipe, available)