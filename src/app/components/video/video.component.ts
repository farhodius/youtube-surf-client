import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {VideoplayerComponent} from '../dialogs/videoplayer/videoplayer.component';
import {DataService} from 'src/app/services/data.service';
import {VideoInterface} from 'src/app/interfaces/resource/VideoInterface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  inputs: ['videoInfo']
})
export class VideoComponent implements OnInit {
  videoInfo: VideoInterface;
  fullDesc = false;

  constructor(public dialog: MatDialog, private data: DataService) {}

  playVideo() {
    const dialogRef = this.dialog.open(VideoplayerComponent, {
      width: '90%',
      data: this.videoInfo
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }

  addToLibrary() {
    this.data.saveResource(this.videoInfo).subscribe(
      (data) => {
        this.videoInfo.saved = true;
        console.log(data);
      },
      (error) => {
        console.log('error in component', error);
      }
    );
  }

  removeFromLibrary() {
    this.data.removeResource(this.videoInfo).subscribe(
      (data) => {
        this.videoInfo.saved = false;
        console.log(data);
      },
      (error) => {
        console.log('error in component', error);
      }
    );
  }

  ngOnInit() {}
}
