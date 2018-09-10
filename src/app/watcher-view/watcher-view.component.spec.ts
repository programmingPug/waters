import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherViewComponent } from './watcher-view.component';

describe('WatcherViewComponent', () => {
  let component: WatcherViewComponent;
  let fixture: ComponentFixture<WatcherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatcherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
