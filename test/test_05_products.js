import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";
import fs from "fs";

// Generate unique identifiers for test resources
const randomCode = Math.floor(Math.random() * 10000000);
const PRODUCT_NAME = `test_product_${randomCode}`;
const SKU_NAME = `test_sku_${randomCode}`;


describe("ProductsAPI", function () {
  const DELAY_TIME = 3000;
  let createdProducts = [];

  // Cleanup: delete all created products after each test
  afterEach(async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);
    for (const product of createdProducts) {
      try {
        await productsApi.deleteProduct(product.id);
      } catch (e) {
        if (e.status !== 404) {
          console.log(`Failed to delete product ${product.id}: ${e}`);
        }
      }
    }
    createdProducts = [];
  });

  it("test_01_create_and_get_product", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    createdProducts.push(product);

    expect(product).to.not.be(null);
    expect(product.id).to.not.be(null);

    await specUtils.delay(DELAY_TIME);
    const fetched = await productsApi.getProduct(product.id);
    expect(fetched).to.not.be(null);
    expect(fetched.id).to.be(product.id);
  });

  it("test_02_update_product", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    createdProducts.push(product);
    await specUtils.delay(DELAY_TIME);

    const updateRequestBody = new voucherifyClient.ProductsUpdateRequestBody();
    updateRequestBody.price = 55000;

    const updatedProduct = await productsApi.updateProduct(
      product.id,
      updateRequestBody,
    );
    expect(updatedProduct).to.not.be(null);
    expect(updatedProduct.price).to.be(55000);
  });

  it("test_03_list_products", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody1 =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody1.name = `${PRODUCT_NAME}_1`;
    productsCreateRequestBody1.price = 60000;

    const productsCreateRequestBody2 =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody2.name = `${PRODUCT_NAME}_2`;
    productsCreateRequestBody2.price = 60000;

    const p1 = await productsApi.createProduct(productsCreateRequestBody1);
    const p2 = await productsApi.createProduct(productsCreateRequestBody2);
    createdProducts.push(p1, p2);
    await specUtils.delay(DELAY_TIME);

    const products = await productsApi.listProducts();
    expect(products).to.not.be(null);
    expect(products.products.length).to.be.greaterThan(1);
  });

  it("test_04_update_products_in_bulk", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);
    const asyncAction = await productsApi.updateProductsInBulk();
    expect(asyncAction).to.not.be(null);
  });

  it("test_05_update_metadata_in_bulk", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody1 =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody1.name = `${PRODUCT_NAME}_1`;
    productsCreateRequestBody1.price = 20000;

    const productsCreateRequestBody2 =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody2.name = `${PRODUCT_NAME}_2`;
    productsCreateRequestBody2.price = 20000;

    const p1 = await productsApi.createProduct(productsCreateRequestBody1);
    const p2 = await productsApi.createProduct(productsCreateRequestBody2);
    createdProducts.push(p1, p2);
    await specUtils.delay(DELAY_TIME);

    const bulkRequestBody =
      new voucherifyClient.ProductsMetadataUpdateInBulkRequestBody();
    bulkRequestBody.product_ids = [p1.id, p2.id];

    const asyncAction =
      await productsApi.updateProductsMetadataInBulk(bulkRequestBody);
    expect(asyncAction).to.not.be(null);
  });

  it("test_06_create_and_update_sku", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    createdProducts.push(product);
    await specUtils.delay(DELAY_TIME);

    const skuCreateRequestBody =
      new voucherifyClient.ProductsSkusCreateRequestBody();
    skuCreateRequestBody.name = SKU_NAME;
    skuCreateRequestBody.price = 5000;

    const sku = await productsApi.createSku(product.id, skuCreateRequestBody);
    expect(sku).to.not.be(null);
    expect(sku.id).to.not.be(null);

    await specUtils.delay(DELAY_TIME);

    const skuUpdateRequestBody =
      new voucherifyClient.ProductsSkusUpdateRequestBody();
    skuUpdateRequestBody.price = 2000;

    const updatedSku = await productsApi.updateSku(
      product.id,
      sku.id,
      skuUpdateRequestBody,
    );
    expect(updatedSku).to.not.be(null);
    expect(updatedSku.price).to.be(2000);

    await productsApi.deleteSku(product.id, sku.id);
  });

  it("test_07_get_and_list_skus", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    createdProducts.push(product);

    const skuCreateRequestBody =
      new voucherifyClient.ProductsSkusCreateRequestBody();
    skuCreateRequestBody.name = SKU_NAME;
    skuCreateRequestBody.price = 5000;

    const sku = await productsApi.createSku(product.id, skuCreateRequestBody);
    await specUtils.delay(DELAY_TIME);

    const fetchedSku = await productsApi.getSku(sku.id);
    expect(fetchedSku).to.not.be(null);
    expect(fetchedSku.id).to.be(sku.id);

    const skus = await productsApi.listSKUsInProduct(product.id);
    expect(skus).to.not.be(null);
    expect(skus.skus.length).to.be.greaterThan(0);

    await productsApi.deleteSku(product.id, sku.id);
  });

  it("test_08_delete_product", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    await specUtils.delay(DELAY_TIME);
    await productsApi.deleteProduct(product.id);

    try {
      await productsApi.getProduct(product.id);
      throw new Error("Expected error was not thrown");
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });

  it("test_09_delete_sku", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const productsCreateRequestBody =
      new voucherifyClient.ProductsCreateRequestBody();
    productsCreateRequestBody.name = PRODUCT_NAME;
    productsCreateRequestBody.price = 20000;

    const product = await productsApi.createProduct(productsCreateRequestBody);
    createdProducts.push(product);

    const skuCreateRequestBody =
      new voucherifyClient.ProductsSkusCreateRequestBody();
    skuCreateRequestBody.name = SKU_NAME;
    skuCreateRequestBody.price = 5000;

    const sku = await productsApi.createSku(product.id, skuCreateRequestBody);
    await specUtils.delay(DELAY_TIME);
    await productsApi.deleteSku(product.id, sku.id);

    try {
      await productsApi.getSku(sku.id);
      throw new Error("Expected error was not thrown");
    } catch (e) {
      expect(e).to.be.an(Error);
    }
  });

  it("test_10_import_products", async function () {
    const productsApi = new voucherifyClient.ProductsApi(specUtils.apiClient);

    const filePath = "./test/products_voucherify.csv";
    const file = fs.createReadStream(filePath);

    const result = await productsApi.importProductsUsingCsv({ file });
    expect(result.async_action_id).to.not.be(null);
  });
});
