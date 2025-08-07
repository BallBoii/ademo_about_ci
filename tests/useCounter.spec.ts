import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter hook', () => {
  it('initializes with count 0 and val 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('increments count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });

    act(() => {
      result.current.increment();
    });
    expect(result.current.val).toBe(5);
    expect(result.current.count).toBe(5);
  });

});