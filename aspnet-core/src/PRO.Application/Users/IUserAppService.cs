using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using PRO.Roles.Dto;
using PRO.Users.Dto;

namespace PRO.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
