function countTheAnimals(animals) {
    var fig = [];
    var tempTotal = [];
    for (var key in animals) {
        fig.push(animals[key])      
    }
        fig
       
        let temp = Number(fig[0]);
        var newFig = fig.reduce(function(prev, item){
           temp = temp + Number(item);  
            return temp
        })

        fig
        newFig


}

countTheAnimals({aardvark: '1101', tiger: '1100', donkey: '1100', emu: '1010'})