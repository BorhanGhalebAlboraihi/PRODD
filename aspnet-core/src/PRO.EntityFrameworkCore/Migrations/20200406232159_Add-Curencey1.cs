using Microsoft.EntityFrameworkCore.Migrations;

namespace PRO.Migrations
{
    public partial class AddCurencey1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterGroupes_CenterGroupeId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterRanks_CenterRankId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterStates_CenterStateId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterTypes_CenterTypeId",
                table: "CostCenters");

            migrationBuilder.AlterColumn<int>(
                name: "CenterTypeId",
                table: "CostCenters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CenterStateId",
                table: "CostCenters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "CenterRankName",
                table: "CostCenters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CenterRankId",
                table: "CostCenters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CenterGroupeId",
                table: "CostCenters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterGroupes_CenterGroupeId",
                table: "CostCenters",
                column: "CenterGroupeId",
                principalTable: "CenterGroupes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterRanks_CenterRankId",
                table: "CostCenters",
                column: "CenterRankId",
                principalTable: "CenterRanks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterStates_CenterStateId",
                table: "CostCenters",
                column: "CenterStateId",
                principalTable: "CenterStates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterTypes_CenterTypeId",
                table: "CostCenters",
                column: "CenterTypeId",
                principalTable: "CenterTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterGroupes_CenterGroupeId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterRanks_CenterRankId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterStates_CenterStateId",
                table: "CostCenters");

            migrationBuilder.DropForeignKey(
                name: "FK_CostCenters_CenterTypes_CenterTypeId",
                table: "CostCenters");

            migrationBuilder.AlterColumn<int>(
                name: "CenterTypeId",
                table: "CostCenters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CenterStateId",
                table: "CostCenters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CenterRankName",
                table: "CostCenters",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CenterRankId",
                table: "CostCenters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CenterGroupeId",
                table: "CostCenters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterGroupes_CenterGroupeId",
                table: "CostCenters",
                column: "CenterGroupeId",
                principalTable: "CenterGroupes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterRanks_CenterRankId",
                table: "CostCenters",
                column: "CenterRankId",
                principalTable: "CenterRanks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterStates_CenterStateId",
                table: "CostCenters",
                column: "CenterStateId",
                principalTable: "CenterStates",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CostCenters_CenterTypes_CenterTypeId",
                table: "CostCenters",
                column: "CenterTypeId",
                principalTable: "CenterTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
