using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;
using PRO.Employees;
using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.Employess.Dto
{
    [AutoMapFrom(typeof(Employee))]
    public class EmployeeDto : EntityDto
    {
        public string name { get; set; }

        public string gender { get; set; }
       
    }

}
