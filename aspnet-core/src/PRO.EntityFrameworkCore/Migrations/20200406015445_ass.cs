using Microsoft.EntityFrameworkCore.Migrations;

namespace PRO.Migrations
{
    public partial class ass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountGroupes_AccountGroupeId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountRanks_AccountRanKId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountStates_AccountStateId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountTypes_AccountTypeId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_CostCenters_CenterId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts");

            migrationBuilder.AlterColumn<int>(
                name: "CurrencyId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CenterId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AccountTypeId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AccountStateId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AccountRanKId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AccountGroupeId",
                table: "ChartOfAccounts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountGroupes_AccountGroupeId",
                table: "ChartOfAccounts",
                column: "AccountGroupeId",
                principalTable: "AccountGroupes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountRanks_AccountRanKId",
                table: "ChartOfAccounts",
                column: "AccountRanKId",
                principalTable: "AccountRanks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountStates_AccountStateId",
                table: "ChartOfAccounts",
                column: "AccountStateId",
                principalTable: "AccountStates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountTypes_AccountTypeId",
                table: "ChartOfAccounts",
                column: "AccountTypeId",
                principalTable: "AccountTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_CostCenters_CenterId",
                table: "ChartOfAccounts",
                column: "CenterId",
                principalTable: "CostCenters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts",
                column: "CurrencyId",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountGroupes_AccountGroupeId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountRanks_AccountRanKId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountStates_AccountStateId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_AccountTypes_AccountTypeId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_CostCenters_CenterId",
                table: "ChartOfAccounts");

            migrationBuilder.DropForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts");

            migrationBuilder.AlterColumn<int>(
                name: "CurrencyId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CenterId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AccountTypeId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AccountStateId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AccountRanKId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AccountGroupeId",
                table: "ChartOfAccounts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountGroupes_AccountGroupeId",
                table: "ChartOfAccounts",
                column: "AccountGroupeId",
                principalTable: "AccountGroupes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountRanks_AccountRanKId",
                table: "ChartOfAccounts",
                column: "AccountRanKId",
                principalTable: "AccountRanks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountStates_AccountStateId",
                table: "ChartOfAccounts",
                column: "AccountStateId",
                principalTable: "AccountStates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_AccountTypes_AccountTypeId",
                table: "ChartOfAccounts",
                column: "AccountTypeId",
                principalTable: "AccountTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_CostCenters_CenterId",
                table: "ChartOfAccounts",
                column: "CenterId",
                principalTable: "CostCenters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ChartOfAccounts_Currency_CurrencyId",
                table: "ChartOfAccounts",
                column: "CurrencyId",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
