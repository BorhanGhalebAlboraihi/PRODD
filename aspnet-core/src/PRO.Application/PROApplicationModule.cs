using Abp.AutoMapper;
using Abp.Dependency;
using Abp.Modules;
using Abp.Reflection.Extensions;
using PRO.Authorization;
using PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto;

namespace PRO
{
    [DependsOn(
        typeof(PROCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class PROApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<PROAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(PROApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
