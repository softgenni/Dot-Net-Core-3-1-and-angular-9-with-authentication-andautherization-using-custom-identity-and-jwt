﻿/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BreadcrumComponent } from './breadcrum.component';

let component: BreadcrumComponent;
let fixture: ComponentFixture<BreadcrumComponent>;

describe('breadcrum component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BreadcrumComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BreadcrumComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});