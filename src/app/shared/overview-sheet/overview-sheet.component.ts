import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-overview-sheet',
  templateUrl: './overview-sheet.component.html',
  styles: [
  ]
})
export class OverviewSheetComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<OverviewSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
