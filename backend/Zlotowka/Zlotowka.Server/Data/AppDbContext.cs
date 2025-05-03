using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Models;

namespace Zlotowka.Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    public DbSet<User> Users { get; set; }
    public DbSet<Income> Incomes { get; set; }
    public DbSet<Spend> Spends { get; set; }
}