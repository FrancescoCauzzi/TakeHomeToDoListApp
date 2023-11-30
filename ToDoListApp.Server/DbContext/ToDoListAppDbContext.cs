using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using ToDoListApp.Server.Entities.Database;

namespace ToDoListApp.Server.DbContext
{
    public class ToDoListAppDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ToDoListAppDbContext(DbContextOptions options) : base(options)
        {
           
        }

        //TODO ADD DBSETS
        public DbSet<ToDoItem> ToDoItems { get; set; }

        public override int SaveChanges()
        {
            var entries = ChangeTracker
                .Entries()
                .Where(e => e.Entity is ToDoItem && (e.State == EntityState.Added || e.State == EntityState.Modified));

            foreach (var entityEntry in entries)
            {
                if (entityEntry.State == EntityState.Added)
                {
                    ((ToDoItem)entityEntry.Entity).CreatedAt = DateTime.UtcNow;
                }

                ((ToDoItem)entityEntry.Entity).UpdatedAt = DateTime.UtcNow;
            }

            return base.SaveChanges();
        }

    }
}
