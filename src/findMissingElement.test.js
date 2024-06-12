import { findMissingElement, checkArrayLengthArrayLength, checkArrayLength } from "./findMissingElement.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect


test("checking that length of both arrays are the same", () => {
  expect(checkArrayLength(["1", "2", "3"],["1", "3"])).toEqual(["2"]);
});











test("find missing element", () => {
  expect(findMissingElement(["1", "2", "3"],["1", "3"])).toEqual(["2"]);
});

test("find missing element", () => {
  expect(findMissingElement(["a", "b", "c"],["a"])).toEqual(["b", "c"]);
});

test("find missing element", () => {
  expect(findMissingElement([],["a", "b", "c"])).toEqual([]);
});

test("find missing element", () => {
  expect(findMissingElement(["a", "b", "c"], [])).toEqual(["a", "b", "c"]);
});

test("find missing element", () => {
  expect(findMissingElement([], [])).toEqual([]);
});

test("find missing element", () => {
  expect(findMissingElement(["a", "b", "c"], ["a", "b", "c"])).toEqual([]);
});
test("find missing element", () => {
  expect(findMissingElement(["a"], ["a"])).toEqual([]);
});

test("find missing element", () => {
  expect(findMissingElement(["a"], [])).toEqual(["a"]);
});
test("find missing element", () => {
  expect(findMissingElement(["a"], ["b", "c", "d"])).toEqual(["a"]);
});
test("find missing element", () => {
  expect(findMissingElement(["b", "c", "d"], ["a"],)).toEqual(["b", "c", "d"]);
});

test("find missing element", () => {
  expect(findMissingElement(["d", "e", "f"], ["a", "b", "c"],)).toEqual(["d", "e", "f"]);
});