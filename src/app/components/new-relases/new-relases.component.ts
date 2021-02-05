import { DialogComponent } from './../../shared/dialog/dialog.component';
import { SpotifyService } from './../../shared/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-relases',
  templateUrl: './new-relases.component.html',
  styles: [
  ]
})
export class NewRelasesComponent implements OnInit {

  data: any[]
  dataLoaded: Promise<boolean>
  loading: boolean

  constructor(
    private spotifyServ: SpotifyService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.loading = true
    this.spotifyServ.getToken().subscribe(tk =>{
      this.spotifyServ.token = tk
      this.spotifyServ.getNewRelases().subscribe(x =>{
        this.data = x
        console.log(x)
        this.dataLoaded = Promise.resolve(true)
        this.loading = false
      })
    })
  }

  openDialog(item: any): void {
    let artitaId
    if (item.type === 'artist') {
      artitaId = item.id;
    } else {
      artitaId = item.artists[0].id;
    }
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { artitaId }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    })
  }

}
