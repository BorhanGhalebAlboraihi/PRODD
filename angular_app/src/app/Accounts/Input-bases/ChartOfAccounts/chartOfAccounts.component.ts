import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
    PagedListingComponentBase,
    PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
    ChartOfAccountsServiceProxy,
    ChartOfAccountsDto,
    PagedResultDtoOfChartOfAccountsDto
} from '@shared/service-proxies/service-proxies';
import { CreateChartOfAccountsDialogComponent } from './create-chartOfAccounts/create-chartOfAccounts-dialog.component';
import { EditChartOfAccountsDialogComponent } from './edit-chartOfAccounts/edit-chartOfAccounts-dialog.component';

class PagedChartOfAccountssRequestDto extends PagedRequestDto {
    keyword: string;
}

@Component({
    templateUrl: './chartOfAccounts.component.html',
    animations: [appModuleAnimation()],
    styles: [
        `
          mat-form-field {
            padding: 10px;
          }
        `
    ]
})
export class ChartOfAccountssComponent extends PagedListingComponentBase<ChartOfAccountsDto> {
    chartOfAccountss: ChartOfAccountsDto[] = [];

    keyword = '';
  


    constructor(
        injector: Injector,
        private _chartOfAccountssService: ChartOfAccountsServiceProxy,
        private _dialog: MatDialog
    ) {
        super(injector);

      
    }

    
    list(
        request: PagedChartOfAccountssRequestDto,
        pageNumber: number,
        finishedCallback: Function
    ): void {

        request.keyword = this.keyword;

        this._chartOfAccountssService
            .getAll(request.keyword, request.skipCount, request.maxResultCount)
            .pipe(
                finalize(() => {
                    finishedCallback();
                })
            )
            .subscribe((result: PagedResultDtoOfChartOfAccountsDto) => {
                this.chartOfAccountss = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    delete(chartOfAccounts: ChartOfAccountsDto): void {
        abp.message.confirm(
            this.l('ChartOfAccountsDeleteWarningMessage', chartOfAccounts.accountName),
            (result: boolean) => {
                if (result) {
                    this._chartOfAccountssService
                        .delete(chartOfAccounts.id)
                        .pipe(
                            finalize(() => {
                                abp.notify.success(this.l('SuccessfullyDeleted'));
                                this.refresh();
                            })
                        )
                        .subscribe(() => { });
                }
            }
        );
    }

    createChartOfAccounts(): void {
        this.showCreateOrEditChartOfAccountsDialog();
    }

    editChartOfAccounts(chartOfAccounts: ChartOfAccountsDto): void {
        this.showCreateOrEditChartOfAccountsDialog(chartOfAccounts.id);
    }
    

    showCreateOrEditChartOfAccountsDialog(id?: number): void {
        let createOrEditChartOfAccountsDialog;
        if (id === undefined || id <= 0) {
            createOrEditChartOfAccountsDialog = this._dialog.open(CreateChartOfAccountsDialogComponent);
        } else {
            createOrEditChartOfAccountsDialog = this._dialog.open(EditChartOfAccountsDialogComponent, {
                data: id
            });
        }

        createOrEditChartOfAccountsDialog.afterClosed().subscribe(result => {
            if (result) {
                this.refresh();
            }
        });
    }
     
}
