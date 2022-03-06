using asp_dot_net_restline_api.recents;

namespace asp_dot_net_restline_api.static_classes
{
    internal static class RestPost
    {
#pragma warning disable CS8602 // Null is handled.

        /// <summary>
        /// Add a lookup to the database
        /// </summary>
        /// <param name="newLookup"></param>
        /// <returns></returns>
        internal async static Task<bool> AsyncLookup(Lookup newLookup)
        {
            using (var db = new ApplicationDBContext())
            {
                try
                {
                    if (await db.Lookups.AddAsync(newLookup) == null) return false;
                    else
                    {
                        return await db.SaveChangesAsync() >= 1;
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return false;
                }
            }
        }

#pragma warning restore CS8602 // Return to normal
    }
}
