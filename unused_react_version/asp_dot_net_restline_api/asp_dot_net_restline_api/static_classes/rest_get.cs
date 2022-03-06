using asp_dot_net_restline_api.recents;
using Microsoft.EntityFrameworkCore;

namespace asp_dot_net_restline_api.static_classes
{
    internal static class RestGet
    {
#pragma warning disable CS8603 // Nulls allowed.
#pragma warning disable CS8604 // Nulls allowed.

        /// <summary>
        /// Get all lookups
        /// </summary>
        /// <returns></returns>
        internal async static Task<List<Lookup>> AsyncLookups()
        {
            using (var db = new ApplicationDBContext())
            {
                return await db.Lookups.ToListAsync();
            }
        }

        /// <summary>
        /// Get a lookup by id
        /// </summary>
        /// <param name="lookupId"></param>
        /// <returns></returns>
        internal async static Task<Lookup> AsyncLookupById(int lookupId)
        {
            using (var db = new ApplicationDBContext())
            {
                return await db.Lookups.FirstOrDefaultAsync(l => l.Id == lookupId);
            }
        }

#pragma warning restore CS8603
#pragma warning restore CS8604 // Return to normal
    }
}
