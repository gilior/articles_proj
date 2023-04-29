import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../const';
import { DataService } from './data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ItemsTableComponent } from './items-table/items-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories: Observable<Category[]> | undefined;
  showCategories: boolean = true;
  showArticles: boolean = false;
  cat_id: number | undefined;
  private path: string = "assets";
  @ViewChild(ItemsTableComponent)
  private itemsTableComponent!: ItemsTableComponent;
  fav_mode: boolean | undefined;
  constructor(private dataService: DataService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {

    this.categories = this.dataService.getCategories();
    this.matIconRegistry
      .addSvgIcon("remove", this.setPath(`${this.path}/remove.svg`))
      .addSvgIcon("add", this.setPath(`${this.path}/add.svg`))
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onCategoryClick(cat_id: number) {
    this.showCategories = false;
    this.showArticles = true;
    this.cat_id = cat_id;
  }

  onBackToCategories() {
    this.showCategories = true;
    this.showArticles = false;
  }

  onSelectedTabChange(matTabChangeEvent: MatTabChangeEvent) {
    this.fav_mode = matTabChangeEvent.index == 1;
    if (matTabChangeEvent.index==0){
      this.onBackToCategories();
    }
  }

}
