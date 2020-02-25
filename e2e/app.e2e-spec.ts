import { PROTemplatePage } from './app.po';

describe('PRO App', function() {
  let page: PROTemplatePage;

  beforeEach(() => {
    page = new PROTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
