using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts.CostCenters
{
    [Table("CenterRanks")]
    public class CostCenter_Rank: Entity<int>
    {
        public string CenterRankRName { get; set; }
        public int? Length { get; set; }
        public virtual ICollection<CostCenter> CostCenter { get; set; }
      
    }
}
