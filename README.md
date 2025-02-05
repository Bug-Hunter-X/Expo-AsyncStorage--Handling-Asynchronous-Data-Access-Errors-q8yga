# Expo AsyncStorage: Handling Asynchronous Data Access Errors

This repository demonstrates a common yet subtle error when using AsyncStorage in Expo applications.  The issue arises from attempting to access data from AsyncStorage before the asynchronous `getItem` operation has completed. This often leads to a `TypeError: Cannot read properties of undefined (reading 'getItem')`.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected implementation.

## Problem

The core issue lies in incorrectly assuming that `AsyncStorage.getItem` returns data immediately.  Because it's asynchronous, you must use a promise or async/await to handle the asynchronous response properly.

## Solution

The solution involves using `async/await` to ensure that the data is retrieved before attempting to use it.  This prevents the error by ensuring the promise resolves before continuing execution.

## How to Run

1.  Clone the repository.
2.  Navigate to the repository directory.
3.  Run `expo start` to start the development server.

This will demonstrate both the incorrect (bug.js) and correct (bugSolution.js) approaches to handling asynchronous data retrieval from AsyncStorage in Expo.