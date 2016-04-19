using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace IdentityServer.Config
{
    public static class Scopes
    {
        public static List<Scope> Get()
        {
            return new List<Scope>
            {
                StandardScopes.OpenId,
                StandardScopes.Profile
            };
        } // end method Get
    } // end class Scopes
} // end namespace IdentityServer.Config