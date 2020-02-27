using System.Threading.Tasks;
using Abp.Application.Services;
using PRO.Sessions.Dto;

namespace PRO.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
