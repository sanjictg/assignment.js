//feetToMile
function feetToMile(feet){
    var mile= feet/5280;
    return mile;
    }
    var mile1=feetToMile(5000);
    console.log(mile1);
    
//woodCalculator
function woodCalculator(chair,table,bad){
    var chairCount = chair * 12;
    var tableCount = table * 15;
    var badCount = bad * 18;
    var totalWood = chairCount + tableCount + badCount;
    console.log(totalWood)
    return totalWood;
    }
    
    var woodResult = woodCalculator(1, 3, 5);
    
//brickcalculator
//creating a brickCalclator
function brickCalculator(numberOfFloor){
    if (numberOfFloor <0) {
        return "floor number can't be a negative value"
    }  else {
        if (numberOfFloor <= 10) {
            firstTenFloor = numberOfFloor;
          return firstTenFloor * 15 * 1000;
        } else if ((numberOfFloor > 10) && (numberOfFloor <= 20)) {
            firstTenFloor = 10 
            tenToTwentyFloor = numberOfFloor - firstTenFloor;
            return ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor *12 * 1000));
        } else if (numberOfFloor > 20) {
            firstTenFloor = 10
            twentyToMore = numberOfFloor -20;
            return ((firstTenFloor * 15 * 1000) + (firstTenFloor *12 * 1000) +  (twentyToMore * 10 * 1000));
        }
    }
}
console.log(brickCalculator(22));
console.log(brickCalculator(2));
console.log(brickCalculator(8));
console.log(brickCalculator(15));
console.log(brickCalculator(26));
console.log(brickCalculator(28));

//tinyFriend
function tinyFriend(name){
    var  friendsNames= name[0];
    var str = friendsNames.length ;
    for(i = 1; i < name.length; i++){
        var smallName = name[i] ;
        var smallWord = smallName.length ;
        if(smallWord < str){
            friendsNames= smallName ;
        }
    }
    return friendsNames;
}
var strName = ["farjana", "abid", "asif", "rupu", "ruz"];
result = tinyFriend(strName)
console.log(result)

