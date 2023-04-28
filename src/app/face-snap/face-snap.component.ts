import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core'; //OnInit est est une interface qu'on a implementé
import { FaceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../Service/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
 constructor(private faceSnapsService: faceSnapsService,
              private router: Router){

 }

  ngOnInit(): void { //ngOnit est une classe qui sert à initialisé les données de la classe
    this.buttonText = 'Oh snap'
  }

  OnSnap(){
    if (this.buttonText == 'Oh snap') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oup unsnap'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap'
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
