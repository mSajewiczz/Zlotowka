﻿namespace Zlotowka.Server.Models;

public class Income
{
    public int Id { get; set; }
    public string Title { get; set; }
    public decimal Amount { get; set; }
    public DateTime Date { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
}