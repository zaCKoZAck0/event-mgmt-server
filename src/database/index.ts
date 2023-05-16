import { DB_USERNAME, DB_PASSWORD, DB_DATABASE } from '@config';
const { ServerApiVersion } = require('mongodb');

export const dbConnection = {
  url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_DATABASE}/?retryWrites=true&w=majority`,
  options: {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  },
};
