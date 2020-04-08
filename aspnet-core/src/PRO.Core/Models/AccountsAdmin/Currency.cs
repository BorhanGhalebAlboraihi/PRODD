using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Accounts
{
    [Table("Currency")]
    public class Currency:Entity<int>
    {
     
        public string CurrencyName { get; set; }
        public string CurrencySymbole { get; set; }
        public string CurrencyBarket { get; set; }//الفئة
        public double CurrencyPric { get; set; }// سعر تحويل
        public double CurrencyPriceTop { get; set; }//اعلى سعر تحويل
        public double CurrencyPriceLess { get; set; }//اقل سعر تحويل
        public string CurrencyCountry { get; set; }
        public string CurrencyState { get; set; }
        public string CurrencyType { get; set; }
        public DateTime CurrencyHistory { get; set; }
        /// <summary>
        /// ReltionShips
        /// </summary>

        public virtual ICollection<ChartOfAccounts> ChartOfAccounts { get; set; }
        public virtual ICollection<Banks> Banks { get; set; }
        public virtual ICollection<Boxs> Boxs { get; set; }
        //public virtual ICollection<Employees> Employees { get; set; }
        //public virtual ICollection<Customers> Customers { get; set; }
        //public virtual ICollection<Suppliers> Suppliers { get; set; }
        //public virtual ICollection<Editorial_Accounts.Editorial_Accounts> Editorial_Accounts { get; set; }
        //public virtual ICollection<LocalAccounts.Arresting_Voucher> Arresting_Vouchers { get; set; }
        //public virtual ICollection<LocalAccounts.Bank_Deposited> Bank_Depositeds { get; set; }
        //public virtual ICollection<LocalAccounts.CheqesWorks> CheqesWorks { get; set; }
        //public virtual ICollection<LocalAccounts.Exchange__Voucher> Exchange__Vouchers { get; set; }
        //public virtual ICollection<LocalAccounts.EmployeeMove_Type> EmployeeMove_Types { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases__Invoice> Purchases__Invoices { get; set; }
        ////  public virtual ICollection<Al_Purchases.Purchases_Returns> Purchases_Returns { get; set; }
        //public virtual ICollection<Al_Sales.Sales_Invoice> Sales_Invoices { get; set; }
        //// public virtual ICollection<Al_Sales.Sales_Returns> Sales_Returns { get; set; }
        //public virtual ICollection<Al_Sales.ServiceSales_Invoice> ServiceSales_Invoices { get; set; }
        //public virtual ICollection<Al_Sales.Prices_Displaies> Prices_Displaies { get; set; }
        //public virtual ICollection<AccountingMoves_Migration.CeshVouchers_Migration> CeshVouchers_Migrations { get; set; }
    }
}
