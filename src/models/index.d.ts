import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Name {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly subject?: string;
  readonly message_body?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Name, NameMetaData>);
  static copyOf(source: Name, mutator: (draft: MutableModel<Name, NameMetaData>) => MutableModel<Name, NameMetaData> | void): Name;
}