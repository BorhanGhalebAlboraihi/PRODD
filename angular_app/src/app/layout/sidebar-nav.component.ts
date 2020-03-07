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
                new MenuItem(this.l('skjfks'), '', '', ''),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem(this.l('العمليات'), '', '', '', [
                new MenuItem(this.l('skjfks'), '', '', ''),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem(this.l(' الجرد'), '', '', '', [
                new MenuItem(this.l('skjfks'), '', '', ''),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('skjfks'), '', '', ''),
                new MenuItem('Templates', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('Samples', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('Documents', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
        ]),
        new MenuItem(this.l('الحسابات'), '', 'business', '', [
            new MenuItem(this.l('تهيئة النظام'), '', '', '', [
                new MenuItem('المتغيرات', '', '', '/app/vars-accont'),
                new MenuItem('الفترات  المحاسبه', '', '', '/app/fatrat-accunt'),
                new MenuItem('  بيانات العملات ', '', '', '/app/data-many'),
                new MenuItem('مجموعه الحسابات', '', '', '/app/set-account'),
                new MenuItem('  مجموعه مراكز التكلفه', '', '', '/app/center-cost-type'),
                new MenuItem(' انواع  القيود اليوميه', '', '', '/app/const-type'),
                new MenuItem('  الحسابات الوسيطه', '', '', '/app/account-madial'),
                     ]),
            new MenuItem(this.l('المدخلات الأساسية'), '', '', '', [
                new MenuItem(this.l('الدليل المحاسبي'), '', '', '/app/screed-account'),
                new MenuItem('مراكز التكلفه', '', '', ''),
                new MenuItem('الصناديق', '', '', '/app/boxs-account'),
                new MenuItem('البنوك', '', '', '/app/banks'),
                new MenuItem('الارصده الاحتياطيه', '', '', '/app/rased-open'),
                new MenuItem('الموازنه التقديريه', '', '', '/app/elevated-balance')


            ]),
            new MenuItem(this.l('العمليات'), '', '', '', [
                new MenuItem(this.l('القيود اليوميه'), '', '', '/app/operating-toddays'),
                new MenuItem(this.l('  طريقه البحث '), '', '', '/app/sersh-const-dayes'),
                new MenuItem(this.l('   حافظه الصرف اليومي '), '', '', '/app/daily-extchange'),
                new MenuItem('   حافظه القبض اليومي ', '', '', '/app/daily-arrests'),
                new MenuItem('سندات الصرف', '', '', '/app/windsons'),
                new MenuItem('سندت القبض', '', '', '/app/tesions-ofarrests'),
                new MenuItem('الشيكات المستحقه', '', '', '/app/checks'),
                new MenuItem(' استحقاق الشيكات المتعدده', '', '', '/app/multi-checks'),
                new MenuItem(this.l(' توزيع تسديدات العملاء'), '', '', '/app/distribution-coustomer'),
                new MenuItem(' اشعارات دائنه ومدينه', '', '', '/app/crdible-nofications'),
                new MenuItem(' تسويه بنكيه', '', '', '/app/tribute-kn')
            ]),
            new MenuItem(this.l(' الترحيل'), '', '', '', [
                new MenuItem(this.l(' القيود اليوميه'), '', '', ''),
                new MenuItem(this.l('السندات النقديه'), '', '', '/app/migration-bonds'),
                new MenuItem('السندات الشيكيه', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('الشيكات المستحقه', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('اوامر التوريد المخزنيه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('مردودات  اوامر التوريد', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem(' اوامر الصرف المخزنه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('الشيكات المستحقه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   تسويه المخزون', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المشتريات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المشترياترالفوريه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem(' مردودات المشتريات الفوريه ', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المبيعات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   مردودات المبيعات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('     مردودات  سنوات  سابقه     ', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('دليل الحسابات'), '', '', ''),
                new MenuItem('دليل مراكز التكلفه', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('الارصده الافتتاحيه', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('الموازنه التقديريه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
        ]),
        new MenuItem(this.l('المبيعات'), '', 'business', '', [
            new MenuItem(this.l('تهيئة النظام'), '', '', '', [
                new MenuItem('المتغيرات', '', '', '/app/options'),
                new MenuItem('  انواع العملاء', '', '', '/app/customer-types'),
                new MenuItem(' الفترات المحاسبه ', '', '', '/app/fatrat-accunt'),
                new MenuItem('  انواع الفيز ', '', '', '/app/type-fiza'),
                new MenuItem('  بيانات العملات ', '', '', '/app/data-many'),
                new MenuItem('مجموعه الحسابات', '', '', '/app/set-account'),
                new MenuItem('  مجموعه مراكز التكلفه', '', '', '/app/center-cost-type'),
                new MenuItem(' انواع  القيود اليوميه', '', '', '/app/const-type'),
                new MenuItem('  الحسابات الوسيطه', '', '', '/app/account-madial'),
                     ]),
            new MenuItem(this.l('المدخلات '), '', '', '', [
                new MenuItem(this.l(' بيانات المناطق التجاريه'), '', '', '/app/data-area'),
                new MenuItem('  بيانات المحصلين', '', '', '/app/data-calege'),
                new MenuItem('بيانات المندوبين', '', '', '/app/data-delegates'),
                new MenuItem('بيانات العملاء', '', '', '/app/data-customer'),
            ]),
            new MenuItem(this.l('العمليات'), '', '', '', [
                new MenuItem(this.l(' اقساط العام الماضي '), '', '', '/app/premiums-lastyears'),
                new MenuItem(this.l('   شاشه عروض الاسعار '), '', '', '/app/showrooms'),
                new MenuItem(this.l('     طلبات العملاء '), '', '', '/app/customer-requests'),
                new MenuItem('     فواتير المبيعات ', '', '', '/app-sales-bills'),
                new MenuItem(' امر صرف فاتوره المبيعات', '', '', '/app/order-sales'),
                new MenuItem('فاتوره المبيعات المردوده ', '', '', '/app/sales-yields'),
                new MenuItem(' الاصناف', '', '', '/app/catagory'),
                new MenuItem('  مردودات السنوات السابقه ', '', '', '/app/yield-lastyears'),
                new MenuItem(this.l(' توزيع تسديدات العملاء'), '', '', '/app/distribution-coustomer'),
                new MenuItem(' اشعارات دائنه ومدينه', '', '', '/app/crdible-nofications'),
                new MenuItem(' تسويه بنكيه', '', '', '/app/tribute-kn')
            ]),
            new MenuItem(this.l(' الترحيل'), '', '', '', [
                new MenuItem(this.l(' القيود اليوميه'), '', '', ''),
                new MenuItem(this.l('السندات النقديه'), '', '', '/app/migration-bonds'),
                new MenuItem('السندات الشيكيه', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('الشيكات المستحقه', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('اوامر التوريد المخزنيه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('مردودات  اوامر التوريد', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem(' اوامر الصرف المخزنه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('الشيكات المستحقه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   تسويه المخزون', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المشتريات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المشترياترالفوريه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem(' مردودات المشتريات الفوريه ', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   فواتير المبيعات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('   مردودات المبيعات', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl'),
                new MenuItem('     مردودات  سنوات  سابقه     ', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('دليل الحسابات'), '', '', ''),
                new MenuItem('دليل مراكز التكلفه', '', '', 'https://aspnetboilerplate.com/Templates?ref=abptmpl'),
                new MenuItem('الارصده الافتتاحيه', '', '', 'https://aspnetboilerplate.com/Samples?ref=abptmpl'),
                new MenuItem('الموازنه التقديريه', '', '', 'https://aspnetboilerplate.com/Pages/Documents?ref=abptmpl')
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
