import { Component } from '@angular/core';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  title = "Page Principale Album Music";
  albums = ALBUMS;
}
 