import { distinctUntilChanged, Observable } from 'rxjs'

/**
 * Just like `distinctUntilChanged` but also works with arrays. (shallow compare)
 */
export function distinctUntilArrayChanged<T, U extends T[] = T[]>() {
  return (source$: Observable<U>): Observable<U> =>
    source$.pipe(
      distinctUntilChanged((prevArr: U, nextArr: U): boolean => {
        const indexes = prevArr.map((_, i) => i)
        return (
          prevArr.length === nextArr.length &&
          indexes.every((cur) => prevArr[cur] === nextArr[cur])
        )
      })
    )
}
