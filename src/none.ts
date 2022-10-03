import { distinctUntilChanged, map, Observable } from 'rxjs'

/**
 * Returns a truthy emission if an array of only falsy values was emitted
 */
export function none<T>() {
  return (source$: Observable<any[]>): Observable<boolean> =>
    source$.pipe(
      map((values: any[]) => !values.some((v) => !!v)),
      distinctUntilChanged()
    )
}
