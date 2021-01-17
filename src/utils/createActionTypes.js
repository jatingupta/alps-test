import { each } from "lodash";

export const createActionTypes = (prefix, actionTypeList) => {
    const actionTypesObject = {};

    each(actionTypeList, (item) => {
        actionTypesObject[item] = `${prefix}/${item}`;
    });

    return actionTypesObject;
};