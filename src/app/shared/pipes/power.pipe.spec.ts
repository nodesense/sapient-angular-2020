import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should use power of n and m', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(2, 3)).toBe(8);
  });


  it('it should use default 1', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(5)).toBe(5);
  });
});
