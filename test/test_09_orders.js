import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";

describe("OrdersAPI", function () {
  let createdOrders = [];

  it("test_01_create_order", async function () {
    const ordersApi = new voucherifyClient.OrdersApi(specUtils.apiClient);

    const orderBody = new voucherifyClient.OrdersCreateRequestBody();
    orderBody.amount = 1000;
    orderBody.currency = "USD";

    const customer = new voucherifyClient.Customer();
    customer.name = "Test Customer";
    customer.email = `customer_${Math.floor(
      Math.random() * 100000,
    )}@example.com`;
    orderBody.customer = customer;

    orderBody.source_id = `order_${Math.floor(Math.random() * 100000)}`;

    const createdOrder = await ordersApi.createOrder(orderBody);
    createdOrders.push(createdOrder);

    expect(createdOrder).to.not.be(null);
    expect(createdOrder.id).to.not.be(null);
    expect(createdOrder.status).to.be("CREATED");

    await specUtils.delay(2000);

    const order = await ordersApi.getOrder(createdOrder.id);
    expect(order).to.not.be(null);
    expect(order.id).to.be(createdOrder.id);
    expect(order.status).to.be("CREATED");
  });

  it("test_02_update_order", async function () {
    const ordersApi = new voucherifyClient.OrdersApi(specUtils.apiClient);

    const orderBody = new voucherifyClient.OrdersCreateRequestBody();
    orderBody.amount = 1500;
    orderBody.currency = "USD";

    const customer = new voucherifyClient.Customer();
    customer.name = "Update Customer";
    customer.email = `update_${Math.floor(Math.random() * 100000)}@example.com`;
    orderBody.customer = customer;

    orderBody.source_id = `order_${Math.floor(Math.random() * 100000)}`;

    const createdOrder = await ordersApi.createOrder(orderBody);
    createdOrders.push(createdOrder);
    expect(createdOrder.id).to.not.be(null);

    await specUtils.delay(2000);

    const updateBody = new voucherifyClient.OrdersUpdateRequestBody();
    updateBody.status = "PAID";

    const updatedOrder = await ordersApi.updateOrder(
      createdOrder.id,
      updateBody,
    );

    expect(updatedOrder).to.not.be(null);
    expect(updatedOrder.id).to.be(createdOrder.id);
    expect(updatedOrder.status).to.be("PAID");
  });

  it("test_03_list_orders", async function () {
    const ordersApi = new voucherifyClient.OrdersApi(specUtils.apiClient);

    const orders = await ordersApi.listOrders({ limit: 10 });

    expect(orders).to.not.be(null);
    expect(orders.orders).to.not.be(null);
    expect(orders.orders.length).to.be.greaterThan(0);
    expect(orders.orders.length).to.be.lessThan(11);
  });
});
