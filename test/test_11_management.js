import expect from "expect.js";
import * as voucherifyClient from "../src/index.js"
import specUtils from "./spec_utils.js";


describe("ManagementAPI", function () {
  const DELAY_TIME = 2000;
  let createdSchemas = [];

  afterEach(async function () {
    if (specUtils.HAS_MANAGEMENT_CREDENTIALS && specUtils.TEST_PROJECT_ID) {
      const managementApi = new voucherifyClient.ManagementApi(
        specUtils.managementApiClient,
      );
      for (const schemaId of createdSchemas) {
        try {
          await managementApi.deleteMetadataSchema(
            specUtils.TEST_PROJECT_ID,
            schemaId,
          );
        } catch (e) {
          console.log(`Failed to delete metadata schema ${schemaId}: ${e}`);
        }
      }
      createdSchemas = [];
    }
  });

  it("test_01_management_configuration", function () {
    if (!specUtils.HAS_MANAGEMENT_CREDENTIALS) {
      throw new Error("Management credentials not provided");
    }

    const config = specUtils.managementApiClient;
    if (!config || !config.basePath) {
      throw new Error("Invalid management configuration");
    }

    console.log(`Management API host: ${config.basePath}`);
  });

  it("test_02_query_projects", async function () {
    if (!specUtils.HAS_MANAGEMENT_CREDENTIALS) {
      throw new Error("Management credentials not provided");
    }

    const managementApi = new voucherifyClient.ManagementApi(
      specUtils.managementApiClient,
    );
    const projectsResponse = await managementApi.listProjects();

    expect(projectsResponse.data.length).to.be.greaterThan(0);
    const project = projectsResponse.data[0];
    expect(project.id).to.not.be(null);
    expect(project.name).to.not.be(null);
    console.log(`Found ${projectsResponse.data.length} projects`);
  });

  it("test_03_list_metadata_schemas", async function () {
    if (!specUtils.HAS_MANAGEMENT_CREDENTIALS) {
      throw new Error("Management credentials not provided");
    }
    if (!specUtils.TEST_PROJECT_ID) {
      throw new Error("PROJECT_ID not provided");
    }

    const managementApi = new voucherifyClient.ManagementApi(
      specUtils.managementApiClient,
    );
    const schemas = await managementApi.listMetadataSchemas1(
      specUtils.TEST_PROJECT_ID,
    );
    console.log(`Found ${schemas.data.length} metadata schemas`);
  });

  it("test_04_update_metadata_schema", async function () {
    if (!specUtils.HAS_MANAGEMENT_CREDENTIALS) {
      throw new Error("Management credentials not provided");
    }
    if (!specUtils.TEST_PROJECT_ID) {
      throw new Error("PROJECT_ID not provided");
    }

    const managementApi = new voucherifyClient.ManagementApi(
      specUtils.managementApiClient,
    );

    const schemas = await managementApi.listMetadataSchemas1(
      specUtils.TEST_PROJECT_ID,
    );
    expect(schemas).to.not.be(null);
    expect(schemas.data).to.not.be(null);
    expect(schemas.data).to.be.an("array");

    const schemaName = `test-node-sdk-${Math.floor(Math.random() * 1000000)}`;

    const createRequest =
      new voucherifyClient.ManagementProjectsMetadataSchemasCreateRequestBody();
    createRequest.related_object = schemaName;
    createRequest.allow_defined_only = false;
    createRequest.properties = {
      Test: {
        type: "string",
        array: false,
        optional: true,
        eq: ["Test-01", "Test-02", "Test-03", "Test-04"],
      },
    };

    const createdSchema = await managementApi.createMetadataSchema(
      specUtils.TEST_PROJECT_ID,
      createRequest,
    );
    createdSchemas.push(createdSchema.id);

    await specUtils.delay(DELAY_TIME);

    const properties = {
      [`SchemaUpdate_${Math.floor(Math.random() * 1000000)}`]: {
        type: "string",
        array: false,
        optional: true,
        eq: ["Test-01", "Test-02", "Test-03", "Test-04"],
      },
    };

    const updateRequest =
      new voucherifyClient.ManagementProjectsMetadataSchemasUpdateRequestBody();
    updateRequest.allow_defined_only = createdSchema.allow_defined_only;
    updateRequest.properties = properties;

    const updateResult = await managementApi.updateMetadataSchema(
      specUtils.TEST_PROJECT_ID,
      createdSchema.id,
      updateRequest,
    );

    expect(updateResult).to.not.be(null);
    console.log(`Successfully updated schema: ${schemaName}`);
  });
});
