using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace PRO.EntityFrameworkCore
{
    public static class PRODbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<PRODbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<PRODbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
