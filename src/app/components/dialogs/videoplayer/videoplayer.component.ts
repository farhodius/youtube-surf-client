import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  videoUrl: SafeResourceUrl;
  constructor(
    public dialogRef: MatDialogRef<VideoplayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer
  ) {
    let url: string;
    if (this.data.resourceType === 'video') {
      url = 'https://www.youtube.com/embed/' + this.data.id;
    } else {
      url = 'https://www.youtube.com/embed/videoseries?list=' + this.data.id;
    }
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {}
}
