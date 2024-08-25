# Notes

- application:
  - dto: clean types used to play in use cases
  - use cases: business core logic

- domain:
  - entities: database model
  - repositories: database access or ORM

- infrastructure:
  - database: database library and config
  - ...and any other libraries with their own config

- adapters:
  - http: http library to handle request/response
    - controllers: controller functions
    - routes: http route mappings
    - middlewares: pipeline between each http request
  - schemas: form validation schema

- shared:
  - utils: helper functions
  - types: shared common types