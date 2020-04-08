using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Junctures_Sales_System
{
    public class Junctures_Add
    {
        [Key]
        public int JA_Id { get; set; }
        public int JS_Name { get; set; }
        public int JSEn_Name { get; set; }
        public int AccountId { get; set; }
        [ForeignKey("AccountId")]
       public virtual Accounts.ChartOfAccounts ChartOfAccounts { get; set; }
        public int M_Id { get; set; }
        [ForeignKey("MoneyId")]
        public virtual Money Money { get; set; }
        public string M_Name { get; set; }
        public int EmpId { get; set; }
        [ForeignKey("EmpId")]
        public virtual Accounts.Employees EmployeeId { get; set; }
        public string Emp_Name { get; set; }
        public int SId { get; set; }
        [ForeignKey("SId")]
        public virtual Categores_and_Stores.Stores.Stores StoreId { get; set; }
        public string S_Name { get; set; }
        public string Jun_Type { get; set; }//نوع النقطة هي للبيع ام للمردود
        public string Location { get; set; }
        public string Details { get; set; }
        public DateTime History { get; set; }
        /// <summary>
        /// Relationship
        /// </summary>
        public virtual ICollection<ImmediacySales_Invoice> ImmediacySales_Invoices { get; set; }
    }
}
