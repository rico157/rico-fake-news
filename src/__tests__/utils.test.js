import { formatDate } from '../utils/utils';

let date = '';
beforeEach(() => {
  date = '2020-10-24T15:54:39.894Z';
});
describe('formatDate', () => {
  it('returns a string', () => {
    expect(typeof formatDate(date)).toBe('string');
  });
  it('returns a formatted date', () => {
    const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    expect(formatDate(date)).toMatch(dateFormat);
  });
  it('it is a pure function / does not mutate the input', () => {
    formatDate(date);
    expect(date).toBe('2020-10-24T15:54:39.894Z');
  });
});
