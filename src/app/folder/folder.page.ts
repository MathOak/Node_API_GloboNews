import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  articles: [];

  constructor(private activatedRoute: ActivatedRoute,private apiService: ApiService) { }

  getAPI(){

    this.apiService.getNews().subscribe((res)=>{
      console.log(res);
      this.articles = res['articles'];
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.folder == "Home"){

    }else if (this.folder == "News"){
      this.getAPI();
    }else if (this.folder == "Map"){

    }else{
      //message not fund
    }
  }

}
