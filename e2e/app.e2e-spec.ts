import { Ng4PipesPage } from './app.po';

describe('ng4-pipes App', () => {
  let page: Ng4PipesPage;

  beforeEach(() => {
    page = new Ng4PipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
