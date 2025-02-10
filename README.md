# React useEffect Cleanup Issue
This example demonstrates a common issue with the `useEffect` hook in React where the cleanup function doesn't correctly handle asynchronous operations, potentially resulting in memory leaks or unexpected side effects.  The bug focuses on the cleanup function failing to fully resolve before component unmounts leading to incomplete cleanup.

## Problem
The provided `MyComponent` uses `useEffect` to log the count and perform cleanup actions.  However, if the component unmounts before the asynchronous operation completes in the cleanup, the cleanup is not fully executed.  This is more apparent with more complex asynchronous operations (not shown here) that have cleanup necessities.

## Solution
The solution focuses on ensuring that all asynchronous operations within the cleanup function are properly handled before the component unmounts using `Promise.resolve()`.  This prevents potential memory leaks or race conditions.