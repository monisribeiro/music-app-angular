import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() video: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getUrl() {
    const url = `http://www.youtube.com/embed/${this.video.id.videoId}?enablejsapi=1&origin=http://localhost:4200`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
