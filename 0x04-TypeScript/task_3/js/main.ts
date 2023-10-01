/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// @ts-ignore
const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    ...row,
    age: 23
}

// @ts-ignore
CRUD.updateRow(newRowId, updatedRow);
// @ts-ignore
CRUD.deleteRow(newRowId);