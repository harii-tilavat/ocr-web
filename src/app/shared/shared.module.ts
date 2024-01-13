import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { SliderComponent } from './slider/slider.component';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { MoreStoriesComponent } from './resources/more-stories/more-stories.component';
import { PipesModule } from '../_pipes/pipes.module';
import { DirectiveModule } from '../_directive/directive.module';
import { PlayerCanvasComponent } from './player-canvas/player-canvas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceCardComponent } from './resources/resource-card/resource-card.component';
import { ResourceDescriptionComponent } from './resources/resource-description/resource-description.component';
import { ResourceHeadingComponent } from './resources/resource-heading/resource-heading.component';
import { NewsLetterComponent } from './resources/news-letter/news-letter.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceSearchComponent } from './resources/resource-search/resource-search.component';
import { FileLoaderComponent } from './file-loader/file-loader.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SliderItemComponent,
    MoreStoriesComponent,
    PlayerCanvasComponent,
    ResourceCardComponent,
    ResourceDescriptionComponent,
    ResourceHeadingComponent,
    ResourceListComponent,
    NewsLetterComponent,
    ResourceSearchComponent,
    FileLoaderComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    PipesModule,
    DirectiveModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    SliderItemComponent,
    MoreStoriesComponent,
    PlayerCanvasComponent,
    ResourceCardComponent,
    ResourceDescriptionComponent,
    ResourceHeadingComponent,
    ResourceListComponent,
    NewsLetterComponent,
    ResourceSearchComponent,
    FileLoaderComponent,
    FileUploadComponent
  ]
})
export class SharedModule { }
