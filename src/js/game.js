function sortEntriesByKey(arr) {
  return arr.sort((x, y) => (x.key > y.key ? 1 : -1));
}

function orderByProps(obj, propArr) {
  const entriesArray = [];
  const sortedEntriesArray = [];

  propArr.forEach((val) => {
    if (Object.prototype.hasOwnProperty.call(obj, val)) {
      entriesArray.push({ key: val, value: obj[val] });
    } else {
      throw new Error(`Не могу отсортировать свойства, т.к. у объекта нет свойства ${val}`);
    }
  });

  for (const prop in obj) {
    if (propArr.indexOf(prop) === -1) {
      sortedEntriesArray.push({ key: prop, value: obj[prop] });
    }
  }
  sortEntriesByKey(sortedEntriesArray).forEach((val) => {
    entriesArray.push(val);
  });

  return entriesArray;
}

module.exports = {
  orderByProps,
};
