
using Microsoft.AspNetCore.Mvc;
using AuthApi.Models;
using AuthApi.Services;
using CSApi.Models;

namespace AuthApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto request)
        {
            var result = await _authService.Register(request);
            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(CreatorDto request)
        {
            var result = await _authService.Login(request);
            if (string.IsNullOrEmpty(result))
                return Unauthorized("Invalid credentials");
            return Ok(new { token = result });
        }
    }
}
