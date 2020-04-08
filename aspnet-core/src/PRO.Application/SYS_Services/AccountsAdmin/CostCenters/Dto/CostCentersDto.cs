using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SalesSystem.Models.Accounts.CostCenters;
using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters.Dto
{
    [AutoMapFrom(typeof(CostCenter))]
  [AutoMapTo(typeof(CostCentersDto))]
   public class CostCentersDto:EntityDto<int>
    {
        public string CostCentersName { get; set; }
        public int MainCostCentersId { get; set; }
        public string CenterType { get; set; }
        public string CenterRankName { get; set; }
        public string CenterGroupe { get; set; }
        public string CenterState { get; set; }
    }
}
