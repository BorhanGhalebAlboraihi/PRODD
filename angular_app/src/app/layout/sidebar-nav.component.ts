import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [
        new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),

        new MenuItem(this.l('Tenants'), 'Pages.Tenants', 'business', '/app/tenants'),
        new MenuItem(this.l('Users'), 'Pages.Users', 'people', '/app/users'),
        new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
        new MenuItem(this.l('Stores'), '', 'business', '', [
            new MenuItem(this.l('تهيئة النظام'), '', '', '', [
                new MenuItem(this.l('المتغيرات'), '', '', '/app/sys-variables'),
                new MenuItem('أنواع الأصناف', '', '', '/app/catacorytype'),
                new MenuItem('عملة المخزون', '', '', '/app/inventory-coin'),
                new MenuItem('عملة التسعيرة', '', '', '/app/currency-coin'),
                new MenuItem('أنواع أوامر التوريد', '', '', '/app/supply-orders'),
                new MenuItem(' أنواع أوامر الصرف', '', '', '/app/exchange-orders'),
                new MenuItem(' أنواع أوامرالتحويل', '', '', '/app/conversion-orders'),
                new MenuItem(this.l('الوحدات المخزنية'), '', '', '/app/measurement-units')
                     ]),
            new MenuItem(this.l('المدخلات الأساسية'), '', '', '', [
                new MenuItem(this.l('بيانات المجموعات'), '', '', '/app/groups-data'),
                new MenuItem('بيانات الأصناف', '', '', '/app/catagores-data'),
                new MenuItem('بيانات المخازن', '', '', '/app/stores-data'),
                new MenuItem('الأصناف العلمــية', '', '', '/app/scientific-cata'),
                new MenuItem('الأصناف البديلة', '', '', '/app/alternative-cata'),
                new MenuItem('بيانات الرفوف', '', '', '/app/data-sheets'),
                new MenuItem('المخزون الإفتتاحي', '', '', '/app/opening-inventory'),
                new MenuItem(' التســـعيرة', '', '', '/app/pricing'),
                new MenuItem(' تعديل الأســــعار', '', '', '/app/change-prices'),
                new MenuItem('  الموازنة التقديرية للأصناف', '', '', '/app/catagores-budget'),
                new MenuItem('  طبــاعة بيانات الباركود  ', '', '', '/app/barcod-print')
            ]),
            new MenuItem(this.l('العمليات'), '', '', '', [
                new MenuItem(this.l('أمر توريد مخزني'), '', '', '/app/supply-stores'),
                new MenuItem(this.l('أمر صرف مخزني'), '', '', '/app/displaying-stores'),
                new MenuItem(this.l(' مــردود أمر توريد '), '', '', '/app/refundor-supply'),
                new MenuItem(this.l(' التحويل المخزني'), '', '', '/app/stocks'),
                new MenuItem(this.l('  الأصناف التالفة'), '', '', '/app/damaged-catagores'),
                new MenuItem(this.l('تـــسوية المخزون'), '', '', '/app/stocks-settlement')
            ]),
            new MenuItem(this.l(' الجرد'), '', '', '', [
                new MenuItem(this.l('قوائم الجرد'), '', '', '/app/jaard-lists'),
                new MenuItem('إدخال الجرد اليدوي', '', '', '/app/jaard-manually'),
                new MenuItem('الجرد الشهــري', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('تقرير زائد وناقص الجرد', '', '', '/app/jaard-reports')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('تقرير المخزون'), '', '', '/app/stores-reports'),
                new MenuItem(this.l('حركة المخزون'), '', '', '/app/inventory-movement'),
                new MenuItem(this.l(' معدل الدوران'), '', '', '/app/rotation-rate'),
                new MenuItem(this.l(' تقارير التوريد المخزني'), '', '', '/app/supply-reports')
            ]),
        ]),

            new MenuItem(this.l('About'), '', 'info', '/app/about'),

        new MenuItem(this.l('MultiLevelMenu'), '', 'menu', '', [
            new MenuItem('ASP.NET Boilerplate', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetboilerplate.com/?ref=abptmpl'),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem('ASP.NET Zero', '', '', '', [
                new MenuItem('Home', '', '', 'https://aspnetzero.com?ref=abptmpl'),
                new MenuItem('Description', '', '', 'https://aspnetzero.com/?ref=abptmpl#description'),
                new MenuItem('Features', '', '', 'https://aspnetzero.com/?ref=abptmpl#features'),
                new MenuItem('Pricing', '', '', 'https://aspnetzero.com/?ref=abptmpl#pricing'),
                new MenuItem('Faq', '', '', 'https://aspnetzero.com/Faq?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetzero.com/Documents?ref=abptmpl')
            ])
        ])
    ];

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }
}
