import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 caracters', () => {
    expect(() => {
      new Content('1234');
    }).toThrow();
  });

  it('Should not be able to create a notification content with less than 240 caracters', () => {
    expect(() => {
      new Content('1'.repeat(241));
    }).toThrow();
  });
});
