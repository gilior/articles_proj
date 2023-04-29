namespace AIG.Context
{
    using AIG.Models;
    using Microsoft.EntityFrameworkCore;

    public class ArticleContext
        : DbContext
    {
        public ArticleContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}