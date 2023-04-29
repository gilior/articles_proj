using AIG.Context;
using Microsoft.EntityFrameworkCore;


namespace AIG.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ArticleContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<ArticleContext>>()))
        {

            //Deletes all data, from all tables, except for __MigrationHistory

           //context.Database.ExecuteSqlRaw("sp_MSForEachTable 'ALTER TABLE ? NOCHECK CONSTRAINT ALL'");
           //context.Database.ExecuteSqlRaw("sp_MSForEachTable 'IF OBJECT_ID(''?'') NOT IN (ISNULL(OBJECT_ID(''[dbo].[__MigrationHistory]''),0)) DELETE FROM ?'");
           // context.Database.ExecuteSqlRaw("EXEC sp_MSForEachTable 'ALTER TABLE ? CHECK CONSTRAINT ALL'");

            // proceed with the seed here
            // Look for any movies.
             if (context.Articles.Any())
            {
                return;   // DB has been seeded
            }
            for (int i = 0; i < 6; i++)
            {
                Category category = new Category
                {
                    name = $"Category_{i + 1}",
                };
                for (int j = 0; j < 10; j++)
                {
                    Article article = new Article
                    {
                        //Category = category,
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        image = "https://images.squarespace-cdn.com/content/v1/5e8c57ae324a1b501315dd54/1624109998495-B0TS963XLOP3KCTPOSET/File+37.jpg",
                        title = $"Title_{i + 1}",
                    };
                    context.Articles.Add(article);
                }
                context.Categories.Add(category);
            }
            context.SaveChanges();
        }
    }
}