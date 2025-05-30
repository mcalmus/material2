## API Report File for "@angular/material_chips_testing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as _angular_cdk_testing from '@angular/cdk/testing';
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { TestKey } from '@angular/cdk/testing';

// @public (undocumented)
export interface ChipAvatarHarnessFilters extends BaseHarnessFilters {
}

// @public (undocumented)
export interface ChipEditInputHarnessFilters extends BaseHarnessFilters {
}

// @public (undocumented)
export interface ChipGridHarnessFilters extends BaseHarnessFilters {
    disabled?: boolean;
}

// @public (undocumented)
export interface ChipHarnessFilters extends BaseHarnessFilters {
    disabled?: boolean;
    text?: string | RegExp;
}

// @public (undocumented)
export interface ChipInputHarnessFilters extends BaseHarnessFilters {
    disabled?: boolean;
    placeholder?: string | RegExp;
    value?: string | RegExp;
}

// @public (undocumented)
export interface ChipListboxHarnessFilters extends BaseHarnessFilters {
    disabled?: boolean;
}

// @public (undocumented)
export interface ChipOptionHarnessFilters extends ChipHarnessFilters {
    selected?: boolean;
}

// @public (undocumented)
export interface ChipRemoveHarnessFilters extends BaseHarnessFilters {
}

// @public (undocumented)
export interface ChipRowHarnessFilters extends ChipHarnessFilters {
}

// @public (undocumented)
export interface ChipSetHarnessFilters extends BaseHarnessFilters {
}

// @public
export class MatChipAvatarHarness extends ComponentHarness {
    // (undocumented)
    static hostSelector: string;
    static with<T extends MatChipAvatarHarness>(this: ComponentHarnessConstructor<T>, options?: ChipAvatarHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipEditInputHarness extends ComponentHarness {
    // (undocumented)
    static hostSelector: string;
    setValue(value: string): Promise<void>;
    static with<T extends MatChipEditInputHarness>(this: ComponentHarnessConstructor<T>, options?: ChipEditInputHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipGridHarness extends ComponentHarness {
    getInput(filter?: ChipInputHarnessFilters): Promise<MatChipInputHarness | null>;
    getRows(filter?: ChipRowHarnessFilters): Promise<MatChipRowHarness[]>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isInvalid(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    static with<T extends MatChipGridHarness>(this: ComponentHarnessConstructor<T>, options?: ChipGridHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipHarness extends ContentContainerComponentHarness {
    getAvatar(filter?: ChipAvatarHarnessFilters): Promise<MatChipAvatarHarness | null>;
    getRemoveButton(filter?: ChipRemoveHarnessFilters): Promise<MatChipRemoveHarness>;
    getText(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    // (undocumented)
    protected _primaryAction: () => Promise<_angular_cdk_testing.TestElement>;
    remove(): Promise<void>;
    static with<T extends MatChipHarness>(this: ComponentHarnessConstructor<T>, options?: ChipHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipInputHarness extends ComponentHarness {
    blur(): Promise<void>;
    focus(): Promise<void>;
    getPlaceholder(): Promise<string>;
    getValue(): Promise<string>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    sendSeparatorKey(key: TestKey | string): Promise<void>;
    setValue(newValue: string): Promise<void>;
    static with<T extends MatChipInputHarness>(this: ComponentHarnessConstructor<T>, options?: ChipInputHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipListboxHarness extends ComponentHarness {
    getChips(filter?: ChipOptionHarnessFilters): Promise<MatChipOptionHarness[]>;
    getOrientation(): Promise<'horizontal' | 'vertical'>;
    // (undocumented)
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isMultiple(): Promise<boolean>;
    isRequired(): Promise<boolean>;
    selectChips(filter?: ChipOptionHarnessFilters): Promise<void>;
    static with<T extends MatChipListboxHarness>(this: ComponentHarnessConstructor<T>, options?: ChipListboxHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipOptionHarness extends MatChipHarness {
    deselect(): Promise<void>;
    // (undocumented)
    static hostSelector: string;
    isSelected(): Promise<boolean>;
    select(): Promise<void>;
    toggle(): Promise<void>;
    static with<T extends MatChipHarness>(this: ComponentHarnessConstructor<T>, options?: ChipOptionHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipRemoveHarness extends ComponentHarness {
    click(): Promise<void>;
    // (undocumented)
    static hostSelector: string;
    static with<T extends MatChipRemoveHarness>(this: ComponentHarnessConstructor<T>, options?: ChipRemoveHarnessFilters): HarnessPredicate<T>;
}

// @public
export class MatChipRowHarness extends MatChipHarness {
    finishEditing(): Promise<void>;
    getEditInput(filter?: ChipEditInputHarnessFilters): Promise<MatChipEditInputHarness>;
    // (undocumented)
    static hostSelector: string;
    isEditable(): Promise<boolean>;
    isEditing(): Promise<boolean>;
    startEditing(): Promise<void>;
}

// @public
export class MatChipSetHarness extends ComponentHarness {
    getChips(filter?: ChipHarnessFilters): Promise<MatChipHarness[]>;
    // (undocumented)
    static hostSelector: string;
    static with<T extends MatChipSetHarness>(this: ComponentHarnessConstructor<T>, options?: ChipSetHarnessFilters): HarnessPredicate<T>;
}

// (No @packageDocumentation comment for this package)

```
