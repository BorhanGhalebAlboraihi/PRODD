using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Categores_and_Stores.Stores
{
    public class Groupes_ConciliatorAccounts
    {
        //الحسابات الوسيطة بالمجموعات
        [Key]
        public int Move_Id { get; set; }
        public int SGId { get; set; }
        [ForeignKey("SGId")]
        public virtual Stores_Groupe GroupId { get; set; }
        public string SG_Name { get; set; }
        public int AccountsId { get; set; }
        [ForeignKey("AccountsId")]
        public virtual Accounts.ChartOfAccounts ConAccountId { get; set; }
        public string Accounts_Name { get; set; }
    }

}
