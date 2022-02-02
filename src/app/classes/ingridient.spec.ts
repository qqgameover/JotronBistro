import { Ingridient } from './ingridient';

describe('Ingridient', () => {
  it('should create an instance', () => {
    expect(new Ingridient("Salmon", 30)).toBeTruthy();
  });
});
