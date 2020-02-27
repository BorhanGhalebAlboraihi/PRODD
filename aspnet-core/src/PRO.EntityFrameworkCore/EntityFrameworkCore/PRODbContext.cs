using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using PRO.Authorization.Roles;
using PRO.Authorization.Users;
using PRO.MultiTenancy;

namespace PRO.EntityFrameworkCore
{
    public class PRODbContext : AbpZeroDbContext<Tenant, Role, User, PRODbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public PRODbContext(DbContextOptions<PRODbContext> options)
            : base(options)
        {
        }
    }
}
