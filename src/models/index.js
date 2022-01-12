// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Name } = initSchema(schema);

export {
  Name
};