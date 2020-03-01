import { GridComponent } from './../grid/grid.component';
import { TableComponent } from './../table/table.component';
import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HostTemplateDirective } from 'src/app/directives/host-template.directive';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  @ViewChild(HostTemplateDirective, {static: true})
  hostDirective: HostTemplateDirective;

  
  html=`<div>
      <h1>Angular Router</h1>
  </div>`;



  
  
  safeHtml: any;

  constructor(private sanitizer:DomSanitizer, 
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.html);
    this.loadComponent('table');

  }



componentMap = {
  "table": TableComponent,
  "grid": GridComponent,
  "list": GridComponent,
}

 viewContainerRef: any;
  
loadComponent(name: string) {
  let componentFactory = this.componentFactoryResolver
                              .resolveComponentFactory(this.componentMap[name]);

  this.viewContainerRef = this.hostDirective.viewContainerRef;
  //viewContainerRef.clear();

  let componentRef = this.viewContainerRef.createComponent(componentFactory);

 
}
 
 clear() {
    this.viewContainerRef.clear();
 }

}
