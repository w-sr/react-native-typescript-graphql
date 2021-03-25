import { Null, Number, Record, Static, String, Undefined } from 'runtypes';

export const ToDoListItemSchema = Record({
  id: Number,
  task: String.Or(Null).Or(Undefined),
  description: String.Or(Null).Or(Undefined),
});
export type ToDoListItemType = Static<typeof ToDoListItemSchema>;

export interface Params {
  id: number;
}
