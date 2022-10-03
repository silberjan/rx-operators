import { Observable, distinctUntilChanged, map } from 'rxjs'

/**
 * Uses a primitive value (string, number) to construct a one-key object.
 *
 * Example:
 * `'banana' -> unPluck('fruit') -> { fruit: 'banana' }`
 *
 * @param key key of the newly constructed object
 */
export function unPluck<T, K extends string | number = string>(key: K) {
  return (source$: Observable<T>) =>
    source$.pipe(
      distinctUntilChanged(),
      map((value: T) => ({ [key]: value } as { [key in K]: T }))
    )
}
