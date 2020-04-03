import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
    PagedListingComponentBase,
    PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
    EmployeeServiceProxy,
    EmployeeDto,
    PagedResultDtoOfEmployeeDto
} from '@shared/service-proxies/service-proxies';
import { CreateEmployeeDialogComponent } from './create-employee/create-employee-dialog.component';
import { EditEmployeeDialogComponent } from './edit-employee/edit-employee-dialog.component';

class PagedEmployeesRequestDto extends PagedRequestDto {
    keyword: string;
}

@Component({
    templateUrl: './employees.component.html',
    animations: [appModuleAnimation()],
    styles: [
        `
          mat-form-field {
            padding: 10px;
          }
        `
    ]
})
export class EmployeesComponent extends PagedListingComponentBase<EmployeeDto> {
    employees: EmployeeDto[] = [];

    keyword = '';

    constructor(
        injector: Injector,
        private _employeesService: EmployeeServiceProxy,
        private _dialog: MatDialog
    ) {
        super(injector);
    }

    list(
        request: PagedEmployeesRequestDto,
        pageNumber: number,
        finishedCallback: Function
    ): void {

        request.keyword = this.keyword;

        this._employeesService
            .getAll(request.keyword, request.skipCount, request.maxResultCount)
            .pipe(
                finalize(() => {
                    finishedCallback();
                })
            )
            .subscribe((result: PagedResultDtoOfEmployeeDto) => {
                this.employees = result.items;
                this.showPaging(result, pageNumber);
            });
    }

    delete(employee: EmployeeDto): void {
        abp.message.confirm(
            this.l('EmployeeDeleteWarningMessage', employee.name),
            (result: boolean) => {
                if (result) {
                    this._employeesService
                        .delete(employee.id)
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

    createEmployee(): void {
        this.showCreateOrEditEmployeeDialog();
    }

    editEmployee(employee: EmployeeDto): void {
        this.showCreateOrEditEmployeeDialog(employee.id);
    }

    showCreateOrEditEmployeeDialog(id?: number): void {
        let createOrEditEmployeeDialog;
        if (id === undefined || id <= 0) {
            createOrEditEmployeeDialog = this._dialog.open(CreateEmployeeDialogComponent);
        } else {
            createOrEditEmployeeDialog = this._dialog.open(EditEmployeeDialogComponent, {
                data: id
            });
        }

        createOrEditEmployeeDialog.afterClosed().subscribe(result => {
            if (result) {
                this.refresh();
            }
        });
    }
}
