import { MyDAppPage } from './app.po';

describe('my-d-app App', () => {
  let page: MyDAppPage;

  beforeEach(() => {
    page = new MyDAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
