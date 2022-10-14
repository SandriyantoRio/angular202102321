import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;
declare const Plugin : any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit
{

  constructor(private renderer : Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body,"login-page");
    this.renderer.removeClass(document.body,"sidebar-open");
    this.renderer.addClass(document.body,"sidebar-closed");

    $('[data-wedget="treeview"]').Treeview("init"); // to enable the side-menu item dropdown
    Plugin.call($(this))
  }
  ngOnInit(): void {
  }

}
