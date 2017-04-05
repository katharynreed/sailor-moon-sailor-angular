import { SailorGamePage } from './app.po';

describe('sailor-game App', function() {
  let page: SailorGamePage;

  beforeEach(() => {
    page = new SailorGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
