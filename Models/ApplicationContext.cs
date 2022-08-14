using Microsoft.EntityFrameworkCore;

namespace angular_lessons.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        
        public DbSet<Product> Products { get; set; } 
    }
}