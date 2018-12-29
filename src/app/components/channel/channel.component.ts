import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {ChannelInterface} from 'src/app/interfaces/resource/ChannelInterface';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  inputs: ['channelInfo']
})
export class ChannelComponent implements OnInit {
  channelInfo: ChannelInterface;
  fullDesc = false;

  constructor(private data: DataService) {}

  addToLibrary() {
    this.data.saveResource(this.channelInfo).subscribe(
      (data) => {
        this.channelInfo.saved = true;
        console.log(data);
      },
      (error) => {
        console.log('error in component', error);
      }
    );
  }

  removeFromLibrary() {
    this.data.removeResource(this.channelInfo).subscribe(
      (data) => {
        this.channelInfo.saved = false;
        console.log(data);
      },
      (error) => {
        console.log('error in component', error);
      }
    );
  }

  ngOnInit() {}
}
