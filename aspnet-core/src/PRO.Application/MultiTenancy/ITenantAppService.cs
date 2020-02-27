using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PRO.MultiTenancy.Dto;

namespace PRO.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

