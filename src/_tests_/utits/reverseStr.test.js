import { reverseStr } from '../../utits/reverseStr' 

xdescribe('Testing string reverse function', () => {
  it('Sould correctly reverse string', () => {
    expect(reverseStr('12345')).toBe('54321');
    expect(reverseStr('It is string')).toBe('gnirts si tI');
  });
});