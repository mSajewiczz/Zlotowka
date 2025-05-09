using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Data;
using Zlotowka.Server.Models;

namespace Zlotowka.Server.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
        public class IncomeController : ControllerBase
        {
                private IConfiguration _config;
                private readonly AppDbContext _context;
                
                public IncomeController(AppDbContext context, IConfiguration config)
                {
                        _context = context;
                        _config = config;
                }

                [Authorize]
                [HttpPost("incomes")]
                public async Task<IActionResult> AddIncome([FromBody] IncomeRequest request)
                {
                        var userIdClaim = User.FindFirst("id");
                        if (userIdClaim == null)
                                return Unauthorized("Missing user ID in token.");
                        var userId = int.Parse(userIdClaim.Value);
            
                        var titleExists = await _context.Incomes.AnyAsync(income => income.Title == request.Title && income.UserId == userId);
                        var dateExists = await _context.Incomes.AnyAsync(income => income.Date == request.Date);
                        
                        if (titleExists && dateExists)
                        { 
                                return BadRequest("Income with this title already exists.");
                        }

                        var income = new Income
                        {
                                Title = request.Title,
                                Amount = request.Amount,
                                Date = request.Date,
                                UserId = userId
                        };
            
                        _context.Incomes.Add(income);
                        await _context.SaveChangesAsync();

                        return Ok("Your income has been added.");
                }
        }
}