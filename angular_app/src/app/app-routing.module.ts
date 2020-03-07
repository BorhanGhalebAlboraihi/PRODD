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
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
