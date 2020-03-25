import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AbpModule } from '@abp/abp.module';

import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import { TopBarComponent } from '@app/layout/topbar.component';
import { TopBarLanguageSwitchComponent } from '@app/layout/topbar-languageswitch.component';
import { SideBarUserAreaComponent } from '@app/layout/sidebar-user-area.component';
import { SideBarNavComponent } from '@app/layout/sidebar-nav.component';
import { SideBarFooterComponent } from '@app/layout/sidebar-footer.component';
import { RightSideBarComponent } from '@app/layout/right-sidebar.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
import { variable } from '@angular/compiler/src/output/output_ast';
import { SysVariablesComponent } from './stores/init_system/variables/sys-variables/sys-variables.component';
import { CatacorytypeComponent } from './stores/init_system/catacories_type/catacorytype/catacorytype.component';
import { InventoryCoinComponent } from './stores/init_system/inventory_coin/inventory-coin/inventory-coin.component';
import { CurrencyCoinComponent } from './stores/init_system/currency/currency-coin/currency-coin.component';
import { SupplyOrdersComponent } from './stores/init_system/supply-orders/supply-orders/supply-orders.component';
import { ExchangeOrdersComponent } from './stores/init_system/exchange-orders/exchange-orders/exchange-orders.component';
import { ConversionOrdersComponent } from './stores/init_system/conversion-orders/conversion-orders/conversion-orders.component';
import { MeasurementUnitsComponent } from './stores/init_system/measurement_units/measurement-units/measurement-units.component';

import { VarsAccontComponent } from './ِAccounts/init-system/Var-Accont/vars-accont/vars-accont.component';
import { FatratAccuntComponent } from './ِAccounts/init-system/fatrah_Accounting/fatrat-accunt/fatrat-accunt.component';
import { DataManyComponent } from './ِAccounts/init-system/Data-many/data-many/data-many.component';
import { SetAccountComponent } from './ِAccounts/init-system/Set_Accont/set-account/set-account.component';
import { ConstTypeComponent } from './ِAccounts/init-system/const_type_today/const-type/const-type.component';
import { CenterCostTypeComponent } from './ِAccounts/init-system/Center_cost_set/center-cost-type/center-cost-type.component';
import { AccountMadialComponent } from './ِAccounts/init-system/Account-Madial/account-madial/account-madial.component';
import { ScreedAccountComponent } from './ِAccounts/Input-bases/Screed-Accounting/screed-account/screed-account.component';
import { BanksComponent } from './ِAccounts/Input-bases/Banke/banks/banks.component';
import { RasedOpenComponent } from './ِAccounts/Input-bases/Rased_Accounting/rased-open/rased-open.component';
import { BoxsAccountComponent } from './ِAccounts/Input-bases/Box_Account/boxs-account/boxs-account.component';
import { ElevatedBalanceComponent } from './ِAccounts/Input-bases/Elevated-balance/elevated-balance/elevated-balance.component';
import { OperatingToddaysComponent } from './ِAccounts/Operating_Account/constracting_todays/operating-toddays/operating-toddays.component';
import { SershConstDayesComponent } from './ِAccounts/Operating_Account/constracting_todays/operating-toddays/Sersh-const-dayes/sersh-const-dayes/sersh-const-dayes.component';
import { DailyExtchangeComponent } from './ِAccounts/Operating_Account/constracting_todays/operating-toddays/daily-extchsnge/daily-extchange/daily-extchange.component';
import { DailyArrestsComponent } from './ِAccounts/Operating_Account/constracting_todays/operating-toddays/Daily -arrests/daily-arrests/daily-arrests.component';
import { TesionsOfarrestsComponent } from './ِAccounts/Operating_Account/Tensions-of-arrests/tesions-ofarrests/tesions-ofarrests.component';
import { WindsonsComponent } from './ِAccounts/Operating_Account/Windsons/windsons/windsons.component';
import { MultiChecksComponent } from './ِAccounts/Operating_Account/Multi-checks/multi-checks/multi-checks.component';
import { ChecksComponent } from './ِAccounts/Operating_Account/checks/checks/checks.component';
import { DistributionCoustomerComponent } from './ِAccounts/Operating_Account/Distribution-custommer-claims/distribution-coustomer/distribution-coustomer.component';
import { CrdibleNoficationsComponent } from './ِAccounts/Operating_Account/Credible_notfications/crdible-nofications/crdible-nofications.component';
import { TributeKnComponent } from './ِAccounts/Operating_Account/Tributetokn/tribute-kn/tribute-kn.component';
import { MigrationBondsComponent } from './ِAccounts/Migrating/migration_cash_bonds/migration-bonds/migration-bonds.component';
import { DataAreaComponent } from './Sales_managment/input_system/Data_area/data-area/data-area.component';
import { DataCalegeComponent } from './Sales_managment/input_system/data-calege/data-calege/data-calege.component';
import { DataDelegatesComponent } from './Sales_managment/input_system/data_of_delegates/data-delegates/data-delegates.component';
import { DataCustomerComponent } from './Sales_managment/input_system/data_customer/data-customer/data-customer.component';
import { OptionsComponent } from './Sales_managment/init-sys-manger/Variabuls_manger/options/options/options.component';
import { CustomerTypesComponent } from './Sales_managment/init-sys-manger/Variabuls_manger/customer_types/customer-types/customer-types.component';
import { TypeFizaComponent } from './Sales_managment/init-sys-manger/Variabuls_manger/Type_fizah/type-fiza/type-fiza.component';
import { PremiumsLastyearsComponent } from './Sales_managment/Operation_Mangmeint/premiums_last_year/premiums-lastyears/premiums-lastyears.component';
import { ShowroomsComponent } from './Sales_managment/Operation_Mangmeint/showrooms/showrooms/showrooms.component';
import { CustomerRequestsComponent } from './Sales_managment/Operation_Mangmeint/Customer_requests/customer-requests/customer-requests.component';
import { SalesBillsComponent } from './Sales_managment/Operation_Mangmeint/sales_bills/sales-bills/sales-bills.component';
import { OrderSalesComponent } from './Sales_managment/Operation_Mangmeint/order_sales/order-sales/order-sales.component';
import { SalesYieldsComponent } from './Sales_managment/Operation_Mangmeint/Sales_yield/sales-yields/sales-yields.component';
import { CatagoryComponent } from './Sales_managment/Operation_Mangmeint/Catageory/catagory/catagory.component';
import { YieldLastyearsComponent } from './Sales_managment/Operation_Mangmeint/yield-lastyears/yield-lastyears/yield-lastyears.component';

