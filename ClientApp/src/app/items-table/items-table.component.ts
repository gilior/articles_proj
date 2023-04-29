import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/const';
import { DataService } from '../data.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})




export class ItemsTableComponent {
  displayedColumns: string[] = ['title', 'description', 'image', 'category', 'favorite'];
  dataSource: MatTableDataSource<Article>;
  @Output() onBackToCategories = new EventEmitter();

  @Input() cat_id: number | undefined;
  @Input() favorites: boolean = false;

  constructor(private dataService: DataService) {

    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {

  }
  ngOnInit() {
    this.updateTableSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateTableSource();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateFavorite(row: Article) {
    const article = { ...row, isFavorite: !row.isFavorite }
    this.dataService.updateArticle(article)
      .subscribe(i => {
        this.updateTableSource();
      })
  }

  public updateTableSource() {
    if (!this.favorites) {
      this.dataService.getArticlesByCatId(this.cat_id ?? 0)
        .subscribe(articles => {
          this.dataSource.data = articles;
        });
    }
    else {
      this.dataService.getFavoritesArticles()
        .subscribe(articles => {
          this.dataSource.data = articles;
        });
    }
  }
}
