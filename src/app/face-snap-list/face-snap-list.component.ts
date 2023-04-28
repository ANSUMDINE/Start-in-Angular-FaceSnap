import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../Service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!:FaceSnap[];
constructor(private faceSnapsService: faceSnapsService){}

ngOnInit(): void {
  this.faceSnaps = this.faceSnapsService.getAllFaceSnap();
}

}
