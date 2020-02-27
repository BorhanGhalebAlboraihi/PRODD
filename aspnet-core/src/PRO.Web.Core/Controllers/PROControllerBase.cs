using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace PRO.Controllers
{
    public abstract class PROControllerBase: AbpController
    {
        protected PROControllerBase()
        {
            LocalizationSourceName = PROConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
