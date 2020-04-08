using Microsoft.EntityFrameworkCore.Migrations;

namespace PRO.Migrations
{
    public partial class AddAll1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Banks_Moneys_MoneyName",
                table: "Banks");

            migrationBuilder.DropForeignKey(
                name: "FK_Boxs_Moneys_MoneyName",
                table: "Boxs");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_Moneys_CurrencyId",
                table: "ChartOfAccounts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Moneys",
                table: "Moneys");

            migrationBuilder.RenameTable(
                name: "Moneys",
                newName: "Currency");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Currency",
                table: "Currency",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Banks_Currency_MoneyName",
                table: "Banks",
                column: "MoneyName",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Boxs_Currency_MoneyName",
                table: "Boxs",
                column: "MoneyName",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts",
                column: "CurrencyId",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Banks_Currency_MoneyName",
                table: "Banks");

            migrationBuilder.DropForeignKey(
                name: "FK_Boxs_Currency_MoneyName",
                table: "Boxs");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Currency",
                table: "Currency");

            migrationBuilder.RenameTable(
                name: "Currency",
                newName: "Moneys");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Moneys",
                table: "Moneys",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Banks_Moneys_MoneyName",
                table: "Banks",
                column: "MoneyName",
                principalTable: "Moneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Boxs_Moneys_MoneyName",
                table: "Boxs",
                column: "MoneyName",
                principalTable: "Moneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_Moneys_CurrencyId",
                table: "ChartOfAccounts",
                column: "CurrencyId",
                principalTable: "Moneys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
