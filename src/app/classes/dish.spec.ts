import { Dish } from './dish';

describe('Dish', () => {
  it('should create an instance', () => {
    expect(new Dish("the sushi")).toBeTruthy();
  });
});