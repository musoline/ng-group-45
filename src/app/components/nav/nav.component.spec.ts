import { TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app-nav'`, () => {
    const fixture = TestBed.createComponent(NavComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app-nav');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app-nav app is running!');
  });
});
