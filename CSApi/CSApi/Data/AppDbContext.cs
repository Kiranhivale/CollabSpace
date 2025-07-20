
using Microsoft.EntityFrameworkCore;
using AuthApi.Models;
using CSApi.Models;

namespace AuthApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }

        public DbSet<Creator> Creator  { get;set;}
    }
}
