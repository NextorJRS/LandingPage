import { SpotifyService } from './../services/spotify.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent implements OnInit {

  artista: any = {}
  loading: boolean
  tracks: any[] = []

  constructor(
    private spotyServ: SpotifyService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: any) {}

  ngOnInit(): void {
    this.loading = true
    console.log(this.id.artitaId)
    this.spotyServ.getToken().subscribe(tk =>{
      this.spotyServ.token = tk
      this.spotyServ.getArtista(this.id.artitaId).subscribe(artist => {
        this.artista = artist
        this.loading = false
      })
      this.spotyServ.getTopTracks(this.id.artitaId).subscribe(tracks=>{
        this.tracks = tracks;
      })
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
