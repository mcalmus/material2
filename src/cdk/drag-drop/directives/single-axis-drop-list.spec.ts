import {ComponentFixture, fakeAsync, flush} from '@angular/core/testing';
import {dispatchMouseEvent} from '@angular/cdk/testing/private';
import {_supportsShadowDom} from '@angular/cdk/platform';
import {createComponent, startDraggingViaMouse} from './test-utils.spec';
import {
  DraggableInDropZone,
  DraggableInScrollableVerticalDropZone,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  defineCommonDropListTests,
  getHorizontalFixtures,
} from './drop-list-shared.spec';

describe('Single-axis drop list', () => {
  const {DraggableInHorizontalDropZone} = getHorizontalFixtures('horizontal');

  defineCommonDropListTests({
    verticalListOrientation: 'vertical',
    horizontalListOrientation: 'horizontal',
    getElementIndexByPosition,
    getElementSibligsByPosition,
    assertUpwardSorting,
    assertDownwardSorting,
  });

  it('should lay out the elements correctly, when swapping down with a taller element', fakeAsync(() => {
    const fixture = createComponent(DraggableInDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);
    const {top, left} = items[0].getBoundingClientRect();

    fixture.componentInstance.items[0].height = ITEM_HEIGHT * 2;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    startDraggingViaMouse(fixture, items[0], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[1];
    const targetRect = target.getBoundingClientRect();

    // Add a few pixels to the top offset so we get some overlap.
    dispatchMouseEvent(document, 'mousemove', targetRect.left, targetRect.top + 5);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(0px, ${ITEM_HEIGHT}px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(0px, ${-ITEM_HEIGHT * 2}px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should lay out the elements correctly, when swapping up with a taller element', fakeAsync(() => {
    const fixture = createComponent(DraggableInDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);
    const {top, left} = items[1].getBoundingClientRect();

    fixture.componentInstance.items[1].height = ITEM_HEIGHT * 2;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    startDraggingViaMouse(fixture, items[1], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[0];
    const targetRect = target.getBoundingClientRect();

    // Add a few pixels to the top offset so we get some overlap.
    dispatchMouseEvent(document, 'mousemove', targetRect.left, targetRect.bottom - 5);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(0px, ${-ITEM_HEIGHT}px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(0px, ${ITEM_HEIGHT * 2}px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should lay out elements correctly, when swapping an item with margin', fakeAsync(() => {
    const fixture = createComponent(DraggableInDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);
    const {top, left} = items[0].getBoundingClientRect();

    fixture.componentInstance.items[0].margin = 12;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    startDraggingViaMouse(fixture, items[0], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[1];
    const targetRect = target.getBoundingClientRect();

    // Add a few pixels to the top offset so we get some overlap.
    dispatchMouseEvent(document, 'mousemove', targetRect.left, targetRect.top + 5);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(0px, ${ITEM_HEIGHT + 12}px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(0px, ${-ITEM_HEIGHT - 12}px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should lay out the elements correctly, when swapping to the right with a wider element', fakeAsync(() => {
    const fixture = createComponent(DraggableInHorizontalDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);

    fixture.componentInstance.items[0].width = ITEM_WIDTH * 2;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    const {top, left} = items[0].getBoundingClientRect();
    startDraggingViaMouse(fixture, items[0], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[1];
    const targetRect = target.getBoundingClientRect();

    dispatchMouseEvent(document, 'mousemove', targetRect.right - 5, targetRect.top);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(${ITEM_WIDTH}px, 0px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(${-ITEM_WIDTH * 2}px, 0px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should lay out the elements correctly, when swapping left with a wider element', fakeAsync(() => {
    const fixture = createComponent(DraggableInHorizontalDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);
    const {top, left} = items[1].getBoundingClientRect();

    fixture.componentInstance.items[1].width = ITEM_WIDTH * 2;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    startDraggingViaMouse(fixture, items[1], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[0];
    const targetRect = target.getBoundingClientRect();

    dispatchMouseEvent(document, 'mousemove', targetRect.right - 5, targetRect.top);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(${-ITEM_WIDTH}px, 0px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(${ITEM_WIDTH * 2}px, 0px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should clear the `transform` value from siblings when item is dropped', fakeAsync(() => {
    const fixture = createComponent(DraggableInDropZone);
    fixture.detectChanges();

    const dragItems = fixture.componentInstance.dragItems;
    const firstItem = dragItems.first;
    const thirdItem = dragItems.toArray()[2].element.nativeElement;
    const thirdItemRect = thirdItem.getBoundingClientRect();

    startDraggingViaMouse(fixture, firstItem.element.nativeElement);

    dispatchMouseEvent(document, 'mousemove', thirdItemRect.left + 1, thirdItemRect.top + 1);
    fixture.detectChanges();

    expect(thirdItem.style.transform).toBeTruthy();

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
    fixture.detectChanges();

    expect(thirdItem.style.transform).toBeFalsy();
  }));

  it('should lay out elements correctly, when horizontally swapping an item with margin', fakeAsync(() => {
    const fixture = createComponent(DraggableInHorizontalDropZone);
    fixture.detectChanges();

    const items = fixture.componentInstance.dragItems.map(i => i.element.nativeElement);
    const {top, left} = items[0].getBoundingClientRect();

    fixture.componentInstance.items[0].margin = 12;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();

    startDraggingViaMouse(fixture, items[0], left, top);

    const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;
    const target = items[1];
    const targetRect = target.getBoundingClientRect();

    dispatchMouseEvent(document, 'mousemove', targetRect.right - 5, targetRect.top);
    fixture.detectChanges();

    expect(placeholder.style.transform).toBe(`translate3d(${ITEM_WIDTH + 12}px, 0px, 0px)`);
    expect(target.style.transform).toBe(`translate3d(${-ITEM_WIDTH - 12}px, 0px, 0px)`);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
  }));

  it('should preserve the original `transform` of items in the list', fakeAsync(() => {
    const fixture = createComponent(DraggableInScrollableVerticalDropZone);
    fixture.detectChanges();
    const items = fixture.componentInstance.dragItems.map(item => item.element.nativeElement);
    items.forEach(element => (element.style.transform = 'rotate(180deg)'));
    const thirdItemRect = items[2].getBoundingClientRect();
    const hasInitialTransform = (element: HTMLElement) =>
      element.style.transform.indexOf('rotate(180deg)') > -1;

    startDraggingViaMouse(fixture, items[0]);
    fixture.detectChanges();
    const preview = document.querySelector('.cdk-drag-preview') as HTMLElement;
    const placeholder = fixture.nativeElement.querySelector('.cdk-drag-placeholder');

    expect(items.every(hasInitialTransform))
      .withContext('Expected items to preserve transform when dragging starts.')
      .toBe(true);
    expect(hasInitialTransform(preview))
      .withContext('Expected preview to preserve transform when dragging starts.')
      .toBe(true);
    expect(hasInitialTransform(placeholder))
      .withContext('Expected placeholder to preserve transform when dragging starts.')
      .toBe(true);

    dispatchMouseEvent(document, 'mousemove', thirdItemRect.left + 1, thirdItemRect.top + 1);
    fixture.detectChanges();
    expect(items.every(hasInitialTransform))
      .withContext('Expected items to preserve transform while dragging.')
      .toBe(true);
    expect(hasInitialTransform(preview))
      .withContext('Expected preview to preserve transform while dragging.')
      .toBe(true);
    expect(hasInitialTransform(placeholder))
      .withContext('Expected placeholder to preserve transform while dragging.')
      .toBe(true);

    dispatchMouseEvent(document, 'mouseup');
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(items.every(hasInitialTransform))
      .withContext('Expected items to preserve transform when dragging stops.')
      .toBe(true);
    expect(hasInitialTransform(preview))
      .withContext('Expected preview to preserve transform when dragging stops.')
      .toBe(true);
    expect(hasInitialTransform(placeholder))
      .withContext('Expected placeholder to preserve transform when dragging stops.')
      .toBe(true);
  }));
});

function getElementIndexByPosition(element: Element, direction: 'top' | 'left') {
  return getElementSibligsByPosition(element, direction).indexOf(element);
}

function getElementSibligsByPosition(element: Element, direction: 'top' | 'left') {
  return element.parentElement
    ? Array.from(element.parentElement.children).sort((a, b) => {
        return a.getBoundingClientRect()[direction] - b.getBoundingClientRect()[direction];
      })
    : [];
}

function assertDownwardSorting(fixture: ComponentFixture<any>, items: Element[]) {
  const draggedItem = items[0];
  const {top, left} = draggedItem.getBoundingClientRect();

  startDraggingViaMouse(fixture, draggedItem, left, top);

  const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;

  // Drag over each item one-by-one going downwards.
  for (let i = 0; i < items.length; i++) {
    const elementRect = items[i].getBoundingClientRect();

    // Add a few pixels to the top offset so we get some overlap.
    dispatchMouseEvent(document, 'mousemove', elementRect.left, elementRect.top + 5);
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(getElementIndexByPosition(placeholder, 'top')).toBe(i);
  }

  dispatchMouseEvent(document, 'mouseup');
  fixture.changeDetectorRef.markForCheck();
  fixture.detectChanges();
  flush();
}

function assertUpwardSorting(fixture: ComponentFixture<any>, items: Element[]) {
  const draggedItem = items[items.length - 1];
  const {top, left} = draggedItem.getBoundingClientRect();

  startDraggingViaMouse(fixture, draggedItem, left, top);

  const placeholder = document.querySelector('.cdk-drag-placeholder')! as HTMLElement;

  // Drag over each item one-by-one going upwards.
  for (let i = items.length - 1; i > -1; i--) {
    const elementRect = items[i].getBoundingClientRect();

    // Remove a few pixels from the bottom offset so we get some overlap.
    dispatchMouseEvent(document, 'mousemove', elementRect.left, elementRect.bottom - 5);
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(getElementIndexByPosition(placeholder, 'top')).toBe(i);
  }

  dispatchMouseEvent(document, 'mouseup');
  fixture.changeDetectorRef.markForCheck();
  fixture.detectChanges();
  flush();
}
