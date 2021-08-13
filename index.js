
// function superbowlWin(record){
//     const result = record.find(dubs => dubs === result)
    
//     return result
// }

const superbowlWin = (record) => {
  //  if (record.find((dub) => dub.result === dub.result['W'])){
  //   return record.find((dub) => dub.result === dub.result['W']).year

  //  } else {
  //      return undefined
  //  }
  if (record.find((dub) => dub.result === 'W')){
    return record.find((dub) => dub.result === 'W').year
  }
  // record.find((dub) => dub.result === 'W').year

}

// function superbowlWin(arrayOfObjects) {
//     function isWin(element) {
//         return (element["result"] === "W");
//     }
//     // return arrayOfObjects.find(isWin)["year"];
//     if (arrayOfObjects.find(isWin)) {
//         return arrayOfObjects.find(isWin)["year"];
//     } else {
//         return undefined;
//     }
// }


console.log(superBowlWin())