// code your solution here

function superbowlWin(array) {
  let thing = array.find((el) => {
    return el.result === "W";
  });
  if (thing) {
    return thing.year;
  } else {
    return undefined;
  }
}
superbowlWin(record);
