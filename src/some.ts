import { distinctUntilChanged, map, Observable } from 'rxjs'

/**
 * Returns a truthy emission if an array with at least one truthy value was emitted
 */
export function some<T>() {
  return (source$: Observable<any[]>): Observable<boolean> =>
    source$.pipe(
      map((values: any[]) => values.some((v) => !!v)),
      distinctUntilChanged()
    )
}
