import { Observable, map, distinctUntilChanged } from 'rxjs'

/**
 * Returns a truthy emission if a non-empty array was emitted
 */
export function notEmpty<T>() {
  return (source$: Observable<T[]>): Observable<boolean> =>
    source$.pipe(
      map((values: T[]) => values.length > 0),
      distinctUntilChanged()
    )
}
