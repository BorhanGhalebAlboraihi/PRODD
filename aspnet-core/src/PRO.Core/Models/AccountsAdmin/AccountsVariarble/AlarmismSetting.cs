using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Abp.Domain.Entities;

namespace SalesSystem.Models.Accounts
{
    public class AlarmismSetting: Entity<long>
    {
        // جدول اعدادد التنبيهات
     
        public string ArName { get; set; }
        public string EngName { get; set; }
        public int Ala_Time { get; set; }//ومدة التنبية
        public string Ala { get; set; }// هل يوجد تنبية
        public string State { get; set; }

    }
}

