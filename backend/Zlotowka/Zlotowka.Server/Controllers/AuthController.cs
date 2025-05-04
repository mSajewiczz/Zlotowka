using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Data;
using Zlotowka.Server.Models;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity.Data;
using RegisterRequest = Zlotowka.Server.Models.RegisterRequest;

namespace Zlotowka.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var exists = await _context.Users.AnyAsync(u => u.UserName == request.UserName);
            if (exists)
            {
                return BadRequest("User with this user name already exists.");
            }
            
            var passwordHash = HashPassword(request.Password);

            var user = new User
            {
                UserName = request.UserName,
                PasswordHash = passwordHash
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("You are successfully registered.");
        }

        private string HashPassword(string password)
        {
            using var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }
}
