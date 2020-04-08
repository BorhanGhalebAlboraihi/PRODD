using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.LocalAccounts
{
    public class Conciliator_Accounts
    {
        //الحسابات الوسيطة
        [Key]
        public int Move_Id { get; set; }
        /// <summary>
        /// //رقم حساب سند القبض
        /// </summary>
       // public int ArrestingAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Arresting { get; set; }
        public string Account_Name { get; set; }
        /// <summary>
        /// //رقم حساب سند لصرف
        /// </summary>
        // public int ExchangeAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Exchange { get; set; }
        public string ExchangeAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب  الضريبة
        /// </summary>
        // public int DustAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Dust { get; set; }
        public string DustAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب  الاصناف المفقودة
        /// </summary>
        // public int BreakingCategoreAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts BreakingCategore  { get; set; }
        public string BreakingCategoreAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب  فروق العملة 
        /// </summary>
        // public int SubstationMoneyAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts SubstationMoney { get; set; }
        public string SubstationMoneyAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب   التسعيرة 
        /// </summary>
        // public int PriceAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Price { get; set; }
        public string PriceAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب   المندوبين 
        /// </summary>
        // public int SummationAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Summation { get; set; }
        public string SummationAccount_Name { get; set; }
        /// <summary>
        /// //رقم حساب   الائتمان 
        /// </summary>
        // public int SecurityAccount_Id { get; set; } 
        public virtual Accounts.ChartOfAccounts Security { get; set; }
        public string SecurityAccount_Name { get; set; }


    }
}
