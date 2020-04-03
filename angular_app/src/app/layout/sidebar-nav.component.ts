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
        new MenuItem('Employees', 'Pages.Users', 'people', '/app/employees'),
        new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
        new MenuItem(this.l('إدرارة النظام'), '', 'business', '', [
            new MenuItem(this.l('تهيئة النظام'), '', '', '', [
                new MenuItem(this.l('الخيارات العامة'), '', '', '/app/global-options'),
                new MenuItem(this.l(' توقيعات التقارير'), '', '', '/app/reports-signatures'),
                new MenuItem(this.l(' التنبيهات'), '', '', '/app/notifcations')
            ]),
            new MenuItem(this.l('الفروع'), '', '', '', [
                new MenuItem(this.l('الفرع الحالي'), '', '', '/app/current-branch-data'),
                new MenuItem('الفروع المتصلة بهذا الفرع', '', '', '/app/linked-branch')
                ]),
            new MenuItem(this.l('الإقفالات'), '', '', '', [
                new MenuItem(this.l('الإقفال الشهري'), '', '', '/app/monthly-locks'),
                    new MenuItem(this.l('إقفالات الأرباح والخسائر'), '', '', '/app/lesbian-losses-locks'),
                    new MenuItem(this.l('فتح سنة جديدة'), '', '', '/app/open-new-year'),
                    new MenuItem(this.l('إقفالات المخازن'), '', '', '/app/store-locks'),
                    new MenuItem(this.l('إلغاء الإقفال السنوي'), '', '', '/app/cancel-annual-locks'),
                new MenuItem(this.l('إقاف الفترات'), '', '', '/app/stop-periods')
            ])

        ]),
        new MenuItem(this.l('المخازن'), '', 'business', '', [
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
                new MenuItem('الجرد الشهــري', '', '', ''),
                new MenuItem('تقرير زائد وناقص الجرد', '', '', '/app/jaard-reports')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('تقرير المخزون'), '', '', '/app/stores-reports'),
                new MenuItem(this.l('حركة المخزون'), '', '', '/app/inventory-movement'),
                new MenuItem(this.l(' معدل الدوران'), '', '', '/app/rotation-rate'),
                new MenuItem(this.l(' تقارير التوريد المخزني'), '', '', '/app/supply-reports')
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
                new MenuItem(this.l(' القيود اليوميه'), '', '', '/app/migration-const-dayes'),
                new MenuItem(this.l('السندات النقديه'), '', '', '/app/migration-bonds'),
                new MenuItem('السندات الشيكيه', '', '', '/app/check-bonds'),
                new MenuItem('الشيكات المستحقه', '', '', '/app/due-checks'),
                new MenuItem('اوامر التوريد المخزنيه', '', '', '/app/stor-supply-orders'),
                new MenuItem('مردودات  اوامر التوريد', '', '', '/app/returns-exchang-orders'),
                new MenuItem(' اوامر الصرف المخزنه', '', '', '/app/stord-exchang-orders'),
                new MenuItem('   تسويه المخزون', '', '', '/app/stor-adjustment'),
                new MenuItem('   فواتير المشتريات', '', '', '/app/purchase-invoices'),
                new MenuItem('   فواتير المشتريات الفوريه', '', '', '/app/immediate-billing-purchases'),
                new MenuItem('   مردودات المشتريات', '', '', '/app/returns-purchases'),
                new MenuItem(' مردودات المشتريات الفوريه ', '', '', '/app/immediate-returns'),
                new MenuItem('   فواتير المبيعات', '', '', '/app/sales-invoice'),
                new MenuItem('   مردودات المبيعات', '', '', '/app/sales-returns'),
                new MenuItem('     مردودات  سنوات  سابقه     ', '', '', '/app/returns-last-years')
            ]),
            new MenuItem(this.l(' التقارير'), '', '', '', [
                new MenuItem(this.l('دليل الحسابات'), '', '', '/app/screedaccounting'),
                new MenuItem('دليل مراكز التكلفه', '', '', '/app/screed-centercost'),
                new MenuItem('الارصده الافتتاحيه', '', '', '/app/rased-openings'),
                new MenuItem('الموازنه التقديريه', '', '', '/app/elevated-balance-report'),

                new MenuItem(' بدايه السندات', '', '', 'fjhsdgsas'),
 
                new MenuItem('  القيود اليوميه', '', '', '/app/const-today-bonds'),
                new MenuItem('   الحافظه اليوميه', '', '', '/app/folder-today-bonds'),
                new MenuItem('  تقارير السندات النقديه', '', '', '/app/bonds-nsged-reports'),
                new MenuItem('  تقارير السندات البنكيه ', '', '', '/app/bonds-banks'),
                new MenuItem(' الشيكات المستحقه', '', '', '/app/accompt-chacks'),
                new MenuItem('    حركه سندات القبض', '', '', '/app/move-bonds-catch'),
                new MenuItem('   اجمالي سندات قبض وصرف المبيعات  ', '', '', '/app/total-bondas-catch'),
                new MenuItem('   اوامر التوريد  ', '', '', '/app/orders-resors'),
                new MenuItem('      مردودات اوامر التوريد', '', '', '/app/returns-orders-resors'),
                new MenuItem('  اوامر الصرف المخزنيه', '', '', '/app/orders-pure-storing'),
                new MenuItem('   فواتير المشتريات ', '', '', '/app/bonds-invoice-purchases'),
                new MenuItem('  مردودات المشتريات', '', '', '/app/bonds-returns-purchases'),
                new MenuItem('  فواتير المبيعات', '', '', '/app/bonds-invoice-sales'),
                new MenuItem('   مردودات المبيعات', '', '', '/app/bonds-returns-sales'),
                new MenuItem('    مردودات سنوات سابقه', '', '', '/app/bonds-returne-lastyears'),
                new MenuItem(' نهايه السندات', '', '', 'jgdsfkls'),

                 new MenuItem('  الاشعارات', '', '', '/app/nofatgation-reports'),
                 new MenuItem(' السندات المفقوده', '', '', 'kkhjg'),
                new MenuItem('  توزيع تسديدات العملاء', '', '', '/app/customer-remburse-report'),
                new MenuItem('   كشوفات الحسابات', '', '', '/app/account-statenents'),
                new MenuItem('   ارصده حركه الحسابات ', '', '', '/app/moniter-move-account'),
                new MenuItem('  حركه الصناديق', '', '', '/app/move-boxs'),
                new MenuItem(' حركه البنوك', '', '', '/app/move-checks'),
                new MenuItem('     احصائيات ارصده الحسابات ', '', '', '/app/statistics-balance-account'),
                new MenuItem('   مراكز التكلفه', '', '', '/app/reports-screed-costs'),
                new MenuItem('     اليوميه العامه ', '', '', '/app/general-today'),
                new MenuItem('     موازين المراجعه ', '', '', '/app/scales-returns'),
                new MenuItem('    الانحراف الميزاني', '', '', '/app/variation-libray'),
                new MenuItem('    الارباح والخسائر ', '', '', '/app/profits-losses'),
                new MenuItem('      الميزانيه العموميه ', '', '', '/app/libary-generalness') 
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
                new MenuItem('     فواتير المبيعات ', '', '', '/app/sales-bills'),
                new MenuItem(' امر صرف فاتوره المبيعات', '', '', '/app/order-sales'),
                new MenuItem('فاتوره المبيعات المردوده ', '', '', '/app/sales-yields'),
                new MenuItem(' الاصناف', '', '', '/app/catagory'),
                new MenuItem('  مردودات السنوات السابقه ', '', '', '/app/yield-lastyears'),
               
            ]),
           
            new MenuItem(this.l('  التقارير العملاء'), '', '', '', [
               
                 new MenuItem(this.l( 'تقارير بيانات العملاء'), '', '', '/app/customer-data-reports'),
                 new MenuItem(this.l( 'تقارير  عروض الاسعار '), '', '', '/app/balsallo-reports'),
                 new MenuItem(this.l( 'تقارير   طلبات العملاء '), '', '', '/app/report-request-customer'),
                 new MenuItem(this.l( '    اعمار الديون '), '', '', '/app/debts-years'),
                 new MenuItem(this.l( '     تقارير ارصده العملاء '), '', '', '/app/report-rased-customers'),
                 new MenuItem(this.l( '       تقارير الاقساط '), '', '', '/app/premium-reports'),
               
                 
                ]),
                new MenuItem(this.l('   فواتير المبيعات'), '', '', '', [
               
                    new MenuItem(this.l( 'تقارير  فواتير المبيعات'), '', '', '/app/sales-invo-reports'),
                    new MenuItem(this.l( '   هامش لربح الكلي '), '', '', '/app/gross-profit-margin'),
          
                   ]),
        ]),


        new MenuItem(this.l('المشتريات'), '', 'business', '', [
            new MenuItem(this.l('تهيئة النظام'), '', '', '', [
                new MenuItem(this.l('الخيارات'), '', '', '/app/purchases-options')
            ]),
            new MenuItem(this.l('المدخلات الأساسية'), '', '', '', [
                new MenuItem(this.l('بيانات الموردين'), '', '', '/app/data-suppliers'),
                new MenuItem('بيانات التوريد', '', '', '/app/supply-data')
                ]),
            new MenuItem(this.l('العمليات'), '', '', '', [
                new MenuItem(this.l('طلبات الشراء'), '', '', '/app/buying-requests'),
                new MenuItem(this.l('أوامر الشراء'), '', '', '/app/buying-orders'),
                new MenuItem(this.l('  فواتير مشتروات فورية '), '', '', '/app/instant-buying-bills'),
                new MenuItem(this.l(' فواتير المشتروات'), '', '', '/app/buying-bills'),
                new MenuItem(this.l('  إذن التوريد'), '', '', '/app/order-supply'),
                new MenuItem(this.l('تكلفة المشروات الخارجية'), '', '', '/app/cost-external-buyers'),
                new MenuItem(this.l('تكلفة المشروات المحلية'), '', '', '/app/cost-local-buyers'),
                new MenuItem(this.l('فواتير مردود المشتروات'), '', '', '/app/payment-bills-purchased')
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
