using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.Employess.Dto
{
   public class PagedEmployeeResultRequestDto : PagedResultRequestDto
    {
        public string EmployeeName { get; set; }


        public string EmployeeGender { get; set; }

    }
}
