using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Abp.Timing;
using System;
using System.Collections.Generic;
using System.Text;

namespace PRO.Employees
{
   public class Employee:Entity
    {
      

        public string Name { get; set; }
        public string Gender { get; set; }
        
    }

}
