import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field and
a "isDone" field. The authorization rule below specifies that any authenticated
user can "create", "read", "update", and "delete" their own "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a.model({
      content: a.string(),
      isDone: a.boolean(),
      owner: a.string(), // Field to store the user's ID
    }).authorization(rules => [
      rules.owner()
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