import { GroupsDataComponent } from './stores/basic_inputs/group-data/groups-data/groups-data.component';
import { CatagoresDataComponent } from './stores/basic_inputs/catagores-data/catagores-data/catagores-data.component';
import { StoresDataComponent } from './stores/basic_inputs/stores-data/stores-data/stores-data.component';
import { ScientificCataComponent } from './stores/basic_inputs/catagores-data/scientific-catagores/scientific-cata/scientific-cata.component';
import { AlternativeCataComponent } from './stores/basic_inputs/catagores-data/alternative-catagores/alternative-cata/alternative-cata.component';
import { DataSheetsComponent } from './stores/basic_inputs/data-sheets/data-sheets/data-sheets.component';
import { OpeningInventoryComponent } from './stores/basic_inputs/catagores-store/opening-inventory/opening-inventory.component';
import { PricingComponent } from './stores/basic_inputs/pricing/pricing/pricing.component';
import { ChangePricesComponent } from './stores/basic_inputs/change-prices/change-prices/change-prices.component';
import { CatagoresBudgetComponent } from './stores/basic_inputs/catagores-budget/catagores-budget/catagores-budget.component';
import { BarcodPrintComponent } from './stores/basic_inputs/barcod-print/barcod-print/barcod-print.component';
import { SupplyStoresComponent } from './stores/operations/supply-stores/supply-stores/supply-stores.component';
import { DisplayingStoresComponent } from './stores/operations/displaying-stores/displaying-stores/displaying-stores.component';
import { RefundorSupplyComponent } from './stores/operations/refundor-supply/refundor-supply/refundor-supply.component';
import { StocksComponent } from './stores/operations/stocks/stocks/stocks.component';
import { DamagedCatagoresComponent } from './stores/operations/damaged-catagores/damaged-catagores/damaged-catagores.component';
import { StocksSettlementComponent } from './stores/operations/stock-settlement/stocks-settlement/stocks-settlement.component';
import { JaardListsComponent } from './stores/jaard/jaard-lists/jaard-lists/jaard-lists.component';
import { JaardManuallyComponent } from './stores/jaard/jaard-input-manually/jaard-manually/jaard-manually.component';
import { JaardReportsComponent } from './stores/jaard/jaard-reports/jaard-reports/jaard-reports.component';
import { StoresReportsComponent } from './stores/reports/stores-reports/stores-reports/stores-reports.component';
import { InventoryMovementComponent } from './stores/reports/inventory-movement/inventory-movement/inventory-movement.component';
import { RotationRateComponent } from './stores/reports/rotation-rate/rotation-rate/rotation-rate.component';
import { SupplyReportsComponent } from './stores/reports/supply-reports/supply-reports/supply-reports.component';
import { PurchasesOptionsComponent } from './purchases/init-sys/options/purchases-options/purchases-options.component';
import { DataSuppliersComponent } from './purchases/basic-input/data-suppliers/data-suppliers/data-suppliers.component';
import { SupplyDataComponent } from './purchases/basic-input/supply-data/supply-data/supply-data.component';
import { BuyingRequestsComponent } from './purchases/operations/buying-requests/buying-requests/buying-requests.component';
import { BuyingOrdersComponent } from './purchases/operations/buying-orders/buying-orders/buying-orders.component';
import { InstantBuyingBillsComponent } from './purchases/operations/instant-buying-bills/instant-buying-bills/instant-buying-bills.component';
import { BuyingBillsComponent } from './purchases/operations/buying-bills/buying-bills/buying-bills.component';
import { SerialNumbersComponent } from './purchases/operations/buying-bills/serial-numbers/serial-numbers/serial-numbers.component';
import { OrderSupplyComponent } from './purchases/operations/order-supply/order-supply/order-supply.component';
import { CostExternalBuyersComponent } from './purchases/operations/cost-external-buyers/cost-external-buyers/cost-external-buyers.component';
import { CostLocalBuyersComponent } from './purchases/operations/cost-local-buyers/cost-local-buyers/cost-local-buyers.component';
import { PaymentBillsPurchasedComponent } from './purchases/operations/payment-bills-purchased/payment-bills-purchased/payment-bills-purchased.component';
import { GlobalOptionsComponent } from './system-adminstration/sys-init/global-options/global-options/global-options.component';
import { ReportsSignaturesComponent } from './system-adminstration/sys-init/reports-signatures/reports-signatures/reports-signatures.component';
import { NotifcationsComponent } from './system-adminstration/sys-init/notifcations/notifcations/notifcations.component';
import { CurrentBranchDataComponent } from './system-adminstration/sys-branch/this-branch/current-branch-data/current-branch-data.component';
import { LinkedBranchComponent } from './system-adminstration/sys-branch/linked-branches/linked-branch/linked-branch.component';
import { StopPeriodsComponent } from './system-adminstration/locks/stop-periods/stop-periods/stop-periods.component';
import { MonthlyLocksComponent } from './system-adminstration/locks/monthly-locks/monthly-locks/monthly-locks.component';
import { LesbianLossesLocksComponent } from './system-adminstration/locks/annual-locks/lesbian-and-losses-locks/lesbian-losses-locks/lesbian-losses-locks.component';
import { OpenNewYearComponent } from './system-adminstration/locks/annual-locks/open-new-year/open-new-year/open-new-year.component';
import { StoreLocksComponent } from './system-adminstration/locks/annual-locks/store-locks/store-locks/store-locks.component';

