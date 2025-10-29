import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

// Generate unique identifiers for test resources
const randomCode = Math.floor(Math.random() * 10000000);
const CUSTOMER_SOURCE_ID = `test_customer_${randomCode}`;


describe("CustomersAPI", function () {
  const DELAY_TIME = 2000;
  let createdCustomers = [];

  afterEach(async function () {
    if (specUtils.HAS_CREDENTIALS) {
      const customersApi = new voucherifyClient.CustomersApi(
        specUtils.apiClient,
      );
      for (const customer of createdCustomers) {
        try {
          await customersApi.deleteCustomer(customer.id);
        } catch (e) {
          if (e.status === 404) {
            // customer already deleted, ignore
            continue;
          }
          console.log(`Failed to delete customer ${customer.id}: ${e}`);
        }
      }
      createdCustomers = [];
    }
  });

  it("test_01_create_customer_basic", async function () {
    const customersApi = new voucherifyClient.CustomersApi(specUtils.apiClient);

    const customerBody = new voucherifyClient.CustomersCreateRequestBody();
    customerBody.source_id = CUSTOMER_SOURCE_ID;

    const result = await customersApi.createCustomer(customerBody);
    createdCustomers.push(result);

    expect(result).to.not.be(null);
  });

  it("test_02_create_and_delete_customer", async function () {
    const customersApi = new voucherifyClient.CustomersApi(specUtils.apiClient);

    const customerBody = new voucherifyClient.CustomersCreateRequestBody();
    customerBody.source_id = `Customer_${Math.floor(Math.random() * 1000000)}`;
    customerBody.name = "Test User";
    customerBody.email = `test_${Math.floor(
      Math.random() * 1000000,
    )}@example.com`;

    const createdCustomer = await customersApi.createCustomer(customerBody);
    createdCustomers.push(createdCustomer);

    expect(createdCustomer).to.not.be(null);
    expect(createdCustomer.id).to.not.be(null);

    await specUtils.delay(DELAY_TIME);

    await customersApi.deleteCustomer(createdCustomer.id);

    try {
      await customersApi.getCustomer(createdCustomer.id);
      throw new Error("Expected error was not thrown");
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });
});
