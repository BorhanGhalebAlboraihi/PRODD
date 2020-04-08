using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;

namespace PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto
{
    public class PagedChartOfAccountsDtoResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
        
    }
}
