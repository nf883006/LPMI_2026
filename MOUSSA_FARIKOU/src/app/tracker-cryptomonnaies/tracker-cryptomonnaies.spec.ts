import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackerCryptomonnaies } from './tracker-cryptomonnaies';

describe('TrackerCryptomonnaies', () => {
  let component: TrackerCryptomonnaies;
  let fixture: ComponentFixture<TrackerCryptomonnaies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackerCryptomonnaies],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackerCryptomonnaies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
