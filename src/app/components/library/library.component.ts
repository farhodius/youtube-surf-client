import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: any = {channels: [], videos: [], playlists: []};
  resourceTypes: string[];
  constructor(private data: DataService, private fbuilder: FormBuilder) {}

  ngOnInit() {
    // Set search form
    this.searchForm = this.fbuilder.group({
      q: '',
      type: 'all',
      limit: 50
    });
    this.getResources();
  }

  getResources() {
    this.data
      .getResources<any>(
        this.searchForm.value.type,
        this.searchForm.value.q,
        this.searchForm.value.limit
      )
      .subscribe((data) => {
        this.resetSearchResults();
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
