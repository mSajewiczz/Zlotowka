namespace Zlotowka.Server.Models;

public class IncomeRequest
{
    public string Title { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}