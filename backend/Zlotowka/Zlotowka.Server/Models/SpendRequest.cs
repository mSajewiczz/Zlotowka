namespace Zlotowka.Server.Models;

public class SpendRequest
{
    public string Title { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }
}