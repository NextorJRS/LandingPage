import { SpotifyService } from './../../shared/services/spotify.service';
import { OverviewSheetComponent } from './../../shared/overview-sheet/overview-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  email: FormControl
  userName: FormControl
  durationInSeconds = 5

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _snackBar: MatSnackBar,
    private _serv: SpotifyService
    ) { }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email])
    this.userName = new FormControl('', [Validators.required, Validators.minLength(3)])
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : ''
  }

  getErrorMessageUser() {
    if (this.userName.hasError('required')) {
      return 'You must enter a value'
    }
    return this.userName.hasError('userName') ? 'Not a valid user' : ''
  }

  openBottomSheet(): void {
    this._bottomSheet.open(OverviewSheetComponent);
  }

  save(): void{
    this._snackBar.open('¡Saved!', this.userName.value, {
      duration: 3000,
    })
    this.userName.reset()
    this.email.reset()
  }

}
