using Abp.Authorization;
using PRO.Authorization.Roles;
using PRO.Authorization.Users;

namespace PRO.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
