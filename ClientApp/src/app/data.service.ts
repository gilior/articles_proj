import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Article, Category } from 'src/const';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  getCategories() {
   console.log('sdfgsdfsdf', this.baseUrl + "api/Categories");
    return this.http.get<Category[]>(this.baseUrl + "api/Categories");
  }

  getArticlesByCatId(cat_id:number){
    return this.http.get<Article[]>(this.baseUrl +`api/Articles/ArticleByCategory/${cat_id}`);
  }

  getFavoritesArticles(){
    return this.http.get<Article[]>(this.baseUrl + `api/Articles/FavoriteArticles`);
  }

  updateArticle(article:Article){
    return this.http.put<Article>(this.baseUrl +`api/Articles/${article.id}`,article);
  }
}
