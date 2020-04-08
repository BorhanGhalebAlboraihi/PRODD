using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Accounts.CostCenters
{
    [Table("CostCenters")]
    public class CostCenter:Entity<int>
    {
        
        public string CostCentersName { get; set; }
        public int MainCostCentersId { get; set; }
      
        public int? CenterTypeId { get; set; }//رائيسي او فرعي
        [ForeignKey("CenterTypeId")]
        public virtual Cost_Centers_Type CentersTypedcsdzdsfdsd { get; set; }
        public string CenterType { get; set; }
      
        public int? CenterRankId { get; set; }
        [ForeignKey("CenterRankId")]
        public virtual CostCenter_Rank CentersRank { get; set; }
        public string CenterRankName { get; set; }
     
        public int? CenterGroupeId { get; set; }
        [ForeignKey("CenterGroupeId")]
        public virtual CostCenters_Groupe CentersGroupe { get; set; }
        public string CenterGroupe { get; set; }
     

        public int? CenterStateId { get; set; }
        [ForeignKey("CenterStateId")]
        public virtual CostCenters_State CentersState { get; set; }
        public string CenterState { get; set; }
        /// <summary>
        /// ReltionShips
        /// </summary>

        public virtual ICollection<ChartOfAccounts> ChartOfAccounts { get; set; }
      //  public virtual ICollection<LocalAccounts.EmployeeMove_Type> EmployeeMove_Types { get; set; }
        //public virtual ICollection<LocalAccounts.Salerys_Execution> Salerys_Executions { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases__Invoice> Purchases__Invoices { get; set; }
        ////  public virtual ICollection<Al_Purchases.Purchases_Returns> Purchases_Returns { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases_Requerts> Purchases_Requerts { get; set; }
        //public virtual ICollection<Al_Purchases.Purchases_Commands> Purchases_Commands { get; set; }
        //public virtual ICollection<Al_Sales.Sales_Invoice> Sales_Invoices { get; set; }
        //// public virtual ICollection<Al_Sales.Sales_Returns> Sales_Returns { get; set; }
        //public virtual ICollection<Al_Sales.ServiceSales_Invoice> ServiceSales_Invoices { get; set; }
        //public virtual ICollection<Al_Sales.Prices_Displaies> Prices_Displaies { get; set; }
        ////  public virtual ICollection<Categores_and_Stores.Stores.StoreOutgoings_Returns> StoreOutgoings_Returns { get; set; }
        //// public virtual ICollection<Categores_and_Stores.Stores.StoreResource_Returns> StoreResource_Returns { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Resource> Store_Resources { get; set; }
        //public virtual ICollection<Categores_and_Stores.Categores.Store_Outgoings> Store_Outgoings { get; set; }




    }
}
