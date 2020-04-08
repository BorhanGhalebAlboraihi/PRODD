using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PRO.SYS_Services.AccountsAdmin.CostCenters.Dto;
using SalesSystem.Models.Accounts.CostCenters;
using System.Threading.Tasks;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters
{
    public interface ICostCentersAppService: IAsyncCrudAppService<CostCentersDto,int,PagedCostCentersDtoResultRequestDto,CreateCostCentersDto,CostCentersEditDto>
    {
        Task<CostCentersDto> GetCostCenterForEdit(EntityDto input);

    }
}