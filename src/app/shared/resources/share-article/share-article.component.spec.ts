import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareArticleComponent } from './share-article.component';

describe('ShareArticleComponent', () => {
  let component: ShareArticleComponent;
  let fixture: ComponentFixture<ShareArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
