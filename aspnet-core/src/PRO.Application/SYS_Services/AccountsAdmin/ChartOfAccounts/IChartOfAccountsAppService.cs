using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PRO.AppServices.AccountingUsherAppS.Dto;
using PRO.Roles.Dto;
using PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto;
using SalesSystem.Models.Accounts;

namespace PRO.SYS_Services.AccountsAdmin.AccountingUsherAppS
{
    public interface IChartOfAccountsAppService : IAsyncCrudAppService<ChartOfAccountsDto, int, PagedChartOfAccountsDtoResultRequestDto, CreateChartOfAccountsDto, ChartOfAccountsEditDto>
    {


        //Task<ListResultDto<PermissionDto>> GetAllPermissions();
        Task<ChartOfAccountsDto> GetChartOfAccountsForEdit(EntityDto input);

        //Task<GetChartOfAccountsForEditOutput> GetChartOfAccountsForEdit(UpdateChartOfAccountsInput input);

        //Task<ListResultDto<ChartOfAccountsListDto>> GetChartOfAccountsAsync(GetChartOfAccountsInput input);

    } 
}
