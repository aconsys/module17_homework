import { getPercents } from '../../utits/getPercents.js'

describe('Testing the percentage function', () => {
  const num = 155;
  const percent = 32;

  it('Should correctly operate with getPercents function', () => {
    expect(getPercents(percent, num)).toBe(49.6);
  });

  it('Should incorrectly operate with getPercents function', () => {
    expect(getPercents(percent, num)).toBe(49);
  });

  it('Should return notice', () => {
    expect(getPercents()).toBe('Percent and/or number are not set!');
  });
})