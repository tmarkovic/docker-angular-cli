import { DockerStackPage } from './app.po';

describe('docker-stack App', function() {
  let page: DockerStackPage;

  beforeEach(() => {
    page = new DockerStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
