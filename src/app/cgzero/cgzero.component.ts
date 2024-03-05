import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-cgzero',
  templateUrl: './cgzero.component.html',
  styleUrls: ['./cgzero.component.css'],
})
export class CgzeroComponent {
  constructor(private clipboard: Clipboard) {}
  disabled = false;
  max = 255;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  rvalue = 0;
  gvalue = 0;
  bvalue = 0;

  rgbaToHexa() {
    const hexR = this.rvalue.toString(16).padStart(2, '0');
    const hexG = this.gvalue.toString(16).padStart(2, '0');
    const hexB = this.bvalue.toString(16).padStart(2, '0');

    return `#${hexR}${hexG}${hexB}`;
  }

  copyRGBA() {
    const rgbaValue = `rgba(${this.rvalue},${this.gvalue},${this.bvalue})`;
    this.clipboard.copy(rgbaValue);
  }

  copyHEX() {
    const hexValue = this.rgbaToHexa();
    this.clipboard.copy(hexValue);
  }
}
