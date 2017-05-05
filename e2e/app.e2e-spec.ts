import { OhyesnoyesWebNGPage } from './app.po';

describe('ohyesnoyes-web-ng App', () => {
  let page: OhyesnoyesWebNGPage;

  beforeEach(() => {
    page = new OhyesnoyesWebNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
