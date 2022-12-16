using System.Security.Claims;
using App.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor httpContextAccessor;

        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }

        public string GetUsername() 
        {
            return this.httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}