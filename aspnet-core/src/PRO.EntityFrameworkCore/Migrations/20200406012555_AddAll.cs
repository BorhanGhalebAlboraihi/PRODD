using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PRO.Migrations
{
    public partial class AddAll : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountGroupes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GroupeName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountGroupes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountRanks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RankName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true),
                    Length = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountRanks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountStates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    StateName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountStates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AccountTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountTypeName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CenterGroupes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CenterGroupeName = table.Column<string>(nullable: true),
                    EnName = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterGroupes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CenterRanks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CenterRankRName = table.Column<string>(nullable: true),
                    Length = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterRanks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CenterStates",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CenterStateName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterStates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CenterTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CenterTypeName = table.Column<string>(nullable: true),
                    EngName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CenterTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Moneys",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CurrencyName = table.Column<string>(nullable: true),
                    CurrencySymbole = table.Column<string>(nullable: true),
                    CurrencyBarket = table.Column<string>(nullable: true),
                    CurrencyPric = table.Column<double>(nullable: false),
                    CurrencyPriceTop = table.Column<double>(nullable: false),
                    CurrencyPriceLess = table.Column<double>(nullable: false),
                    CurrencyCountry = table.Column<string>(nullable: true),
                    CurrencyState = table.Column<string>(nullable: true),
                    CurrencyType = table.Column<string>(nullable: true),
                    CurrencyHistory = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Moneys", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CostCenters",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CostCentersName = table.Column<string>(nullable: true),
                    MainCostCentersId = table.Column<int>(nullable: false),
                    CenterTypeId = table.Column<int>(nullable: false),
                    CenterType = table.Column<string>(nullable: true),
                    CenterRankId = table.Column<int>(nullable: false),
                    CenterRankName = table.Column<int>(nullable: false),
                    CenterGroupeId = table.Column<int>(nullable: false),
                    CenterGroupe = table.Column<string>(nullable: true),
                    CenterStateId = table.Column<int>(nullable: false),
                    CenterState = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CostCenters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CostCenters_CenterGroupes_CenterGroupeId",
                        column: x => x.CenterGroupeId,
                        principalTable: "CenterGroupes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CostCenters_CenterRanks_CenterRankId",
                        column: x => x.CenterRankId,
                        principalTable: "CenterRanks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CostCenters_CenterStates_CenterStateId",
                        column: x => x.CenterStateId,
                        principalTable: "CenterStates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CostCenters_CenterTypes_CenterTypeId",
                        column: x => x.CenterTypeId,
                        principalTable: "CenterTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ChartOfAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountName = table.Column<string>(nullable: true),
                    MainAccountId = table.Column<double>(nullable: false),
                    AccountNetural = table.Column<string>(nullable: true),
                    AccountMain = table.Column<string>(nullable: true),
                    AccountConfidentility = table.Column<string>(nullable: true),
                    AccountRanKId = table.Column<int>(nullable: false),
                    AccountRankName = table.Column<string>(nullable: true),
                    AccountGroupeId = table.Column<int>(nullable: false),
                    AccountGroupeName = table.Column<string>(nullable: true),
                    CenterId = table.Column<int>(nullable: false),
                    CenterName = table.Column<string>(nullable: true),
                    AccountTypeId = table.Column<int>(nullable: false),
                    AccountType = table.Column<string>(nullable: true),
                    CurrencyId = table.Column<int>(nullable: false),
                    CurrencyName = table.Column<string>(nullable: true),
                    AccountStateId = table.Column<int>(nullable: false),
                    AccountState = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChartOfAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_AccountGroupes_AccountGroupeId",
                        column: x => x.AccountGroupeId,
                        principalTable: "AccountGroupes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_AccountRanks_AccountRanKId",
                        column: x => x.AccountRanKId,
                        principalTable: "AccountRanks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_AccountStates_AccountStateId",
                        column: x => x.AccountStateId,
                        principalTable: "AccountStates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_AccountTypes_AccountTypeId",
                        column: x => x.AccountTypeId,
                        principalTable: "AccountTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_CostCenters_CenterId",
                        column: x => x.CenterId,
                        principalTable: "CostCenters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ChartOfAccounts_Moneys_CurrencyId",
                        column: x => x.CurrencyId,
                        principalTable: "Moneys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Banks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BakArabicName = table.Column<string>(nullable: true),
                    BakEnglishName = table.Column<string>(nullable: true),
                    BakType = table.Column<string>(nullable: true),
                    BakState = table.Column<string>(nullable: true),
                    BakNetuarl = table.Column<string>(nullable: true),
                    CurrencyId = table.Column<int>(nullable: false),
                    MoneyName = table.Column<int>(nullable: true),
                    CurrencyName = table.Column<string>(nullable: true),
                    AccountId = table.Column<int>(nullable: false),
                    BakMainAccountNB = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Banks_ChartOfAccounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "ChartOfAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Banks_Moneys_MoneyName",
                        column: x => x.MoneyName,
                        principalTable: "Moneys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Boxs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BoxArabicName = table.Column<string>(nullable: true),
                    BoxEnglishName = table.Column<string>(nullable: true),
                    BoxMainAccountNB = table.Column<int>(nullable: false),
                    BoxType = table.Column<string>(nullable: true),
                    BoxState = table.Column<string>(nullable: true),
                    BoxNetuarl = table.Column<string>(nullable: true),
                    CenterId = table.Column<int>(nullable: false),
                    CenterName = table.Column<string>(nullable: true),
                    MoneyId = table.Column<int>(nullable: false),
                    MoneyName = table.Column<int>(nullable: true),
                    CurrencyName = table.Column<string>(nullable: true),
                    AccountId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Boxs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Boxs_ChartOfAccounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "ChartOfAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Boxs_Moneys_MoneyName",
                        column: x => x.MoneyName,
                        principalTable: "Moneys",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Banks_AccountId",
                table: "Banks",
                column: "AccountId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Banks_MoneyName",
                table: "Banks",
                column: "MoneyName");

            migrationBuilder.CreateIndex(
                name: "IX_Boxs_AccountId",
                table: "Boxs",
                column: "AccountId",
                unique: true,
                filter: "[AccountId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Boxs_MoneyName",
                table: "Boxs",
                column: "MoneyName");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_AccountGroupeId",
                table: "ChartOfAccounts",
                column: "AccountGroupeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_AccountRanKId",
                table: "ChartOfAccounts",
                column: "AccountRanKId");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_AccountStateId",
                table: "ChartOfAccounts",
                column: "AccountStateId");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_AccountTypeId",
                table: "ChartOfAccounts",
                column: "AccountTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_CenterId",
                table: "ChartOfAccounts",
                column: "CenterId");

            migrationBuilder.CreateIndex(
                name: "IX_ChartOfAccounts_CurrencyId",
                table: "ChartOfAccounts",
                column: "CurrencyId");

            migrationBuilder.CreateIndex(
                name: "IX_CostCenters_CenterGroupeId",
                table: "CostCenters",
                column: "CenterGroupeId");

            migrationBuilder.CreateIndex(
                name: "IX_CostCenters_CenterRankId",
                table: "CostCenters",
                column: "CenterRankId");

            migrationBuilder.CreateIndex(
                name: "IX_CostCenters_CenterStateId",
                table: "CostCenters",
                column: "CenterStateId");

            migrationBuilder.CreateIndex(
                name: "IX_CostCenters_CenterTypeId",
                table: "CostCenters",
                column: "CenterTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Banks");

            migrationBuilder.DropTable(
                name: "Boxs");

            migrationBuilder.DropTable(
                name: "ChartOfAccounts");

            migrationBuilder.DropTable(
                name: "AccountGroupes");

            migrationBuilder.DropTable(
                name: "AccountRanks");

            migrationBuilder.DropTable(
                name: "AccountStates");

            migrationBuilder.DropTable(
                name: "AccountTypes");

            migrationBuilder.DropTable(
                name: "CostCenters");

            migrationBuilder.DropTable(
                name: "Moneys");

            migrationBuilder.DropTable(
                name: "CenterGroupes");

            migrationBuilder.DropTable(
                name: "CenterRanks");

            migrationBuilder.DropTable(
                name: "CenterStates");

            migrationBuilder.DropTable(
                name: "CenterTypes");
        }
    }
}
