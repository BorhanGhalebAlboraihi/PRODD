using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts
{
    [Table("AccountTypes")]
    public class AccountsTypes: Entity<int>
    {
        public string AccountTypeName { get; set; }
        public string EngName { get; set; }
        public virtual ICollection<ChartOfAccounts> ChartOfAccounts { get; set; }
        // public virtual ICollection<Primary_Accounts> Primary_Accounts { get; set; }
    }
}

