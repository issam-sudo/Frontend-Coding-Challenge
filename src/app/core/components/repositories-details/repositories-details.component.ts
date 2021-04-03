import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { observable } from 'rxjs';
import { repo } from "../../models/repo.model";
import { RepoListService } from '../../services/repo-list.service';


@Component({
  selector: 'app-repositories-details',
  templateUrl: './repositories-details.component.html',
  styleUrls: ['./repositories-details.component.scss']
})
export class RepositoriesDetailsComponent implements OnInit {
  page: number = 0;
  repos: Subscription = new Subscription;
  reposList: repo[] = [];

  constructor(private repoListService: RepoListService, private spinnerGetRepos: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.getRepos(this.page)
  }

  getRepos(page: number) {

    this.page = page
    this.spinnerGetRepos.show()
    this.repos = this.repoListService.getRepo(page).subscribe(
      repos => {
        var list: any = repos;
        this.reposList = list.items;
      },
      err => console.error('Observer got an error: ' + err),
      () => {
        console.log('Observer got a complete '); this.spinnerGetRepos.hide()
      }
    )

  }

  ngOnDestroy() {
    this.repos.unsubscribe()

  }


}
