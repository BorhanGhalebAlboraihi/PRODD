using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.SYS_Services.AccountsAdmin.CostCenters.Dto
{
   public class CostCentersDtoListDto
    {
        public string Account_Name { get; set; }
        public double MainAccount_Id { get; set; }
        public string Account_Netural { get; set; }
        public string Account_Main { get; set; }
        public string AccountState { get; set; }
        public string Account_Confidentility { get; set; }

        public string AccountRankName { get; set; }
        public string AccountGroupeName { get; set; }

        public int CenterId { get; set; }

        public string Center_Name { get; set; }
        public string AccountType { get; set; }
        public string MonyeName { get; set; }
       
    }
}
