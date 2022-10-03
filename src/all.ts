import { Observable, map, distinctUntilChanged } from 'rxjs'

/**
 * Returns a truthy emission if an array of only truth values was emitted
 */
export function all<T>() {
  return (source$: Observable<any[]>): Observable<boolean> =>
    source$.pipe(
      map((values: any[]) => !values.some((v) => !v)),
      distinctUntilChanged()
    )
}
