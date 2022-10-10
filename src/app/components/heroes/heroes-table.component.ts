import {
  AfterViewInit, Component, Input, ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HeroesDataSource } from './heroes-datasource';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss'],
})
export class HeroesTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) table!: MatTable<Hero>;

  dataSource: HeroesDataSource;

  displayedColumns = ['id', 'name', 'superpower', 'options'];

  @Input() nameSearch: FormControl = new FormControl('');

  constructor(
private heroesService: HeroesService,
    public dialog: MatDialog,
  ) {
    this.dataSource = new HeroesDataSource(heroesService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filter = this.nameSearch;
    this.table.dataSource = this.dataSource;
  }

  onDelete(hero: Hero) {
    this.dialog.open(
      AlertDialogComponent,
      {
        data: {
          title: 'Cancel confirmation',
          text: `Are you sure you want to delete ${hero.name}`,
          onYesClick: () => this.delete(hero.id),
        },
      },
    );
  }

  delete(heroId: number) {
    this.heroesService.deleteHero(heroId);
    this.dataSource.filter.setValue(this.dataSource.filter.value); // For refreshing table
  }
}
