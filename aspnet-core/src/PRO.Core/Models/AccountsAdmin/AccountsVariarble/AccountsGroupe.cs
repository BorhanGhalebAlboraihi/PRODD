using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts
{
    [Table("AccountGroupes")]
    public class AccountsGroupe:Entity<int>
    {
        
        public string GroupeName { get; set; }
        public string EngName { get; set; }
        public string State { get; set; }

        public virtual ICollection<ChartOfAccounts> ChartOfAccounts { get; set; }
        /// <summary>
    }
}

