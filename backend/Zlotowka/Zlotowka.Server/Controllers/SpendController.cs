using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Data;
using Zlotowka.Server.Models;

namespace Zlotowka.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class SpendController : ControllerBase
    {
        private IConfiguration _config;
        private readonly AppDbContext _context;

        public SpendController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [Authorize]
        [HttpPost("spends")]
        public async Task<IActionResult> AddSpend([FromBody] SpendRequest request)
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
                return Unauthorized("Missing user ID in token.");
            var userId = int.Parse(userIdClaim.Value);
            
            var titleExists = await _context.Spends.AnyAsync(spend => spend.Title == request.Title && spend.UserId == userId);
            var dateExists = await _context.Spends.AnyAsync(spend => spend.Date == request.Date);

            
            if (titleExists && dateExists)
            {
                return BadRequest("Spend with this title already exists.");
            }

            var spend = new Spend
            {
                Title = request.Title,
                Amount = request.Amount,
                Date = request.Date,
                UserId = userId
            };
            
            _context.Spends.Add(spend);
            await _context.SaveChangesAsync();

            return Ok("Your spend has been added.");
        }

        [Authorize]
        [HttpGet("spends")]
        public async Task<IActionResult> GetSpend()
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
                return Unauthorized("Missing user ID in token.");
            var userId = int.Parse(userIdClaim.Value);
            var spends = await _context.Spends.Where(spend => spend.UserId == userId).ToListAsync();
            
            
            return Ok(spends);
        }

        [Authorize]
        [HttpGet("spends/{spendId}")]
        public async Task<IActionResult> GetSpend(int spendId)
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
                return Unauthorized("Missing user ID in token.");
            var userId = int.Parse(userIdClaim.Value);
            
            var spend = await _context.Spends.Where(spend => spend.Id == spendId && spend.UserId == userId).ToListAsync();
            return Ok(spend);
        }
        
        [Authorize]
        [HttpDelete("spends/{spendId}")]
        public async Task<IActionResult> DeleteSpend(int spendId)
        {
            var userIdClaim = User.FindFirst("id");
            if (userIdClaim == null)
                return Unauthorized("Missing user ID in token.");
            var userId = int.Parse(userIdClaim.Value);
            
            var spendRemove = _context.Spends.SingleOrDefault(spend => spend.Id == spendId && spend.UserId == userId);

            if (spendRemove != null)
            {
                _context.Spends.Remove(spendRemove);
                await _context.SaveChangesAsync();
            }
                
            return Ok($"Spend {spendId} has been deleted.");
        }
        
    }
}