using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace asp_dot_net_restline_api.recents.migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lookups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    URL = table.Column<string>(type: "TEXT", maxLength: 256, nullable: false),
                    IP = table.Column<string>(type: "TEXT", maxLength: 15, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lookups", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 1, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 2, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 3, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 4, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 5, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 6, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 7, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 8, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 9, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 10, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 11, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 12, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 13, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 14, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 15, "255.255.255.255", "startup" });

            migrationBuilder.InsertData(
                table: "Lookups",
                columns: new[] { "Id", "IP", "URL" },
                values: new object[] { 16, "255.255.255.255", "startup" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lookups");
        }
    }
}
