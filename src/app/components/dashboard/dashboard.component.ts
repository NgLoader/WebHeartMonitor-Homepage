import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild('accessCodeField') accessCodeField: ElementRef;
  @ViewChild('popupAccessCodeField') popupAccessCodeField: ElementRef;

  @ViewChild('popupDiv') popupDiv: ElementRef;
  @ViewChild('popupBackgroundDiv') popupBackgroundDiv: ElementRef;

  @ViewChild('openButton') openButton: ElementRef;

  constructor() { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (event.target == this.popupBackgroundDiv.nativeElement) {
      this.popupDiv.nativeElement.style.display = "none";
    }
  }

  public openPopup() {
    this.popupAccessCodeField.nativeElement.innerHTML = this.getAccessCodeAddress();
    this.popupDiv.nativeElement.style.display = "flex";
  }

  public copyTrackingAddress() {
    navigator.clipboard.writeText(this.getAccessCodeAddress());
  }

  public openTrackingAddress() {
    window.open(this.getAccessCodeAddress());
  }

  public validateInput() {
    const value = this.accessCodeField.nativeElement.value;
    if (value.length != 12) {
      return this.handleValidate(false);
    }

    return this.handleValidate(true);
  }

  private handleValidate(success: boolean): boolean {
    if (success) {
      this.accessCodeField.nativeElement.style.borderColor = "green";
      this.openButton.nativeElement.disabled = false;
      return true;
    }
    this.accessCodeField.nativeElement.style.borderColor = "red";
    this.openButton.nativeElement.disabled = true;

    return false;
  }

  private getAccessCodeAddress() {
    return "https://whm.wuffy.eu/monitor.html?accessCode=" + this.accessCodeField.nativeElement.value;
  }
}
