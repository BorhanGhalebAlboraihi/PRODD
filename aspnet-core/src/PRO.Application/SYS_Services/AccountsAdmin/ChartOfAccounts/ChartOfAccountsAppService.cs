using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;
using SalesSystem.Models.Accounts;
using PRO.AppServices.AccountingUsherAppS.Dto;
using Abp.Domain.Repositories;
using Abp.Application.Services.Dto;
using System.Globalization;
using System.Linq;
using Abp.Linq.Extensions;
using System.Threading.Tasks;
using Abp.Collections.Extensions;
using PRO.SYS_Services.AccountsAdmin.AccountingUsherAppS;
using PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto;
using PRO.Roles.Dto;
using Abp.Extensions;
using Abp.Net.Mail;
using Microsoft.EntityFrameworkCore;
using SalesSystem.Models.Accounts.AccountsVariarble;
using SalesSystem.Models.Accounts.CostCenters;
using Microsoft.EntityFrameworkCore.Internal;

namespace PRO.AppServices.AccountingUsherAppS
{
    public class ChartOfAccountsAppService :AsyncCrudAppService<ChartOfAccounts,ChartOfAccountsDto,int, PagedChartOfAccountsDtoResultRequestDto, CreateChartOfAccountsDto , ChartOfAccountsEditDto>,IChartOfAccountsAppService    {
       
        private IRepository<ChartOfAccounts> _mainRepository;
        private IRepository<AccountsGroupe> _accoutnGroupRepository;
        private IRepository<AccountsRanks> _accountsRanksrepository;
        private IRepository<AccountsTypes> _accountsTypesrepository;
        private IRepository<Accounts_state> _accountsStaterepository;
        private IRepository<Currency> _currencyrepostory;
        private IRepository<CostCenter> _Centerrepostory;

        //private IAccountGroupeDto _accountGroupe ;



        public ChartOfAccountsAppService(IRepository<ChartOfAccounts> repository ,
            IRepository<AccountsGroupe> accoutnGroupRepository,
            IRepository<AccountsRanks> accountRanksrepostory,
            IRepository<AccountsTypes> accountsTypesrepository,
            IRepository<Currency> currencyrepository,
            IRepository<Accounts_state> accountsStaterepository,IRepository<CostCenter> Centerrepostory) :base(repository)
        {
            _mainRepository  = repository;

            _accoutnGroupRepository = accoutnGroupRepository;

            _accountsRanksrepository = accountRanksrepostory;
            _accountsTypesrepository = accountsTypesrepository;
           _accountsStaterepository  = accountsStaterepository;
            _currencyrepostory = currencyrepository;
            _Centerrepostory = Centerrepostory;

        }
     



        protected override IQueryable<ChartOfAccounts> CreateFilteredQuery(PagedChartOfAccountsDtoResultRequestDto input)
        {
            
            return Repository.GetAll()
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.AccountName.Contains (input.Keyword) || x.CenterId.ToString().Contains(input.Keyword) || x.Id.ToString().Contains(input.Keyword));

            //return Repository.GetAllIncluding(x => x.Account_Name)
            //    .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.Account_Name.Contains(input.Keyword));
        }


        public IEnumerable<object> GetAllGroupes()
        {
            return _accoutnGroupRepository.GetAllList().Where(x => x.GroupeName == x.GroupeName)
                .Select(y => new { Name = y.GroupeName });

        }
        public IEnumerable<object> GetAllRanks()
        {
            return _accountsRanksrepository.GetAllList().Where(x => x.RankName == x.RankName)
                .Select(y => new { Name = y.RankName });

        }

        public IEnumerable<object> GetAllAccountType()
        {
            return _accountsTypesrepository.GetAllList().Where(x => x.AccountTypeName == x.AccountTypeName)
                .Select(y => new { Name = y.AccountTypeName });

        }
        public IEnumerable<object> GetAllAccountState()
        {
            return _accountsStaterepository.GetAllList().Where(x => x.StateName == x.StateName)
                .Select(y => new { Name = y.StateName });

        }
        public IEnumerable<object> GetAllcurrency()
        {
            return _currencyrepostory.GetAllList().Where(x => x.CurrencyName == x.CurrencyName)
                .Select(y => new { Name = y.CurrencyName });

        }
        public object GetCenter(int id)
        {
            return _Centerrepostory.GetAllList().Where(x => x.Id == id)
              .Select(y => new { Name = y.CostCentersName });
        }

        public async Task<ChartOfAccountsDto> GetChartOfAccountsForEdit(EntityDto input)
        {
           
                var ChartOfAccounts = await _mainRepository.GetAsync(input.Id);
                return MapToEntityDto(ChartOfAccounts);
          
        }



        //protected void  MapToEntity(ChartOfAccountsDto updateInput, ChartOfAccounts entity)
        //{


        //   // Manually mapped since ChartOfAccountsDto contains non-editable properties too.
        //    entity.AccountName = updateInput.AccountName;
        //    entity.CenterName = updateInput.CenterName;
        //    entity.Id = updateInput.Id;
        //    entity.AccountState = updateInput.AccountState;
        //    entity.AccountType = updateInput.AccountType;
        //    entity.CurrencyName = updateInput.CurrencyName;
        //    entity.AccountGroupeName = updateInput.AccountGroupeName;
        //    entity.AccountRankName = updateInput.AccountRankName;
        //    entity.AccountMain = updateInput.AccountMain;


        //}

        //public async Task<GetChartOfAccountsForEditOutput> GetChartOfAccountsForEdit(EntityDto input)
        //{
        //    var chartOfAccounts = await _mainRepository.GetAsync(input.Id);

        //    var chartOfAccountsEditDto = ObjectMapper.Map<ChartOfAccountsForEditDto>(chartOfAccounts);

        //    return new GetChartOfAccountsForEditOutput
        //    {
        //        ChartOfAccount = chartOfAccountsEditDto

        //    };
        //}








    }
}
