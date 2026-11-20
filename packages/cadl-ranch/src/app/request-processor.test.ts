import { RequestExt, ValidationError } from "@azure-tools/cadl-ranch-api";
import { Response } from "express";
import { CoverageTracker } from "../coverage/coverage-tracker.js";
import { processRequest } from "./request-processor.js";

jest.mock("../logger.js", () => ({ logger: { warn: jest.fn() } }));

describe("processRequest()", () => {
  it("returns a bad request for an async validation error", async () => {
    const coverageTracker = {
      trackEndpointResponse: jest.fn(),
    } as unknown as CoverageTracker;
    const response = {
      status: jest.fn().mockReturnThis(),
      contentType: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      end: jest.fn(),
    } as unknown as Response;
    const request = {
      protocol: "http",
      get: () => "localhost",
      headers: {},
      query: {},
      params: {},
    } as unknown as RequestExt;

    await processRequest(coverageTracker, "scenario", "/endpoint", request, response, async () => {
      throw new ValidationError("Invalid request", {}, {});
    });

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.send).toHaveBeenCalledWith(
      JSON.stringify({ message: "Invalid request", expected: {}, actual: {} }),
    );
    expect(coverageTracker.trackEndpointResponse).not.toHaveBeenCalled();
  });
});
