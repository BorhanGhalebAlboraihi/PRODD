using Abp.Application.Services;
using Abp.Domain.Repositories;
using PRO.AppServices.AccountingUsherAppS.Dto;
using PRO.SYS_Services.AccountsAdmin.CostCenters.Dto;
using SalesSystem.Models.Accounts.CostCenters;
using Abp.Linq.Extensions;
using Abp.Application.Services.Dto;
using System.Threading.Tasks;
using Abp.Collections.Extensions;
using Abp.Extensions;
using System.Linq;
using System.Collections.Generic;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters
{
   public class CostCentersAppService : AsyncCrudAppService<CostCenter,CostCentersDto, int, PagedCostCentersDtoResultRequestDto, CreateCostCentersDto, CostCentersEditDto>,ICostCentersAppService
    {
        private readonly IRepository<CostCenter> _repository;
        private IRepository<CostCenters_Groupe> _CenterGroupRepository;
        private IRepository<CostCenter_Rank> _CenterRanksrepostory;
        private IRepository<CostCenters_State> _CenterStaterepository;
        private IRepository<Cost_Centers_Type> _CenterTyperepository;

        public CostCentersAppService(IRepository<CostCenter> repository,
        IRepository<CostCenters_Groupe> CenterGroupRepository,
        IRepository<CostCenter_Rank> CenterRanksrepostory,
        IRepository<CostCenters_State> CenterStaterepository,
        IRepository<Cost_Centers_Type> CenterTyperepository)
         : base(repository)
        {
            _repository = repository;

            _CenterGroupRepository = CenterGroupRepository;

            _CenterRanksrepostory = CenterRanksrepostory;
            _CenterStaterepository = CenterStaterepository;
            _CenterTyperepository = CenterTyperepository;
         

        }


        public IEnumerable<object> GetAllCenterGroupes()
        {
            return _CenterGroupRepository.GetAllList().Where(x => x.CenterGroupeName == x.CenterGroupeName)
                .Select(y => new { Name = y.CenterGroupeName });

        }
        public IEnumerable<object> GetAllCenterRanks()
        {
            return _CenterRanksrepostory.GetAllList().Where(x => x.CenterRankRName == x.CenterRankRName)
                .Select(y => new { Name = y.CenterRankRName });

        }

        public IEnumerable<object> GetAllCenterState()
        {
            return _CenterStaterepository.GetAllList().Where(x => x.CenterStateName == x.CenterStateName)
                .Select(y => new { Name = y.CenterStateName });

        }
        public IEnumerable<object> GetAllACenterType()
        {
            return _CenterTyperepository.GetAllList().Where(x => x.CenterTypeName == x.CenterTypeName)
                .Select(y => new { Name = y.CenterTypeName });

        }
        //public IEnumerable<object> GetAllOper()
        //{

        //    List<object> Alloper = new List<object>()
        //    {
        //      _CenterGroupRepository.GetAllList().Where(x => x.Id == x.Id)
        //       .Select(y => new { Name = y.CenterGroupeName }),

        //    _CenterTyperepository.GetAllList().Where(x => x.Id == x.Id)
        //      .Select(y => new { centerTypeName = y.CenterTypeName }),

        //  _CenterRanksrepostory.GetAllList().Where(x => x.Id == x.Id)
        //      .Select(y => new { Name = y.CenterRankRName }),

        //         _CenterStaterepository.GetAllList().Where(x => x.Id == x.Id)
        //      .Select(y => new { Name = y.CenterStateName })


        //    };

        //    return Alloper;
        //}






        protected override IQueryable<CostCenter> CreateFilteredQuery(PagedCostCentersDtoResultRequestDto input)
        {
            return _repository.GetAll()
          .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.CostCentersName.Contains(input.Keyword) || x.Id.ToString().Contains(input.Keyword) || x.Id.ToString().Contains(input.Keyword));
        }

        public async Task<CostCentersDto> GetCostCenterForEdit(EntityDto input)
        {

            var costCenter = await _repository.GetAsync(input.Id);
            return MapToEntityDto(costCenter);
        }
    }
}
