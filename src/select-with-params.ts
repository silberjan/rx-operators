import { Observable, map } from 'rxjs'
import { MemoizedProjection, select } from '@ngrx/store'

export function selectWithParams<State, Proj extends (...args: any[]) => any>(
  mapFn: (state: State) => MemoizedProjection,
  ...params: Parameters<Proj>
) {
  return (source$: Observable<State>) =>
    source$.pipe(
      select(mapFn),
      map(({ memoized }) => memoized(...params))
    )
}
