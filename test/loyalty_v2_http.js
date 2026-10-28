import specUtils from "./spec_utils.js";

/**
 * Authenticated HTTP helper for Loyalty v2 paths that are not published in the
 * JS SDK (WIP admin/setup ops). Runtime member flows should use LV2*Api.
 */

const getBaseUrl = () => {
  const fromClient = specUtils.apiClient?.basePath;
  return (fromClient || process.env.VOUCHERIFY_HOST || "https://api.voucherify.io")
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/v1$/i, "");
};

const authHeaders = () => {
  const appId =
    specUtils.apiClient?.authentications?.["X-App-Id"]?.apiKey ||
    process.env.X_APP_ID;
  const appToken =
    specUtils.apiClient?.authentications?.["X-App-Token"]?.apiKey ||
    process.env.X_APP_TOKEN;
  if (!appId || !appToken) {
    throw new Error("X-App-Id and X-App-Token are required for Loyalty v2 HTTP calls.");
  }
  return {
    "X-App-Id": appId,
    "X-App-Token": appToken,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const buildUrl = (path, query) => {
  const url = new URL(
    path.startsWith("http") ? path : `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`,
  );
  if (query && typeof query === "object") {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === null) {
        continue;
      }
      if (Array.isArray(value)) {
        for (const item of value) {
          url.searchParams.append(key, String(item));
        }
      } else {
        url.searchParams.set(key, String(value));
      }
    }
  }
  return url.toString();
};

/**
 * @param {{ method: string, path: string, body?: object, query?: object }} options
 */
export const request = async ({ method, path, body, query }) => {
  const response = await fetch(buildUrl(path, query), {
    method: method.toUpperCase(),
    headers: authHeaders(),
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await response.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    const excerpt =
      typeof data === "string"
        ? data.slice(0, 500)
        : JSON.stringify(data).slice(0, 500);
    const error = new Error(
      `Loyalty v2 HTTP ${method.toUpperCase()} ${path} failed: ${response.status} ${excerpt}`,
    );
    error.status = response.status;
    error.body = data;
    throw error;
  }

  return data;
};

export const createProgram = (body) =>
  request({ method: "POST", path: "/v2/loyalties/programs", body });

export const getProgram = (programId) =>
  request({ method: "GET", path: `/v2/loyalties/programs/${programId}` });

export const updateProgram = (programId, body) =>
  request({
    method: "PUT",
    path: `/v2/loyalties/programs/${programId}`,
    body,
  });

export const activateProgram = (programId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/programs/${programId}/activate`,
  });

export const deactivateProgram = (programId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/programs/${programId}/deactivate`,
  });

export const deleteProgram = (programId) =>
  request({
    method: "DELETE",
    path: `/v2/loyalties/programs/${programId}`,
  });

export const createCardDefinition = (body) =>
  request({ method: "POST", path: "/v2/loyalties/card-definitions", body });

export const activateCardDefinition = (cardDefinitionId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/card-definitions/${cardDefinitionId}/activate`,
  });

export const draftCardDefinition = (cardDefinitionId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/card-definitions/${cardDefinitionId}/draft`,
  });

export const deleteCardDefinition = (cardDefinitionId) =>
  request({
    method: "DELETE",
    path: `/v2/loyalties/card-definitions/${cardDefinitionId}`,
  });

export const createEarningRule = (body) =>
  request({ method: "POST", path: "/v2/loyalties/earning-rules", body });

export const activateEarningRule = (earningRuleId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/earning-rules/${earningRuleId}/activate`,
  });

export const deactivateEarningRule = (earningRuleId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/earning-rules/${earningRuleId}/deactivate`,
  });

export const deleteEarningRule = (earningRuleId) =>
  request({
    method: "DELETE",
    path: `/v2/loyalties/earning-rules/${earningRuleId}`,
  });

export const createReward = (body) =>
  request({ method: "POST", path: "/v2/loyalties/rewards", body });

export const activateReward = (rewardId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/rewards/${rewardId}/activate`,
  });

export const deactivateReward = (rewardId) =>
  request({
    method: "POST",
    path: `/v2/loyalties/rewards/${rewardId}/deactivate`,
  });

export const deleteReward = (rewardId) =>
  request({
    method: "DELETE",
    path: `/v2/loyalties/rewards/${rewardId}`,
  });

export const batchAssignCardDefinitions = (programId, body) =>
  request({
    method: "POST",
    path: `/v2/loyalties/programs/${programId}/card-definitions/batch`,
    body,
  });

export const batchAssignEarningRules = (programId, body) =>
  request({
    method: "POST",
    path: `/v2/loyalties/programs/${programId}/earning-rules/batch`,
    body,
  });

export const batchAssignRewards = (programId, body) =>
  request({
    method: "POST",
    path: `/v2/loyalties/programs/${programId}/rewards/batch`,
    body,
  });

export default {
  request,
  createProgram,
  getProgram,
  updateProgram,
  activateProgram,
  deactivateProgram,
  deleteProgram,
  createCardDefinition,
  activateCardDefinition,
  draftCardDefinition,
  deleteCardDefinition,
  createEarningRule,
  activateEarningRule,
  deactivateEarningRule,
  deleteEarningRule,
  createReward,
  activateReward,
  deactivateReward,
  deleteReward,
  batchAssignCardDefinitions,
  batchAssignEarningRules,
  batchAssignRewards,
};
