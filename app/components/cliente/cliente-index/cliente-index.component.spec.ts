import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteIndexComponent } from './cliente-index.component';

describe('ClienteIndexComponent', () => {
  let component: ClienteIndexComponent;
  let fixture: ComponentFixture<ClienteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
