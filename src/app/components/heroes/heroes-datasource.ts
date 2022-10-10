import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';

function compare(
  a: string | number | undefined,
  b: string | number | undefined,
  isAsc: boolean,
): number {
  let result;
  if (!a) {
    result = (!b) ? 1 : -1;
  } else if (!b) {
    result = 1;
  } else {
    result = (a < b) ? -1 : 1;
  }
  return result * (isAsc ? 1 : -1);
}
export class HeroesDataSource extends DataSource<Hero> {
  rawData: Hero[] = [];

  data: Hero[] = [];

  filter: FormControl = new FormControl();

  paginator: MatPaginator | undefined;

  sort: MatSort | undefined;

  constructor(private heroesService: HeroesService) {
    super();
    this.rawData = heroesService.getHeroes();
  }

  connect(): Observable<Hero[]> {
    if (this.paginator && this.sort) {
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange,
        this.filter.valueChanges,
      ).pipe(map(() => this.getPagedData(
        this.getSortedData(
          [...this.filterData()],
        ),
      )));
    }
    throw Error('Please set the paginator and sort on the data source before connecting.');
  }

  // eslint-disable-next-line class-methods-use-this
  disconnect(): void {}

  private getPagedData(data: Hero[]): Hero[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    }
    return data;
  }

  private getSortedData(data: Hero[]): Hero[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'superpower': return compare(a.superpower, b.superpower, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

  private filterData() {
    this.data = this.rawData.filter((d) => d.name.toLowerCase().includes(this.filter.value?.toLocaleLowerCase() || ''));
    return this.data;
  }
}
