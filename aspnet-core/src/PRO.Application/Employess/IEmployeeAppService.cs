using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PRO.Employees;
using PRO.Employess.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PRO.Employess
{
  public  interface IEmployeeAppService: IAsyncCrudAppService<EmployeeDto>
    {

        EmployeeDto GetByName(string name);
    }
}
