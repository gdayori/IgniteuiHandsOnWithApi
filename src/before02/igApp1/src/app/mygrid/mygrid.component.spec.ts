import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridComponent } from './mygrid.component';
import { IgxGridModule } from 'igniteui-angular/main';

describe('MyGridComponent', () => {
  let component: MyGridComponent;
  let fixture: ComponentFixture<MyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridComponent ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
