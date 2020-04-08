using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Accounts.AccountsVariarble
{
    [Table("AccountStates")]
    public class Accounts_state:Entity<int>
    {

        public string StateName { get; set; }
        public string EngName { get; set; }

        public virtual ICollection<ChartOfAccounts> ChartOfAccounts { get; set; }
    }
}
