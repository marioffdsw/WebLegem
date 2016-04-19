using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace IdentityServer.Config
{
    public static class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new[]
            {
                new Client
                {
                    Enabled = true,
                    ClientName = "Web Legem Client",
                    ClientId = "wlclient",
                    Flow = Flows.Implicit,

                    RedirectUris = new List<string>
                    {
                        "http://localhost:56668/index.html"
                    },

                    AllowedCorsOrigins = new List<string>
                    {
                        "http://localhost:52613"
                    },

                    AllowAccessToAllScopes = true
                }
            }; // end return
        } // end method Get
    } // end class Clients
} // end namespace IdentityServer.Config