import { Component } from '@angular/core';

/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {
  input: any = '';
  output: any = '';
  update() {
    console.log('Input Givin: ', this.input);
    console.log('Output: ', new Date(this.input).getTime());
    this.output = new Date(this.input).getTime();
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
