import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ChannelInterface} from 'src/app/interfaces/resource/ChannelInterface';
import {VideoInterface} from 'src/app/interfaces/resource/VideoInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: {
    channels: ChannelInterface[];
    videos: VideoInterface[];
    playlists: VideoInterface[];
  } = {channels: [], videos: [], playlists: []};
  resourceTypes: string[];
  constructor(private data: DataService, private fbuilder: FormBuilder) {}

  ngOnInit() {
    // Set search form
    this.searchForm = this.fbuilder.group({
      q: '',
      type: 'all',
      limit: 10
    });
  }

  search() {
    this.resetSearchResults();
    this.data
      .search<any>(this.searchForm.value.type, this.searchForm.value.q, this.searchForm.value.limit)
      .subscribe((data) => {
        data.forEach((r) => {
          this.searchResults[r.resourceType + 's'].push(r);
        });
      });
  }

  resetSearchResults() {
    this.searchResults.videos = [];
    this.searchResults.playlists = [];
    this.searchResults.channels = [];
  }
}
