/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NewRoleComponent } from './new-role.component';

let component: NewRoleComponent;
let fixture: ComponentFixture<NewRoleComponent>;

describe('new-role component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NewRoleComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NewRoleComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});