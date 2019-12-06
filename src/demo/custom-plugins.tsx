import React from 'react';
import {IApiClassImportProps} from '../swagger/components';
import {defaultPlugin, ISwaggerPlugin} from '../swagger/common/default-plugin';

export const customPlugins: ISwaggerPlugin = {
    ...defaultPlugin,
    apiClassImport: (Component:React.FC<any>, props: IApiClassImportProps) => {
        const newProps:IApiClassImportProps = {
            ...props,
            imports:[...props.imports]
        }
        return <>
            <Component {...newProps}/>
        </>;
    }
};

