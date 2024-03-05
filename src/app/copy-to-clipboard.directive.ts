import { Directive, HostListener, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  constructor(private clipboard: Clipboard) {}

  @Input('appCopyToClipboard') text!: string; // Input to receive the text to copy

  @HostListener('click')
  onClick() {
    if (this.text) {
      this.clipboard.copy(this.text); // Copy the text
    }
  }
}
