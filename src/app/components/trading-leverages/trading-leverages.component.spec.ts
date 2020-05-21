import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TradingLeveragesComponent } from './trading-leverages.component';

describe('TradingLeveragesComponent', () => {
  let component: TradingLeveragesComponent;
  let fixture: ComponentFixture<TradingLeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingLeveragesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TradingLeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
