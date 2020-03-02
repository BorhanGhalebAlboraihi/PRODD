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
    SupplyReportsComponent
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
