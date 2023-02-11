import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/interface/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  serchResult:undefined|product[];
  constructor(private product:ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.serchResult=result;
    })
  }

}
