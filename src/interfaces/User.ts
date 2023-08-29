export interface User {
  id: string;
  history: HistoryItem[];
}
export interface HistoryItem {
  id: string;
  querys: string[];
  userId: string;
}
