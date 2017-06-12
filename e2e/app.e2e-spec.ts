import { SkyGateAppPage } from './app.po';

describe('sky-gate-app App', () => {
  let page: SkyGateAppPage;

  beforeEach(() => {
    page = new SkyGateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
