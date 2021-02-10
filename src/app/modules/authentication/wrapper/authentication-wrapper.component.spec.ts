import { AuthenticationWrapperComponent } from './authentication-wrapper.component';

fdescribe('AuthenticationWrapperComponent', () => {
  let component: AuthenticationWrapperComponent;

  beforeEach(() => {
    component = new AuthenticationWrapperComponent();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
