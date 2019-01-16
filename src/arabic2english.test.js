const arabic2English = require('./arabic2english');

test('converts arabic numbers to english letters', () => {
  expect(arabic2English(1)).toBe('one');
  expect(arabic2English(11)).toBe('eleven');
  expect(arabic2English(100)).toBe('one hundred');
  expect(arabic2English(236)).toBe('two hundred thirty six');
  expect(arabic2English(2050)).toBe('two thousand fifty');
});
