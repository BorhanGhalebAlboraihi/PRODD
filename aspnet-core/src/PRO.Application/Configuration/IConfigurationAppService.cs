using System.Threading.Tasks;
using PRO.Configuration.Dto;

namespace PRO.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
