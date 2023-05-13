import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private host: string = (Math.random()>0.9)?environment.unreachableHost:environment.apiUrl;

  constructor(private http: HttpClient) {  };

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products`);
  }

  public getSelectedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products?selected=true`);
  }

  public getAvailableProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products?available=true`);
  }

  public getProductByKeyword(keyword: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.host}/products?name_like=${keyword}`);
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    product.selected=!product.selected;
    return this.http.put<IProduct>(`${this.host}/products/${product.id}`, product);
  }

  public deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.host}/products/${id}`);
  }

  public saveProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.host}/products`, product);
  }

  public getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.host}/products?id=${id}`);
  }
}
