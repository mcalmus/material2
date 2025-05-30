## API Report File for "@angular/material_paginator_testing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as _angular_cdk_testing from '@angular/cdk/testing';
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatFormFieldControlHarnessBase } from '@angular/material/form-field/testing/control';
import { MatFormFieldControlHarnessFilters } from '@angular/material/form-field/testing/control';
import { MatOptgroupHarness } from '@angular/material/core/testing';
import { MatOptionHarness } from '@angular/material/core/testing';
import { OptgroupHarnessFilters } from '@angular/material/core/testing';
import { OptionHarnessFilters } from '@angular/material/core/testing';

// @public
export class MatPaginatorHarness extends ComponentHarness {
    getPageSize(): Promise<number>;
    getRangeLabel(): Promise<string>;
    goToFirstPage(): Promise<void>;
    goToLastPage(): Promise<void>;
    goToNextPage(): Promise<void>;
    goToPreviousPage(): Promise<void>;
    static hostSelector: string;
    isNextPageDisabled(): Promise<boolean>;
    // (undocumented)
    isPreviousPageDisabled(): Promise<boolean>;
    // (undocumented)
    _rangeLabel: () => Promise<_angular_cdk_testing.TestElement>;
    // (undocumented)
    _select: () => Promise<MatSelectHarness | null>;
    setPageSize(size: number): Promise<void>;
    static with<T extends MatPaginatorHarness>(this: ComponentHarnessConstructor<T>, options?: PaginatorHarnessFilters): HarnessPredicate<T>;
}

// @public
export interface PaginatorHarnessFilters extends BaseHarnessFilters {
}

// (No @packageDocumentation comment for this package)

```
