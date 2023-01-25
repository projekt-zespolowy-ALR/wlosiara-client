import { fireEvent, render, screen } from "@testing-library/svelte";
import MainPage from "../src/routes/+page.svelte";
import { describe, expect, test } from "vitest";

describe("Logging in", () => {
  test("Login button exists", () => {
    render(MainPage);
    expect(() => {
      const button = document.querySelector(".login-sign-in");
      expect(button).not.toBeNull();
    }).not.toThrow();
  });

  test("Login button is clickable", () => {
    render(MainPage);
    expect(() => {
      fireEvent.click(screen.getAllByText("Log In")[0]);
    }).not.toThrow();
  });
});