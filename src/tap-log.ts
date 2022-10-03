import { Observable, tap } from 'rxjs'

/**
 * Log all emissions of an observable to the console.
 * @param prefix Optional prefix, Defatults to `'Tap Log: '`
 */
export function tapLog<T>(prefix = 'Tap Log: ') {
  return (source$: Observable<T>): Observable<T> =>
    source$.pipe(tap((value) => console.log(prefix, value)))
}
