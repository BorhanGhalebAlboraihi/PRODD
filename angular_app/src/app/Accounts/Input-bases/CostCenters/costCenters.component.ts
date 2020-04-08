import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
    PagedListingComponentBase,
    PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
    CostCentersServiceProxy,
    CostCentersDto,
    PagedResultDtoOfCostCentersDto
} from '@shared/service-proxies/service-proxies';
import { CreatecostCentersDialogComponent } from './create-costCenters/create-costCenters-dialog.component';
import { EditcostCentersDialogComponent } from './edit-costCenters/edit-costCenters-dialog.component';

class PagedCostCenterssRequestDto extends PagedRequestDto {
    keyword: string;
}

@Component({
    templateUrl: './costCenters.component.html',
    animations: [appModuleAnimation()],
    styles: [
        `
          mat-form-field {
            padding: 10px;
          }
        `
    ]
})
export class CostCenterssComponent extends PagedListingComponentBase<CostCentersDto> {
    costCenterss: CostCentersDto[] = [];

    keyword = '';
  


    constructor(
        injector: Injector,
        private _costCenterssService: CostCentersServiceProxy,
        private _dialog: MatDialog
    ) {
        super(injector);

      
    }

    
    list(
        request: PagedCostCenterssRequestDto,
        pageNumber: number,
        finishedCallback: Function
    ): void {

        request.keyword = this.keyword;

        this._costCenterssService
            .getAll(request.keyword, request.skipCount, request.maxResultCount)
            .pipe(
                finalize(() => {
                    finishedCallback();
                })
            )
            .subscribe((result: PagedResultDtoOfCostCentersDto) => {
                this.costCenterss = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    delete(costCenters: CostCentersDto): void {
        abp.message.confirm(
            this.l('CostCentersDeleteWarningMessage', costCenters.costCentersName),
            (result: boolean) => {
                if (result) {
                    this._costCenterssService
                        .delete(costCenters.id)
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

    createCostCenters(): void {
        this.showCreateOrEditCostCentersDialog();
    }

    editCostCenters(costCenters: CostCentersDto): void {
        this.showCreateOrEditCostCentersDialog(costCenters.id);
    }
    

    showCreateOrEditCostCentersDialog(id?: number): void {
        let createOrEditCostCentersDialog;
        if (id === undefined || id <= 0) {
            createOrEditCostCentersDialog = this._dialog.open(CreatecostCentersDialogComponent);
        } else {
            createOrEditCostCentersDialog = this._dialog.open(EditcostCentersDialogComponent, {
                data: id
            });
        }

        createOrEditCostCentersDialog.afterClosed().subscribe(result => {
            if (result) {
                this.refresh();
            }
        });
    }
     
}
