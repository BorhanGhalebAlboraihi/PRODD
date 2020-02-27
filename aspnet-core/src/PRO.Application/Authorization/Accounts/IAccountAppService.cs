using System.Threading.Tasks;
using Abp.Application.Services;
using PRO.Authorization.Accounts.Dto;

namespace PRO.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
