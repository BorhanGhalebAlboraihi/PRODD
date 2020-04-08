using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesSystem.Models.Junctures_Sales_System
{
    public class Junctures_Types
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public virtual ICollection<Junctures_Add> Junctures_Adds { get; set; }
    }
}
