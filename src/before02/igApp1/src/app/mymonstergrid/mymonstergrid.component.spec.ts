import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxExcelExporterService } from 'igniteui-angular/services';

import { MyMonsterGridComponent } from './mymonstergrid.component';

import {
  IgxGridModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxToggleModule,
  IgxCheckboxModule
} from 'igniteui-angular/main';
describe('MyMonsterGridComponent', () => {
  let component: MyMonsterGridComponent;
  let fixture: ComponentFixture<MyMonsterGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonsterGridComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxCheckboxModule
      ],
      providers: [IgxExcelExporterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonsterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
