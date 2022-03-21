using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace asp_dot_net_restline_api.recents
{
    internal sealed class Lookup
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string URL { get; set; } = string.Empty;


        [Required]
        [MaxLength(15)]
        public string IP { get; set; } = string.Empty;

        /// <summary>
        /// Ctr for Lookup. Note: Entity framework needs the parameter name to match completely in order to pass the dotnet ef migration call
        /// </summary>
        /// <param name="Id"></param>
        /// <param name="URL"></param>
        /// <param name="IP"></param>
        internal Lookup(int Id, string URL, string IP)
        {
            this.Id = Id;
            this.URL = URL;
            this.IP = IP;
        }
    }
}
