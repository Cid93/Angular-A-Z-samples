import { Angular2AZSamplesPage } from './app.po';

describe('angular2-a-z-samples App', function() {
  let page: Angular2AZSamplesPage;

  beforeEach(() => {
    page = new Angular2AZSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
