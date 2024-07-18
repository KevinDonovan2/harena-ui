import {
    List,
    Datagrid,
    TextField
} from 'react-admin';

export const PatrimoineList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nom" />
            <TextField source="type" />
            <TextField source="valeur_comptable" />
        </Datagrid>
    </List>
);