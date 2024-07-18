import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
} from 'react-admin';

export const PossessionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nom" />
            <TextField source="type" />
            <TextField source="valeur_comptable" />
        </Datagrid>
    </List>
);
export default PossessionList;