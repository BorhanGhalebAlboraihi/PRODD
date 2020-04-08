using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters.Dto
{
   [AutoMapTo(typeof(SalesSystem.Models.Accounts.CostCenters.CostCenter))]
   public class CostCentersEditDto: CreateCostCentersDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
