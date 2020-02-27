using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using PRO.Configuration;
using PRO.Web;

namespace PRO.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class PRODbContextFactory : IDesignTimeDbContextFactory<PRODbContext>
    {
        public PRODbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<PRODbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            PRODbContextConfigurer.Configure(builder, configuration.GetConnectionString(PROConsts.ConnectionStringName));

            return new PRODbContext(builder.Options);
        }
    }
}
