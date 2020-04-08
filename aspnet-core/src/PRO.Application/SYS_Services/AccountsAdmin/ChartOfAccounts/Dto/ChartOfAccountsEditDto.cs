using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto
{
   [AutoMapTo(typeof(SalesSystem.Models.Accounts.ChartOfAccounts))]
   public class ChartOfAccountsEditDto: CreateChartOfAccountsDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