import { CancelAnnualLocksComponent } from './system-adminstration/locks/annual-locks/cancel-annual-locks/cancel-annual-locks/cancel-annual-locks.component';
import { CustomerDataReportsComponent } from './Sales_managment/Reports_manger/Reports_customer/Customer data reports/customer-data-reports/customer-data-reports.component';
import { BalsalloReportsComponent } from './Sales_managment/Reports_manger/Reports_customer/Balsallo_Offers_Reports/balsallo-reports/balsallo-reports.component';
import { ReportRequestCustomerComponent } from './Sales_managment/Reports_manger/Reports_customer/report_request_custmer/report-request-customer/report-request-customer.component';
import { DebtsYearsComponent } from './Sales_managment/Reports_manger/Reports_customer/Debts_years/debts-years/debts-years.component';
import { ReportRasedCustomersComponent } from './Sales_managment/Reports_manger/Reports_customer/report_rased_customers/report-rased-customers/report-rased-customers.component';
import { PremiumReportsComponent } from './Sales_managment/Reports_manger/Reports_customer/Premium_reports/premium-reports/premium-reports.component';
import { SalesInvoReportsComponent } from './Sales_managment/Reports_manger/Sales _invoice/Sales_invoice_reports/sales-invo-reports/sales-invo-reports.component';
import { GrossProfitMarginComponent } from './Sales_managment/Reports_manger/Sales _invoice/Gross_profit_margin/gross-profit-margin/gross-profit-margin.component';
import { MigrationConstDayesComponent } from './ِAccounts/Migrating/migration_const_dayes/migration-const-dayes/migration-const-dayes.component';
import { CheckBondsComponent } from './ِAccounts/Migrating/Check_bonds/check-bonds/check-bonds.component';
import { DueChecksComponent } from './ِAccounts/Migrating/Due_checks/due-checks/due-checks.component';
import { StorSupplyOrdersComponent } from './ِAccounts/Migrating/Store _supply_orders/stor-supply-orders/stor-supply-orders.component';
import { ReturnsExchangOrdersComponent } from './ِAccounts/Migrating/Returns_exchange_orders/returns-exchang-orders/returns-exchang-orders.component';
import { StordExchangOrdersComponent } from './ِAccounts/Migrating/Stored_exchange_orders/stord-exchang-orders/stord-exchang-orders.component';
import { StorAdjustmentComponent } from './ِAccounts/Migrating/Stock_adjustment/stor-adjustment/stor-adjustment.component';
import { PurchaseInvoicesComponent } from './ِAccounts/Migrating/Purchase_invoices/purchase-invoices/purchase-invoices.component';
import { ImmediateBillingPurchasesComponent } from './ِAccounts/Migrating/Immediate_billing_purchases/immediate-billing-purchases/immediate-billing-purchases.component';
import { ImmediateReturnsComponent } from './ِAccounts/Migrating/Immediate_returns/immediate-returns/immediate-returns.component';
import { SalesInvoiceComponent } from './ِAccounts/Migrating/Sales_invoices/sales-invoice/sales-invoice.component';
import { ReturnsPurchasesComponent } from './ِAccounts/Migrating/Returns_purchases/returns-purchases/returns-purchases.component';
import { SalesReturnsComponent } from './ِAccounts/Migrating/Sales_returns/sales-returns/sales-returns.component';
import { ReturnsLastYearsComponent } from './ِAccounts/Migrating/Returns_last_years/returns-last-years/returns-last-years.component';
import { ScreedaccountingComponent } from './ِAccounts/Reportes/screed_acount/screedaccounting/screedaccounting.component';
import { ScreedCentercostComponent } from './ِAccounts/Reportes/screed_center_cost/screed-centercost/screed-centercost.component';
import { RasedOpeningsComponent } from './ِAccounts/Reportes/Rased_opening/rased-openings/rased-openings.component';
import { NofatgationReportsComponent } from './ِAccounts/Reportes/Nofatagation_reports/nofatgation-reports/nofatgation-reports.component';
import { ElevatedBalanceReportComponent } from './ِAccounts/Reportes/elevated_balance/elevated-balance-report/elevated-balance-report.component';
import { CustomerRemburseReportComponent } from './ِAccounts/Reportes/Customer_reimbursement_report/customer-remburse-report/customer-remburse-report.component';
import { MoveBoxsComponent } from './ِAccounts/Reportes/Move_box/move-boxs/move-boxs.component';
import { MoveChecksComponent } from './ِAccounts/Reportes/Move_checks/move-checks/move-checks.component';
import { AccountStatenentsComponent } from './ِAccounts/Reportes/Account_statements/account-statenents/account-statenents.component';
import { MoniterMoveAccountComponent } from './ِAccounts/Reportes/Monitor_movement_accounts/moniter-move-account/moniter-move-account.component';
import { StatisticsBalanceAccountComponent } from './ِAccounts/Reportes/Statistics_Balanced_Accounts/statistics-balance-account/statistics-balance-account.component';
import { ReportsScreedCostsComponent } from './ِAccounts/Reportes/reports_screed_cost/reports-screed-costs/reports-screed-costs.component';
import { GeneralTodayComponent } from './ِAccounts/Reportes/General_today/general-today/general-today.component';
import { ScalesReturnsComponent } from './ِAccounts/Reportes/Scales_return/scales-returns/scales-returns.component';
import { VariationLibrayComponent } from './ِAccounts/Reportes/Variation_libray/variation-libray/variation-libray.component';
import { ProfitsLossesComponent } from './ِAccounts/Reportes/Profits_Losses/profits-losses/profits-losses.component';
import { LibaryGeneralnessComponent } from './ِAccounts/Reportes/Libary_generalness/libary-generalness/libary-generalness.component';
import { ConstTodayBondsComponent } from './ِAccounts/Reportes/Bonds/Const_todays_bonds/const-today-bonds/const-today-bonds.component';
import { FolderTodayBondsComponent } from './ِAccounts/Reportes/Bonds/Folder_today/folder-today-bonds/folder-today-bonds.component';
import { BondsNsgedReportsComponent } from './ِAccounts/Reportes/Bonds/bonds_naqed_reports/bonds-nsged-reports/bonds-nsged-reports.component';
import { BondsBanksComponent } from './ِAccounts/Reportes/Bonds/Bonds_Banks/bonds-banks/bonds-banks.component';
import { AccomptChacksComponent } from './ِAccounts/Reportes/Bonds/Accompt_chacks/accompt-chacks/accompt-chacks.component';
import { MoveBondsCatchComponent } from './ِAccounts/Reportes/Bonds/Move_bonds_catch/move-bonds-catch/move-bonds-catch.component';
import { TotalBondasCatchComponent } from './ِAccounts/Reportes/Bonds/Total_bondas_catch/total-bondas-catch/total-bondas-catch.component';
import { OrdersResorsComponent } from './ِAccounts/Reportes/Bonds/Orders_Resors/orders-resors/orders-resors.component';
import { ReturnsOrdersResorsComponent } from './ِAccounts/Reportes/Bonds/Retuens_orders_resors/returns-orders-resors/returns-orders-resors.component';
import { OrdersPureStoringComponent } from './ِAccounts/Reportes/Bonds/Orders_pure_storing/orders-pure-storing/orders-pure-storing.component';
import { BondsInvoicePurchasesComponent } from './ِAccounts/Reportes/Bonds/bonds_invoice_purchases/bonds-invoice-purchases/bonds-invoice-purchases.component';
import { BondsReturnsPurchasesComponent } from './ِAccounts/Reportes/Bonds/bonds_Returns_purchases/bonds-returns-purchases/bonds-returns-purchases.component';
import { BondsInvoiceSalesComponent } from './ِAccounts/Reportes/Bonds/bonds_invoice_sales/bonds-invoice-sales/bonds-invoice-sales.component';
import { BondsReturnsSalesComponent } from './ِAccounts/Reportes/Bonds/bonds_Returns_sales/bonds-returns-sales/bonds-returns-sales.component';
import { BondsReturneLastyearsComponent } from './ِAccounts/Reportes/Bonds/bonds_returns_lastyears/bonds-returne-lastyears/bonds-returne-lastyears.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopBarComponent,
    TopBarLanguageSwitchComponent,
    SideBarUserAreaComponent,
    SideBarNavComponent,
    SideBarFooterComponent,
    RightSideBarComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    SysVariablesComponent,
    CatacorytypeComponent,
    InventoryCoinComponent,
    CurrencyCoinComponent,
    SupplyOrdersComponent,
    ExchangeOrdersComponent,
    ConversionOrdersComponent,
    MeasurementUnitsComponent,

    VarsAccontComponent,
    FatratAccuntComponent,
    DataManyComponent,
    SetAccountComponent,
    ConstTypeComponent,
    CenterCostTypeComponent,
    AccountMadialComponent,
    ScreedAccountComponent,
    BanksComponent,
    RasedOpenComponent,
    BoxsAccountComponent,
    ElevatedBalanceComponent,
    OperatingToddaysComponent,
    SershConstDayesComponent,
    DailyExtchangeComponent,
    DailyArrestsComponent,
    TesionsOfarrestsComponent,
    WindsonsComponent,
    MultiChecksComponent,
    ChecksComponent,
    DistributionCoustomerComponent,
    CrdibleNoficationsComponent,
    TributeKnComponent,
    MigrationBondsComponent,
    DataAreaComponent,
    DataCalegeComponent,
    DataDelegatesComponent,
    DataCustomerComponent,
    OptionsComponent,
    CustomerTypesComponent,
    TypeFizaComponent,
    PremiumsLastyearsComponent,
    ShowroomsComponent,
    CustomerRequestsComponent,
    SalesBillsComponent,
    OrderSalesComponent,
    SalesYieldsComponent,
    CatagoryComponent,
    YieldLastyearsComponent
    ,
    GroupsDataComponent,
    CatagoresDataComponent,
    StoresDataComponent,
    ScientificCataComponent,
    AlternativeCataComponent,
    DataSheetsComponent,
    OpeningInventoryComponent,
    PricingComponent,
    ChangePricesComponent,
    CatagoresBudgetComponent,
    BarcodPrintComponent,
    SupplyStoresComponent,
    DisplayingStoresComponent,
    RefundorSupplyComponent,
    StocksComponent,
    DamagedCatagoresComponent,
    StocksSettlementComponent,
    JaardListsComponent,
    JaardManuallyComponent,
    JaardReportsComponent,
    StoresReportsComponent,
    InventoryMovementComponent,
    RotationRateComponent,
    SupplyReportsComponent,
    PurchasesOptionsComponent,
    DataSuppliersComponent,
    SupplyDataComponent,
    BuyingRequestsComponent,
    BuyingOrdersComponent,
    InstantBuyingBillsComponent,
    BuyingBillsComponent,
    SerialNumbersComponent,
    OrderSupplyComponent,
    CostExternalBuyersComponent,
    CostLocalBuyersComponent,
    PaymentBillsPurchasedComponent,
    GlobalOptionsComponent,
    ReportsSignaturesComponent,
    NotifcationsComponent,
    CurrentBranchDataComponent,
    LinkedBranchComponent,
    StopPeriodsComponent,
    MonthlyLocksComponent,
    LesbianLossesLocksComponent,
    OpenNewYearComponent,
    StoreLocksComponent,
    CancelAnnualLocksComponent,
    CustomerDataReportsComponent,
    BalsalloReportsComponent,
    ReportRequestCustomerComponent,
    DebtsYearsComponent,
    ReportRasedCustomersComponent,
    PremiumReportsComponent,
    SalesInvoReportsComponent,
    GrossProfitMarginComponent,
    MigrationConstDayesComponent,
    CheckBondsComponent,
    DueChecksComponent,
    StorSupplyOrdersComponent,
    ReturnsExchangOrdersComponent,
    StordExchangOrdersComponent,
    StorAdjustmentComponent,
    PurchaseInvoicesComponent,
    ImmediateBillingPurchasesComponent,
    ImmediateReturnsComponent,
    SalesInvoiceComponent,
    ReturnsPurchasesComponent,
    SalesReturnsComponent,
    ReturnsLastYearsComponent,
    ScreedaccountingComponent,
    ScreedCentercostComponent,
    RasedOpeningsComponent,
    NofatgationReportsComponent,
    ElevatedBalanceReportComponent,
    CustomerRemburseReportComponent,
    MoveBoxsComponent,
    MoveChecksComponent,
    AccountStatenentsComponent,
    MoniterMoveAccountComponent,
    StatisticsBalanceAccountComponent,
    ReportsScreedCostsComponent,
    GeneralTodayComponent,
    ScalesReturnsComponent,
    VariationLibrayComponent,
    ProfitsLossesComponent,
    LibaryGeneralnessComponent,
    ConstTodayBondsComponent,
    FolderTodayBondsComponent,
    BondsNsgedReportsComponent,
    BondsBanksComponent,
    AccomptChacksComponent,
    MoveBondsCatchComponent,
    TotalBondasCatchComponent,
    OrdersResorsComponent,
    ReturnsOrdersResorsComponent,
    OrdersPureStoringComponent,
    BondsInvoicePurchasesComponent,
    BondsReturnsPurchasesComponent,
    BondsInvoiceSalesComponent,
    BondsReturnsSalesComponent,
    BondsReturneLastyearsComponent

      ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forRoot(),
    AbpModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent
  ]
})
export class AppModule {}
