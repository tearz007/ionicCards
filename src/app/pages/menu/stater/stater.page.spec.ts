import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaterPage } from './stater.page';

describe('StaterPage', () => {
  let component: StaterPage;
  let fixture: ComponentFixture<StaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
