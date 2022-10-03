import { Observable, map, distinctUntilChanged } from 'rxjs'

/**
 * Logically inverts the truthyness of emitted values.
 *
 * Examples:
 *
 * - `true` -> `invert()` -> `false`
 * - `'foo'` -> `invert()` -> `false`
 * - `'{foo: 'bar'}'` -> `invert()` -> `false`
 * - `false` -> `invert()` -> `true`
 * - `''` -> `invert()` -> `true`
 * - `null` -> `invert()` -> `true`
 */
export function invert() {
  return (source$: Observable<boolean>): Observable<boolean> =>
    source$.pipe(
      map((v) => !v),
      distinctUntilChanged()
    )
}
