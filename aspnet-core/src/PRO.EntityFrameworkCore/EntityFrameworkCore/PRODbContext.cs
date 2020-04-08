using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using PRO.Authorization.Roles;
using PRO.Authorization.Users;
using PRO.MultiTenancy;
using SalesSystem.Models.Accounts;
using SalesSystem.Models.Accounts.CostCenters;
using SalesSystem.Models.Accounts.AccountsVariarble;

namespace PRO.EntityFrameworkCore
{
    public class PRODbContext : AbpZeroDbContext<Tenant, Role, User, PRODbContext>
    {
        /* Define a DbSet for each entity of the application */
        //public DbSet<Customers> Customers { get; set; }
        //  public DbSet<Suppliers> Suppliers { get; set; }
        //  public DbSet<Employees> Employees { get; set; }
        //  public DbSet<Banks> Banks { get; set; }
        //  public DbSet<Boxs> Boxs { get; set; }
        public DbSet<AccountsGroupe> accountsGroupes { get; set; }
        public DbSet<AccountsRanks> AccountsRanks { get; set; }
        public DbSet<AccountsTypes> AccountsTypes { get; set; }
        public DbSet<CostCenter> CostCenter { get; set; }
        public DbSet<ChartOfAccounts> ChartOfAccounts { get; set; }
        public DbSet<Currency> Currency { get; set; }
        public DbSet<Cost_Centers_Type> costCentersTypes { get; set; }
        public DbSet<CostCenter_Rank> costCenterRanks { get; set; }
        public DbSet<CostCenters_State> costCentersStates { get; set; }
        public DbSet<CostCenters_Groupe> costCentersGroupes { get; set; }
        public DbSet<Accounts_state> accountsStates { get; set; }
        //public DbSet<Summation> Summations { get; set; }
        //public DbSet<SalesAreas> SalesAreas { get; set; }
        //public DbSet<CustomersType> customersTypes { get; set; }


        public PRODbContext(DbContextOptions<PRODbContext> options)
            : base(options)
        {
        }
    }
}
