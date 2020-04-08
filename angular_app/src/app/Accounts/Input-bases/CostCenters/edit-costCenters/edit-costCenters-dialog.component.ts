import { Component, Injector, Inject, OnInit, Optional } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatCheckboxChange
} from "@angular/material";
import { finalize } from "rxjs/operators";
import * as _ from "lodash";
import { AppComponentBase } from "@shared/app-component-base";
import {
  CostCentersServiceProxy,
  CostCentersDto,
  PermissionDto
  
  
} from "@shared/service-proxies/service-proxies";
import { MatAutocompleteModule } from "@angular/material";
import { Subject } from "rxjs";
@Component({
  templateUrl: 'edit-costCenters-dialog.component.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
      mat-checkbox {
        padding-bottom: 5px;
      }
    `
  ]
})
export class EditcostCentersDialogComponent extends AppComponentBase
  implements OnInit {
  public AllGroup: any[];
  public AllStat: any[];
  public AllType: any[];
  public AllRank: any[];
  public AllCurnsy: any[];
  public getCenter: any;
  public Costcenter: any[] = [];
  SelectGroup;
  SelectState;
  SelectType;
  SelectRank;
  SelectCurnys;

  saving = false;
  CostCenters: CostCentersDto = new CostCentersDto();

  permissions: PermissionDto[] = [];
  grantedPermissionNames: string[] = [];
  checkedPermissionsMap: { [key: string]: boolean } = {};

  constructor(
    injector: Injector,
    private _CostCentersService: CostCentersServiceProxy,
    private _dialogRef: MatDialogRef<EditcostCentersDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private _id: number
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._CostCentersService
      .getCostCenterForEdit(this._id)
      .subscribe((result: CostCentersDto) => {
        this.CostCenters = result;
        this.AllGroups();
        this.AllStats();
        this.AllTypes();
        this.AllRanks();
       
       
      });
  }

  AllGroups() {
    this._CostCentersService.getAllCenterGroupes().subscribe(x => {
      this.AllGroup = x;
    });
  }
  

  

  AllStats() {
    this._CostCentersService.getAllCenterState().subscribe(x => {
      this.AllStat = x;
    });
  }
  AllTypes() {
    this._CostCentersService.getAllACenterType().subscribe(x => {
      this.AllType = x;
    });
  }
  AllRanks() {
    this._CostCentersService.getAllCenterRanks().subscribe(x => {
      this.AllRank = x;
    });
  }
 
  setInitialPermissionsStatus(): void {
    _.map(this.permissions, item => {
      this.checkedPermissionsMap[item.name] = this.isPermissionChecked(
        item.name
      );
    });
  }

  isPermissionChecked(permissionName: string): boolean {
    return _.includes(this.grantedPermissionNames, permissionName);
  }

  onPermissionChange(permission: PermissionDto, $event: MatCheckboxChange) {
    this.checkedPermissionsMap[permission.name] = $event.checked;
  }

  getCheckedPermissions(): string[] {
    const permissions: string[] = [];
    _.forEach(this.checkedPermissionsMap, function(value, key) {
      if (value) {
        permissions.push(key);
      }
    });
    return permissions;
  }

  educationLevelChangeAction() {
    this.CostCenters.centerGroupe = this.SelectGroup;
    this.CostCenters.centerState = this.SelectState;
    this.CostCenters.centerType = this.SelectType;
    this.CostCenters.centerRankName = this.SelectRank;
  }

  save(): void {
    this.saving = true;

    this._CostCentersService
      .update(this.CostCenters)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.notify.info(this.l("SavedSuccessfully"));
        this.close(true);
      });
  }

  close(result: any): void {
    this._dialogRef.close(result);
  }
}
