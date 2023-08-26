export interface HistoryItem {
  id: string;
  querys: string[];
  userId: string;
}

export interface User {
  id: string;
  history: HistoryItem[];
}
