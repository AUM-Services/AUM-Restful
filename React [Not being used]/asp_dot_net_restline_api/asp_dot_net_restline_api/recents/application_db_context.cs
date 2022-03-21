using Microsoft.EntityFrameworkCore;

namespace asp_dot_net_restline_api.recents
{
    internal sealed class ApplicationDBContext : DbContext
    {
        public DbSet<Lookup>? Lookups { get; set; }

        /// <summary>
        /// Adds a database to the folder containing the database models
        /// </summary>
        /// <param name="dbContextOptionsBuilder"></param>
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./recents/databases/lookups.db");

        /// <summary>
        /// Generates placeholder data until the application is fledged out
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            List<Lookup> defaultLookupVisibility = new List<Lookup>();

            for (int i = 1; i <= 16; i++)
            {
                defaultLookupVisibility.Add(new Lookup(
                    i,
                    "startup",
                    "255.255.255.255"
                    ));;
            }

            modelBuilder.Entity<Lookup>().HasData(defaultLookupVisibility);
        }
    }
}
