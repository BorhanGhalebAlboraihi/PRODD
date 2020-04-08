using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Accounts
{
    [Table("Banks")]
    public class Banks:Entity<int>
    {
        //[Key]
        //public int Bnk_Id { get; set; }
        public string BakArabicName { get; set; }
        public string BakEnglishName { get; set; }
        public string BakType { get; set; }
        public string BakState { get; set; }
        public string BakNetuarl { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int CurrencyId { get; set; }
        [ForeignKey("MoneyName")]
        public virtual Currency Moneyname { get; set; }
        public string CurrencyName { get; set; }
        public int AccountId { get; set; }
        [ForeignKey("AccountId")]
        public virtual ChartOfAccounts AccountsId { get; set; }
        public int BakMainAccountNB { get; set; }
        /// <summary>
        /// Relationships
        /// </summary>
        //public virtual ICollection<LocalAccounts.Arresting_Voucher> Arresting_Vouchers { get; set; }
        //public virtual ICollection<LocalAccounts.Bank_Deposited> Bank_Depositeds { get; set; }
        //public virtual ICollection<LocalAccounts.CheqesWorks> CheqesWorks { get; set; }
        //public virtual ICollection<LocalAccounts.Exchange__Voucher> Exchange__Vouchers { get; set; }
        //public virtual ICollection<LocalAccounts.Employees_Activity> Employees_Activities { get; set; }
        //public virtual ICollection<LocalAccounts.Salerys_Execution> Salerys_Executions { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases__Invoice> Purchases__Invoices { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases_Commands> Purchases_Commands { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases_Requerts> Purchases_Requerts { get; set; }
        //// public virtual ICollection<Al_Purchases.Purchases_Returns> Purchases_Returns { get; set; }
        //public virtual ICollection<Al_Sales.Sales_Invoice> Sales_Invoices { get; set; }
        ////  public virtual ICollection<Al_Sales.Sales_Returns> Sales_Returns { get; set; }
        //public virtual ICollection<Al_Sales.ServiceSales_Invoice> ServiceSales_Invoices { get; set; }
        //public virtual ICollection<Al_Sales.Prices_Displaies> Prices_Displaies { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Resource> Store_Resources { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Outgoings> Store_Outgoings { get; set; }
        //// public virtual ICollection<Categores_and_Stores.Stores.StoreResource_Returns> StoreResource_Returns { get; set; }
        //// public virtual ICollection<Categores_and_Stores.Stores.StoreOutgoings_Returns> StoreOutgoings_Returns { get; set; }

    }
}
