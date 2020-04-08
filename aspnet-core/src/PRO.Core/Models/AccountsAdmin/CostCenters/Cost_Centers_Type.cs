using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts.CostCenters
{
    [Table("CenterTypes")]
    public class Cost_Centers_Type: Entity<int>
    {
        public string CenterTypeName { get; set; }
        public string EngName { get; set; }
        public virtual ICollection<CostCenter> CostCenters { get; set; }
     
       
    }
}
