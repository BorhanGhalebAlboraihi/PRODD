using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts.CostCenters
{
    [Table("CenterGroupes")]
    public class CostCenters_Groupe: Entity<int>
    {

        public string CenterGroupeName { get; set; }
        public string EnName { get; set; }
        public string State { get; set; }
        public virtual ICollection<CostCenter> CostCenters { get; set; }
  

    }
}
