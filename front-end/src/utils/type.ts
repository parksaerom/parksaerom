// 배열의 길이를 반환하는 타입
export type ArrayLength<T extends readonly any[]> = T extends {length: infer L}
  ? L
  : never;

// 0 부터 N-1 까지만 숫자를 제한하는 타입
export type NumberRange<
  N extends number,
  Result extends any[] = [],
> = Result['length'] extends N
  ? Result[number]
  : NumberRange<N, [...Result, Result['length']]>;
