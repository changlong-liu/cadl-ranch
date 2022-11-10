import { passOnSuccess, ScenarioMockApi, mockapi, json } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};

Scenarios.GetRawModel = passOnSuccess(
  mockapi.get("/resiliency/devdriven/customization/model/raw", (req) => {
    return {
      status: 200,
      body: json({ received: "raw" }),
    };
  }),
);

Scenarios.GetHandwrittenModel = passOnSuccess(
  mockapi.get("/resiliency/devdriven/customization/model/model", (req) => {
    return {
      status: 200,
      body: json({ received: "model" }),
    };
  }),
);

Scenarios.PostRawModel = passOnSuccess(
  mockapi.post("/resiliency/devdriven/customization/model/raw", (req) => {
    req.expect.bodyEquals({ hello: `world!` });
    return {
      status: 200,
      body: json({ received: "raw" }),
    };
  }),
);

Scenarios.PostHandwrittenModel = passOnSuccess(
  mockapi.post("/resiliency/devdriven/customization/model/model", (req) => {
    req.expect.bodyEquals({ hello: `world!` });
    return {
      status: 200,
      body: json({ received: "model" }),
    };
  }),
);

Scenarios.GetRawPages = passOnSuccess([
  mockapi.get("/resiliency/devdriven/customization/paging/raw/", (req) => {
    return {
      status: 200,
      body: json({
        values: [{ received: "raw" }],
        nextLink: req.baseUrl + "/resiliency/devdriven/customization/paging/raw/2",
      }),
    };
  }),
  mockapi.get("/resiliency/devdriven/customization/paging/raw/2", (req) => {
    return {
      status: 200,
      body: json({ values: [{ received: "raw" }] }),
    };
  }),
]);

Scenarios.GetHandwrittenModelPages = passOnSuccess([
  mockapi.get("/resiliency/devdriven/customization/paging/model/", (req) => {
    return {
      status: 200,
      body: json({
        values: [{ received: "model" }],
        nextLink: req.baseUrl + "/resiliency/devdriven/customization/paging/model/2",
      }),
    };
  }),
  mockapi.get("/resiliency/devdriven/customization/paging/model/2", (req) => {
    return {
      status: 200,
      body: json({ values: [{ received: "model" }] }),
    };
  }),
]);

Scenarios.RawLRO = passOnSuccess(
  mockapi.put("/resiliency/devdriven/customization/lro/raw", (req) => {
    return {
      status: 200,
      body: json({ provisioningState: "Succeeded", received: "raw" }),
    };
  }),
);

Scenarios.HandwrittenModelLRO = passOnSuccess(
  mockapi.put("/resiliency/devdriven/customization/lro/model", (req) => {
    return {
      status: 200,
      body: json({ provisioningState: "Succeeded", received: "model" }),
    };
  }),
);
