export interface IUser {
  db: PouchDB.Database;

  addTask(): void;
  addRandomTask(): void;
  searchByTaskType(value: string): Promise<PouchDB.Core.ExistingDocument<Record<never, never>>[]>;
  searchByTaskLevel(value: string): Promise<PouchDB.Core.ExistingDocument<Record<never, never>>[]>;
  searchByCurrentTask(): void;
  searchAll(): Promise<PouchDB.Core.AllDocsResponse<Record<never, never>>>;
  modifyTask(idNum: string, attr: string, value: string): void;
  searchDetail(
    id: string,
  ): Promise<{
    title: string;
    detail: string;
  }>;
  deleteAllTasks(): void;
}
