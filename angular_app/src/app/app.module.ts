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
