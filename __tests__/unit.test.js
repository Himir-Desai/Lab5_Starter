// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

test("True test 1 for phone number", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("True test 2 for phone number", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("False test 1 for phone number", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test("False test 2 for phone number", () => {
  expect(isPhoneNumber("123-45-6789")).toBe(false);
});

test("True test 1 for email", () => {
  expect(isEmail("user@example.com")).toBe(true);
});

test("True test 2 for email", () => {
  expect(isEmail("user123@example.com")).toBe(true);
});

test("False test 1 for email", () => {
  expect(isEmail("userexample.com")).toBe(false);
});

test("False test 2 for email", () => {
  expect(isEmail("user@")).toBe(false);
});

test("True test 1 for strong password", () => {
  expect(isStrongPassword("Abc123")).toBe(true);
});

test("True test 2 for strong password", () => {
  expect(isStrongPassword("A1b2C3d4")).toBe(true);
});

test("False test 1 for strong password", () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test("False test 2 for strong password", () => {
  expect(isStrongPassword("123456")).toBe(false);
});

test("True test 1 for date", () => {
  expect(isDate("12/31/2020")).toBe(true);
});

test("True test 2 for date", () => {
  expect(isDate("01/01/2021")).toBe(true);
});

test("False test 1 for date", () => {
  expect(isDate("12/31")).toBe(false);
});

test("False test 2 for date", () => {
  expect(isDate("31/12-2020")).toBe(false);
});

test("True test 1 for hex color", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("True test 2 for hex color", () => {
  expect(isHexColor("#000000")).toBe(true);
});

test("False test 1 for hex color", () => {
  expect(isHexColor("FFFF")).toBe(false);
});

test("False test 2 for hex color", () => {
  expect(isHexColor("#GGGGGG")).toBe(false);
});
