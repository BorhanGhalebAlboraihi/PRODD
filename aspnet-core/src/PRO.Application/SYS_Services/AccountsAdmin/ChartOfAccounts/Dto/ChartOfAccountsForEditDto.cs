using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.SYS_Services.AccountsAdmin.ChartOfAccounts.Dto
{
   public class ChartOfAccountsForEditDto
    {
        public string AccountName { get; set; }
        public double MainAccountId { get; set; }
        public string AccountNetural { get; set; }
        public string AccountMain { get; set; }
        public string AccountRankName { get; set; }
        public string AccountGroupeName { get; set; }
        public string CenterName { get; set; }
        public string AccountType { get; set; }
        public string CurrencyName { get; set; }
        public string AccountState { get; set; }
        public string AccountConfidentility { get; set; }//السرية

    }
}
