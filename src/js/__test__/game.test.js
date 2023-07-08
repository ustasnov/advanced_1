import { orderByProps } from '../game';

test('should return sorted properties array', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const resultArray = [
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  const sortedEntriesArray = orderByProps(obj, ['name', 'level']);
  expect(resultArray).toEqual(sortedEntriesArray);
});

test('should throw error', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  function testPropertyName() {
    const sortedEntriesArray = orderByProps(obj, ['description', 'level']);
    return sortedEntriesArray;
  }

  expect(testPropertyName).toThrow(new Error('Не могу отсортировать свойства, т.к. у объекта нет свойства description'));
});
