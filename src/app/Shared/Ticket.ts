export interface Ticket{
  id?: number;
  partnerId: number;
  tittle: string;
  description: string;
  date: Date;
  typeId: number;
  cityFrom: number;
  cityTo: number;
  cost: number;
}
