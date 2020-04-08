
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SalesSystem.Models.Accounts.CostCenters;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters.Dto
{
  
    [AutoMapTo(typeof(SalesSystem.Models.Accounts.CostCenters.CostCenter))]

    public class CreateCostCentersDto 
    {
        public string CostCentersName { get; set; }
        public int MainCostCentersId { get; set; }
        public string CenterType { get; set; }
        public string CenterRankName { get; set; }
        public string CenterGroupe { get; set; }
        public string CenterState { get; set; }
    }
}
