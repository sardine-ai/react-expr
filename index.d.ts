import * as React from 'react';

export interface ReactExprProps {
    doc?: any;
    width?: string;
    height?: string;
    maxHeight?: string;
    autoSize?: boolean;
    readOnly?: boolean;

    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (code: string) => void;
}

export default class ReactExpr extends React.Component<ReactExprProps> {
}
