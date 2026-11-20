import { validateBodyEmpty, validateBodyNotEmpty } from "./request-validations.js";
import { RequestExt } from "./types.js";

describe("request body validation", () => {
  it("treats a non-empty parsed text body as non-empty", () => {
    const request = { body: "payload" } as RequestExt;

    expect(() => validateBodyEmpty(request)).toThrow();
    expect(() => validateBodyNotEmpty(request)).not.toThrow();
  });

  it("treats an empty parsed text body as empty", () => {
    const request = { body: "" } as RequestExt;

    expect(() => validateBodyEmpty(request)).not.toThrow();
    expect(() => validateBodyNotEmpty(request)).toThrow();
  });

  it("does not treat a parsed object as an empty body", () => {
    const request = { body: {} } as RequestExt;

    expect(() => validateBodyEmpty(request)).toThrow();
    expect(() => validateBodyNotEmpty(request)).not.toThrow();
  });
});
