namespace Zlotowka.Server.Models;

public class SpendRequest
{
    public string SpendTitle { get; set; }
    public int SpendAmount { get; set; }
    public DateTime SpendDate { get; set; }
}