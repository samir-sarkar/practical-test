/**
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns boolean
 */
const isCyclic = (array1, array2) => {
  const length1 = array1?.length;
  const length2 = array2?.length;
  if (!!length1 && !!length2 && length1 > 1) {
    let adjuscentList = {};
    const numberOfVertices = array1.length;
    for (let i = 0; i < numberOfVertices; i++) {
      adjuscentList[array1[i]] = array2[i];
    }

    const visited = new Array(numberOfVertices).fill(false);

    let pointer = array1[0];
    for (let i = 0; i < numberOfVertices; i++) {
      end = adjuscentList[pointer];
      const idx = array1.findIndex((el) => el === pointer);
      if (idx > -1) {
        visited[idx] = true;
      }
      pointer = adjuscentList[pointer];
    }

    const condition1 = visited.every((el) => el);
    const condition2 = array1[0] === pointer;

    if (condition1 && condition2) {
      return true;
    } else return false;
  } else {
    return false;
  }
};
