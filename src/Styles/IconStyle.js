import React from 'react'
import styled from 'styled-components';

export default function Icons({className}) {
    return <Icon className={className} />
}

export const Icon = styled.i`
    font-size: 18px;
    margin-right: 16px;
`