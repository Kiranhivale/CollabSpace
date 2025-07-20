
using AuthApi.Models;
using CSApi.Models;

namespace AuthApi.Services
{
    public interface IAuthService
    {
        Task<string> Register(UserDto request);
        Task<string> Login(CreatorDto request);
    }
}
