import dotenv from "dotenv"
import * as voucherifyClient from "../src/index.js"

// Load environment variables from .env file
dotenv.config();

// API configuration
const HOST = process.env.VOUCHERIFY_HOST || "https://api.voucherify.io";
const X_APP_ID = process.env.X_APP_ID;
const X_APP_TOKEN = process.env.X_APP_TOKEN;

// Management API configuration
const X_MANAGEMENT_ID = process.env.X_MANAGEMENT_ID;
const X_MANAGEMENT_TOKEN = process.env.X_MANAGEMENT_TOKEN;

// Test project ID for management API tests
const TEST_PROJECT_ID = process.env.PROJECT_ID;

// Validate required credentials
if (!X_APP_ID || !X_APP_TOKEN) {
  throw new Error("X_APP_ID and X_APP_TOKEN must be set in the .env file.");
}

// Standard API Client
const apiClient = new voucherifyClient.ApiClient();
apiClient.basePath = HOST;
apiClient.authentications["X-App-Id"].apiKey = X_APP_ID;
apiClient.authentications["X-App-Token"].apiKey = X_APP_TOKEN;

// OAuth API Client
let oAuthClient, oAuthTokenResponse;

const THIRTY_SECONDS = 30;

const generateOAuthClient = async () => {
  if(oAuthClient && oAuthTokenResponse && (oAuthTokenResponse.expires_at-THIRTY_SECONDS) > Math.floor(new Date().getTime() / 1000)){
    return
  }
  const oAuthApi = new voucherifyClient.OAuthApi(
    apiClient
  );
  oAuthTokenResponse = await oAuthApi.generateOauthToken({
    grantType: "client_credentials",
    scope: "api"
  })
  oAuthClient = new voucherifyClient.ApiClient();
  oAuthClient.basePath = HOST;
  oAuthClient.authentications["X-Voucherify-OAuth"].accessToken = oAuthTokenResponse.access_token;
}

// client types
const CLIENT_TYPES = {
  API_KEY: "API_KEY",
  OAUTH_TOKEN: "OAUTH_TOKEN"
}

// Client type to client
const getClientBasedOnType = (type) => {
  if(type === CLIENT_TYPES.API_KEY){
    return apiClient
  }
  return oAuthClient
}

// Management API Client
let managementApiClient = null;
if (X_MANAGEMENT_ID && X_MANAGEMENT_TOKEN) {
  managementApiClient = new voucherifyClient.ApiClient();
  managementApiClient.basePath = HOST;
  managementApiClient.authentications["X-Management-Id"].apiKey =
    X_MANAGEMENT_ID;
  managementApiClient.authentications["X-Management-Token"].apiKey =
    X_MANAGEMENT_TOKEN;
}

// Check if credentials are available
const HAS_CREDENTIALS = !!(X_APP_ID && X_APP_TOKEN);
const HAS_MANAGEMENT_CREDENTIALS = !!(X_MANAGEMENT_ID && X_MANAGEMENT_TOKEN);

console.log(`Configuration loaded: ${HAS_CREDENTIALS}`);

// Helper function: creates a delay for async operations
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Export all configuration and clients
export default {
  CLIENT_TYPES,
  getClientBasedOnType,
  generateOAuthClient,
  delay,
  apiClient,
  managementApiClient,
  TEST_PROJECT_ID,
  HAS_CREDENTIALS,
  HAS_MANAGEMENT_CREDENTIALS,
};
