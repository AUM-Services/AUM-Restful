using asp_dot_net_restline_api.recents;

namespace asp_dot_net_restline_api.static_classes
{
    internal static class RestDelete
    {
        /// <summary>
        /// Update a lookup in the database
        /// </summary>
        /// <param name="newLookup"></param>
        /// <returns></returns>
        internal async static Task<bool> AsyncLookup(int lookupId)
        {
            using (var db = new ApplicationDBContext())
            {
                try
                {
                    Lookup? lookupReference = await RestGet.AsyncLookupById(lookupId);
                    if (lookupReference != null) db.Remove(lookupReference);
                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return false;
                }
            }
        }
    }
}
