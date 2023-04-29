using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using AIG.Context;

public class ApplicationDbContextFactory : IDesignTimeDbContextFactory<ArticleContext>
{
    public ArticleContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<ArticleContext>();
        optionsBuilder.UseSqlServer("Data Source=(localdb)\\mssqllocaldb;Initial Catalog=tempdb;Integrated Security=True;Multiple Active Result Sets=True");

        return new ArticleContext(optionsBuilder.Options);
    }
}
