import { Goldfish2webPage } from './app.po';

describe('goldfish2web App', () => {
  let page: Goldfish2webPage;

  beforeEach(() => {
    page = new Goldfish2webPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
