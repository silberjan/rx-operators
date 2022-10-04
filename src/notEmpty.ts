import { Observable, map, distinctUntilChanged, filter } from 'rxjs'

/**
 * Returns a truthy emission if a non-empty array was emitted
 */
export function notEmpty<T>() {
  return (source$: Observable<T[]>): Observable<T[]> =>
    source$.pipe(
      filter((values: T[]) => values.length > 0),
      distinctUntilChanged()
    )
}
