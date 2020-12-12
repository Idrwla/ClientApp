/*
public int Id { get; set; }
public int UserId { get; set; }
public string Bin { get; set; }
public string Description { get; set; }
public string Name { get; set; }
public int BankId { get; set; }
 */

export interface Partner{
  id?: number;
  userId: number;
  bin: string;
  description: string;
  name: string;
  bankId?: number;
}
