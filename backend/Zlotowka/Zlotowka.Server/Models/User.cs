namespace Zlotowka.Server.Models;

public class User
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string PasswordHash { get; set; }

    public ICollection<Income> Incomes { get; set; }
    public ICollection<Spend> Spends { get; set; }
}