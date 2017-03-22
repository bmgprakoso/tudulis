import { ListorPage } from './app.po';

describe('listor App', function() {
  let page: ListorPage;

  beforeEach(() => {
    page = new ListorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
