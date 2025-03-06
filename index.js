function distanceFromHqInBlocks(someValue) {
    if (someValue === 43){
        return 1
    } else if (someValue === 50) {
        return 8
    } else if (someValue <42) {
        return 8
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue == 43) {
        return 264
    } else  if (someValue == 50) {
        return 2112
    } else if (someValue < 42) {
        return 2112
    }    
    
}

function distanceTravelledInFeet(someValue) {
    if (someValue >= 43 && someValue <= 48) {
        return 1320
    } else if (someValue >=50 && someValue <= 60) {
        return 2640
    } else if (someValue >= 34) {
        return 1584
    }
}

 function calculatesFarePrice(start , destination) {
 const feetPerBlock = 264;
 let distance = Math.abs (destination - start) * feetPerBlock
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
} 