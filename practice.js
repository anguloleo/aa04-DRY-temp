
function findBigNum(num1, num2){
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }
  return bigNum;
}

function multiplyBiggerNumByTwo(num1, num2) {
  
    return findBigNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {

    return findBigNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBigNum(sum1, sum2);

    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  let bigDog = findBigNum(weight1, weight2)

  if (bigDog != weight1) {
    smallDog = weight1;
  } else smallDog = weight2;
   
    return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
