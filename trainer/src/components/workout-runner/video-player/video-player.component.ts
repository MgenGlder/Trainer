import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal } from 'angular2-modal';

import { overlayConfigFactory } from 'angular2-modal';

import { VideoDialogComponent, VideoDialogContext } from './video-dialog.component';

@Component({
  selector: 'video-player',
  templateUrl: '/src/components/workout-runner/video-player/video-player.html'
})
export class VideoPlayerComponent {
  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  @Input() videos: Array<string>; //generic fill in- in the class definition for Array, theres a <T> which represents whatever you give it in a statement like this.
  safeVideoUrls: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer, private modal: Modal) { }
  /*
    The playVideo function calls the Modal class open function, passing in the dialog component to open a
    new instance of the VideoDialogContext class with the videoId of the YouTube video. Before
    Proceeding, delete the ngOnChange function from the file too.
  */
  playVideo(videoId: string) {
    this.modal.open(VideoDialogComponent, overlayConfigFactory(new VideoDialogContext(videoId)));
  };
  /*
    //antiquated
    ngOnChanges() {
      this.safeVideoUrls = this.videos ?
        this.videos.map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v))
        : this.videos;
    }
  */
}