using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using AutoMapper;
using PRO.Authorization;
using PRO.Employees;
using PRO.Employess.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRO.Employess
{
    [AbpAuthorize(PermissionNames.Pages_Employees)]
    public class EmployeeAppService : AsyncCrudAppService<Employee, EmployeeDto> ,IEmployeeAppService
    {

        private readonly IRepository<Employee> _employeeRepo;
        
        public EmployeeAppService(IRepository<Employee> repository ) : base(repository)
        {
            _employeeRepo = repository;
           
        }

        //public ListResultDto<EmployeeDto> GetByName(string name)
        //{
        // var emp =  _employeeRepo.Single(e => e.Name == name);
        //    return new ListResultDto<EmployeeDto>(ObjectMapper.Map<List<EmployeeDto>>(emp));
        //}

            
        public EmployeeDto GetByName(string name)
        {
            var emp = _employeeRepo.Single(e => e.Name == name);
            return  ObjectMapper.Map<EmployeeDto>(emp);
            
        }

        //public override Task<PagedResultDto<EmployeeDto>> GetAll(PagedAndSortedResultRequestDto input)
        //{
        //    return base.GetAll(input);
        //}

        //protected override IQueryable<Employee> CreateFilteredQuery(GetAllEmployeesInput input)
        //{
        //    return base.CreateFilteredQuery(input)
        //    .WhereIf(input.name.Length > 1, e => e.Name == input.name);

        //}
    }
    

   


}
