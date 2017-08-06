import { MindshiftPage } from './app.po';

describe('mindshift App', () => {
  let page: MindshiftPage;

  beforeEach(() => {
    page = new MindshiftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
