using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters.Dto
{
    public class PagedCostCentersDtoResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
        
    }


}
