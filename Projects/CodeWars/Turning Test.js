function isTuringEquation(s){
    
    var str = s.split('').reverse().join('').split('=')

    var end = Number(str[0]);
    var equa = eval(str[1]);
    
    if (end == equa) {
        return true
    } return false

  }



  isTuringEquation("73+42=16")
  //true