import { render } from "@testing-library/react";
import MainPage from "./page";
import { redirect } from "next/navigation";

// Mock redirect
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Route normalization", () => {
  it("redirects to /movies", async () => {
    render(<MainPage />);
    expect(redirect).toHaveBeenCalledWith("/movies");
  });
});
