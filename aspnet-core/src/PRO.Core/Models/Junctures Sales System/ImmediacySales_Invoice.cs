using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Junctures_Sales_System
{
    public class ImmediacySales_Invoice
    {
        public int Id { get; set; }
        public int InvoiceId { get; set; }
        public int JAId { get; set; }
        [ForeignKey("JAId")]
        public virtual Junctures_Add JunctureId { get; set; }
        public string JA_Name { get; set; }
        public int S_Id { get; set; }
        public string S_Name { get; set; }
        public int M_Id { get; set; }
        public string M_Name { get; set; }
        public DateTime History { get; set; }
        /// <summary>
        /// طريقة الدفع
        /// </summary>
        public bool Cesh { get; set; }
        public bool Cheque { get; set; }
        public bool Debtore { get; set; }

        public int CustId { get; set; }
        [ForeignKey("CustId")]
        public virtual Accounts.Customers CustomerId { get; set; } 
        public string Cust_Name { get; set; }
        /// <summary>
        /// Lower
        /// </summary>
        public int CateId { get; set; }
        [ForeignKey("CateId")]
        public virtual Categores_and_Stores.Categores.Categores_Data Categores_Data { get; set; }
        public int U_Id { get; set; }
        public virtual Categores_and_Stores.Stores.Stores_Units Stores_Units { get; set; }
        public string U_Name { get; set; }


    }
}
