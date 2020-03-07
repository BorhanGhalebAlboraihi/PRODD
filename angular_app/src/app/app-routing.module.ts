import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
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
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AccountMadialComponent } from './ِAccounts/init-system/Account-Madial/account-madial/account-madial.component';
import { BanksComponent } from './ِAccounts/Input-bases/Banke/banks/banks.component';
import { ScreedAccountComponent } from './ِAccounts/Input-bases/Screed-Accounting/screed-account/screed-account.component';
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
import { BuyingBillsComponent } from './purchases/operations/buying-bills/buying-bills/buying-bills.component';
import { BuyingOrdersComponent } from './purchases/operations/buying-orders/buying-orders/buying-orders.component';
import { BuyingRequestsComponent } from './purchases/operations/buying-requests/buying-requests/buying-requests.component';
import { CostExternalBuyersComponent } from './purchases/operations/cost-external-buyers/cost-external-buyers/cost-external-buyers.component';
import { CostLocalBuyersComponent } from './purchases/operations/cost-local-buyers/cost-local-buyers/cost-local-buyers.component';
import { InstantBuyingBillsComponent } from './purchases/operations/instant-buying-bills/instant-buying-bills/instant-buying-bills.component';
import { OrderSupplyComponent } from './purchases/operations/order-supply/order-supply/order-supply.component';
import { PaymentBillsPurchasedComponent } from './purchases/operations/payment-bills-purchased/payment-bills-purchased/payment-bills-purchased.component';

import { CancelAnnualLocksComponent } from './system-adminstration/locks/annual-locks/cancel-annual-locks/cancel-annual-locks/cancel-annual-locks.component';
import { LesbianLossesLocksComponent } from './system-adminstration/locks/annual-locks/lesbian-and-losses-locks/lesbian-losses-locks/lesbian-losses-locks.component';
import { OpenNewYearComponent } from './system-adminstration/locks/annual-locks/open-new-year/open-new-year/open-new-year.component';
import { StoreLocksComponent } from './system-adminstration/locks/annual-locks/store-locks/store-locks/store-locks.component';
import { MonthlyLocksComponent } from './system-adminstration/locks/monthly-locks/monthly-locks/monthly-locks.component';
import { StopPeriodsComponent } from './system-adminstration/locks/stop-periods/stop-periods/stop-periods.component';
import { LinkedBranchComponent } from './system-adminstration/sys-branch/linked-branches/linked-branch/linked-branch.component';
import { CurrentBranchDataComponent } from './system-adminstration/sys-branch/this-branch/current-branch-data/current-branch-data.component';
import { GlobalOptionsComponent } from './system-adminstration/sys-init/global-options/global-options/global-options.component';
import { NotifcationsComponent } from './system-adminstration/sys-init/notifcations/notifcations/notifcations.component';
import { ReportsSignaturesComponent } from './system-adminstration/sys-init/reports-signatures/reports-signatures/reports-signatures.component';







@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'sys-variables', component: SysVariablesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'catacorytype', component: CatacorytypeComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'vars-accont', component: VarsAccontComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'fatrat-accunt', component: FatratAccuntComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
            
                    { path: 'daily-extchange', component: DailyExtchangeComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'customer-requests', component: CustomerRequestsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },

                    { path: 'sales-bills', component: SalesBillsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'sales-yields', component: SalesYieldsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'catagory', component: CatagoryComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'yield-lastyears', component: YieldLastyearsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                   
                   
                    { path: 'order-sales', component: OrderSalesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-area', component: DataAreaComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-calege', component: DataCalegeComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-delegates', component: DataDelegatesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-customer', component: DataCustomerComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'options', component: OptionsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'customer-types', component: CustomerTypesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'type-fiza', component: TypeFizaComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'premiums-lastyears', component: PremiumsLastyearsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'showrooms', component: ShowroomsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                   
                    
                    { path: 'data-many', component: DataManyComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'set-account', component: SetAccountComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'center-cost-type', component: CenterCostTypeComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'account-madial', component: AccountMadialComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'const-type', component: ConstTypeComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'boxs-account', component: BoxsAccountComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'elevated-balance', component: ElevatedBalanceComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'operating-toddays', component: OperatingToddaysComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'sersh-const-dayes', component: SershConstDayesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'daily-arrests', component: DailyArrestsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'banks', component: BanksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'screed-account', component: ScreedAccountComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'rased-open', component: RasedOpenComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'tesions-ofarrests', component: TesionsOfarrestsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'windsons', component: WindsonsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'multi-checks', component: MultiChecksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'checks', component: ChecksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'distribution-coustomer', component: DistributionCoustomerComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: ' distribution-coustomer', component: DistributionCoustomerComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: ' tribute-kn', component: TributeKnComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'tribute-kn', component: TributeKnComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'crdible-nofications', component: CrdibleNoficationsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'migration-bonds', component:MigrationBondsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                 
                   
                    
                    { path: 'inventory-coin ', component: InventoryCoinComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'currency-coin', component: CurrencyCoinComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'supply-orders', component: SupplyOrdersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'exchange-orders', component: ExchangeOrdersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'conversion-orders', component: ConversionOrdersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'measurement-units', component: MeasurementUnitsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },

                    { path: 'groups-data', component: GroupsDataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'catagores-data', component: CatagoresDataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'stores-data', component: StoresDataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'scientific-cata', component: ScientificCataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'alternative-cata', component: AlternativeCataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-sheets', component: DataSheetsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'opening-inventory', component: OpeningInventoryComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'pricing', component: PricingComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'change-prices', component: ChangePricesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'catagores-budget', component: CatagoresBudgetComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'barcod-print', component: BarcodPrintComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'supply-stores', component: SupplyStoresComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'displaying-stores', component: DisplayingStoresComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'refundor-supply', component: RefundorSupplyComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'damaged-catagores', component: DamagedCatagoresComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'stocks-settlement', component: StocksSettlementComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'stocks', component: StocksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'jaard-lists', component: JaardListsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'jaard-manually', component: JaardManuallyComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'jaard-reports', component: JaardReportsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'stores-reports', component: StoresReportsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'inventory-movement', component: InventoryMovementComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'rotation-rate', component: RotationRateComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'supply-reports', component: SupplyReportsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'purchases-options', component: PurchasesOptionsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'data-suppliers', component: DataSuppliersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                   
                    { path: 'buying-bills', component: BuyingBillsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'buying-orders', component: BuyingOrdersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'buying-requests', component: BuyingRequestsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'cost-external-buyers', component: CostExternalBuyersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'cost-local-buyers', component: CostLocalBuyersComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'instant-buying-bills', component: InstantBuyingBillsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'order-supply', component: OrderSupplyComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'payment-bills-purchased', component: PaymentBillsPurchasedComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },

                    
                    { path: 'cancel-annual-locks', component: CancelAnnualLocksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'lesbian-losses-locks', component: LesbianLossesLocksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'open-new-year', component: OpenNewYearComponent , data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'store-locks', component: StoreLocksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'monthly-locks', component: MonthlyLocksComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'stop-periods', component: StopPeriodsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'linked-branch', component: LinkedBranchComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'current-branch-data', component: CurrentBranchDataComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'global-options', component: GlobalOptionsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'notifcations', component: NotifcationsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'reports-signatures', component: ReportsSignaturesComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },

                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
