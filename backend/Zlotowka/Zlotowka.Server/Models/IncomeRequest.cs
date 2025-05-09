namespace Zlotowka.Server.Models;

public class IncomeRequest
{
    public string IncomeTitle { get; set; }
    public decimal IncomeAmount { get; set; }
    public DateTime IncomeDate { get; set; }
}