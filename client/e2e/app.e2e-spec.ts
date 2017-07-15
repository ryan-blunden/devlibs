import { DevLibsPage } from './app.po';

describe('dev-libs App', () => {
  let page: DevLibsPage;

  beforeEach(() => {
    page = new DevLibsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dl!!');
  });
});
