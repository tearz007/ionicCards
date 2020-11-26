import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesertPage } from './desert.page';

describe('DesertPage', () => {
  let component: DesertPage;
  let fixture: ComponentFixture<DesertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
