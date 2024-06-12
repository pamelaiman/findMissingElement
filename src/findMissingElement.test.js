import { findMissingElement, checkIfExists } from "./findMissingElement.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("find missing element", () => {
  expect(findMissingElement(["1", "2", "3"], ["1", "3"])).toEqual(["2"]);
});

test("find missing element", () => {
  expect(findMissingElement(["a", "b", "c"], ["a"])).toEqual(["b", "c"]);
});

test("find missing element", () => {
  expect(findMissingElement([], ["a", "b", "c"])).toEqual([]);
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
  expect(findMissingElement(["b", "c", "d"], ["a"])).toEqual(["b", "c", "d"]);
});

test("find missing element", () => {
  expect(findMissingElement(["d", "e", "f"], ["a", "b", "c"])).toEqual([
    "d",
    "e",
    "f",
  ]);
});

//for checkIfExists

test("checkIfExists", () => {
  expect(checkIfExists(2, [1, 2, 3])).toEqual(true);
});

test("checkIfExists", () => {
  expect(checkIfExists("a", ["a", "b", "c"])).toEqual(true);
});

test("checkIfExists", () => {
  expect(checkIfExists(4, [1, 2, 3])).toEqual(false);
});

test("checkIfExists", () => {
  expect(checkIfExists("e", ["a", "b", "c"])).toEqual(false);
});
