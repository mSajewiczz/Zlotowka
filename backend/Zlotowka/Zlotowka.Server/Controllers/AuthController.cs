using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Data;
using Zlotowka.Server.Models;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using RegisterRequest = Zlotowka.Server.Models.RegisterRequest;
using LoginRequest = Zlotowka.Server.Models.LoginRequest;

namespace Zlotowka.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher = new();

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
            

            var user = new User
            {
                UserName = request.UserName,
                PasswordHash = _passwordHasher.HashPassword(null, request.Password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("You are successfully registered.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.UserName == request.UserName);
            if (user == null) return BadRequest("Invalid credentials 1");

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);
            if (result == PasswordVerificationResult.Failed) return BadRequest("Invalid credentials 2"); //<----- here is problem!!!
            
            return Ok("You're successfully logged in.");
        }
    }
}
