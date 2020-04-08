using Abp.Domain.Entities;
using SalesSystem.Models.Accounts.AccountsVariarble;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Accounts
{
    
    public class ChartOfAccounts : Entity<int>
    {
        //الدليل المحاسبي العام
      
        
        public string AccountName { get; set; }
        public double MainAccountId { get; set; }
        public string AccountNetural { get; set; }
        public string AccountMain { get; set; }
       
        public string AccountConfidentility { get; set; }//السرية

         public int? AccountRanKId { get; set; }
        [ForeignKey("AccountRanKId")]
        public virtual AccountsRanks AccountsRankName { get; set; }
        public string AccountRankName { get; set; }
        public int? AccountGroupeId { get; set; }
        [ForeignKey("AccountGroupeId")]
        public virtual AccountsGroupe AccountsGroupeName { get; set; }
        public string AccountGroupeName { get; set; }
       
        public int? CenterId { get; set; }
        [ForeignKey("CenterId")]
        public virtual CostCenters.CostCenter CentersId  { get; set; }
        public string CenterName { get; set; }
        public int? AccountTypeId{ get; set; }
        [ForeignKey("AccountTypeId")]
        public virtual AccountsTypes AccountsType { get; set; }
        public string AccountType { get; set; }
        public int? CurrencyId{ get; set; }
        [ForeignKey("CurrencyId")]
        public virtual Currency MonyesName { get; set; }
        public string CurrencyName { get; set; }
        public int? AccountStateId { get; set; }
        [ForeignKey("AccountStateId")]
        public virtual Accounts_state AccountsState { get; set; }
        public string AccountState { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public virtual Banks Banks { get; set; }
       public virtual Boxs Boxs { get; set; }
        //public virtual Customers Customers { get; set; }
        //public virtual Suppliers Suppliers { get; set; }
        //public virtual Employees Employees { get; set; }
        //public virtual BillsSetting.Summation Summations { get; set; }
        //public virtual ICollection<Categores_and_Stores.Stores.Stores_Groupe> Stores_Groupes { get; set; }
        //public virtual Categores_and_Stores.Stores.Stores Stores { get; set; }
        //public virtual ICollection<Editorial_Accounts.Editorial_Accounts> Editorial_Accounts { get; set; }
        //public virtual ICollection<Primary_Accounts> Primary_Accounts { get; set; }
        //public virtual ICollection<LocalAccounts.Bank_Deposited> Bank_Depositeds { get; set; }
        //public virtual ICollection<LocalAccounts.Bank_Drafting> Bank_Draftings { get; set; }
        //public virtual ICollection<LocalAccounts.CheqesWorks> CheqesWorks { get; set; }
        //public virtual ICollection<LocalAccounts.Conciliator_Accounts> Conciliator_Accounts { get; set; }
        //public virtual ICollection<LocalAccounts.Exchange__Voucher> Exchange__Vouchers { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases__Invoice> Purchases__Invoices { get; set; }
        //// public virtual ICollection<Al_Purchases.Purchases_Returns> Purchases_Returns { get; set; }
        //public virtual ICollection<Al_Sales.Sales_Invoice> Sales_Invoices { get; set; }
        //// public virtual ICollection<Al_Sales.Sales_Returns> Sales_Returns { get; set; }
        //public virtual ICollection<Al_Sales.ServiceSales_Invoice> ServiceSales_Invoices { get; set; }
        //public virtual ICollection<Al_Sales.Prices_Displaies> Prices_Displaies { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Resource> Store_Resources { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Outgoings> Store_Outgoings { get; set; }
        //public virtual ICollection<Categores_and_Stores.Stores.Groupes_ConciliatorAccounts> Groupes_ConciliatorAccounts { get; set; }
        //// public virtual ICollection<Categores_and_Stores.Stores.StoreOutgoings_Returns> StoreOutgoings_Returns { get; set; }
        //// public virtual ICollection<Categores_and_Stores.Stores.StoreResource_Returns> StoreResource_Returns { get; set; }
        //public virtual Junctures_Sales_System.Junctures_Add Junctures_Adds { get; set; }



    }
}
